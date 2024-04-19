import { useDogContext, usePageContext } from "../providers/provider-hooks";
import { DogCard } from "./DogCard";

export const Dogs = () => {
  const { getDogsPage } = usePageContext();
  const { loading, removeDog, toggleDogFavorite } = useDogContext();
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
