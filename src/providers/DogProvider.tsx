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
    setLoading(true);
    setDogs(
      dogs.map((dog) =>
        dog.id === id ? { ...dog, isFavorite: favorited } : dog
      )
    );
    Requests.patchDog({ isFavorite: favorited }, id)
      .catch((error) => {
        if (error) {
          setDogs(dogs);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeDog = (id: number) => {
    setLoading(true);
    setDogs(dogs.filter((dog) => dog.id != id));
    Requests.deleteDogRequest(id)
      .catch((error) => {
        if (error) {
          setDogs(dogs);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateAllDogs = () => {
    setLoading(true);
    Requests.getAllDogs()
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
