import { useDogContext } from "../providers/DogProvider";
import { DogCard } from "./DogCard";

export const Dogs = () => {
  const { loading, removeDog, toggleDogFavorite, getDogsPage } =
    useDogContext();
  const activeDogs = getDogsPage();

  return (
    <>
      {activeDogs.map((dog) => {
        return (
          <DogCard
            key={dog.id}
            dog={dog}
            onTrashIconClick={() => {
              removeDog(dog.id);
            }}
            onEmptyHeartClick={() => {
              toggleDogFavorite(true, dog.id);
            }}
            onHeartClick={() => {
              toggleDogFavorite(false, dog.id);
            }}
            isLoading={loading}
          />
        );
      })}
    </>
  );
};
