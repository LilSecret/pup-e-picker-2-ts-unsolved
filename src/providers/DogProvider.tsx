import { ReactNode, createContext, useEffect, useState } from "react";
import { TDog, TNewDog } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";

type TDogProvider = {
  dogs: TDog[];
  loading: boolean;
  removeDog: (id: number) => void;
  toggleDogFavorite: (favorited: boolean, id: number) => void;
  updateAllDogs: () => void;
  addDog: (dog: TNewDog) => void;
};

type TProps = {
  children: ReactNode;
};

export const DogContext = createContext<TDogProvider>({} as TDogProvider);

export default function DogProviders({ children }: TProps) {
  const [dogs, setDogs] = useState<TDog[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleDogFavorite = (favorited: boolean, id: number) => {
    setDogs(
      dogs.map((dog) =>
        dog.id === id ? { ...dog, isFavorite: favorited } : dog
      )
    );
    Requests.patchDog({ isFavorite: favorited }, id).catch((error) => {
      if (error) {
        setDogs(dogs);
      }
    });
  };

  const removeDog = (id: number) => {
    setDogs(dogs.filter((dog) => dog.id != id));
    Requests.deleteDogRequest(id).catch((error) => {
      if (error) {
        setDogs(dogs);
      }
    });
  };

  const updateAllDogs = () => {
    setLoading(true);
    Requests.getAllDogs()
      .then((response) => {
        setDogs(response as TDog[]);
      })
      .catch((error) => {
        if (error) {
          toast.error("There was an Error getting Dogs");
        }
      })
      .finally(() => setLoading(false));
  };

  const addDog = (dog: TNewDog) => {
    setLoading(true);
    Requests.postDog(dog)
      .then(() => {
        toast.success("Dog Created 🐶");
        return updateAllDogs();
      })
      .catch((error) => {
        if (error) {
          toast.error("There was an Error Posting you Dog");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    updateAllDogs();
  }, []);

  return (
    <DogContext.Provider
      value={{
        dogs,
        loading,
        toggleDogFavorite,
        removeDog,
        updateAllDogs,
        addDog,
      }}
    >
      {children}
    </DogContext.Provider>
  );
}
