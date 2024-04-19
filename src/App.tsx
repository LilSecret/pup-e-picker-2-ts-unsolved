import { CreateDogForm } from "./Components/CreateDogForm";
import { DogCard } from "./Components/DogCard";
import { Section } from "./Components/Section";
import { useDogContext, usePageContext } from "./providers/provider-hooks";

export function App() {
  const { currentPage, getPage } = usePageContext();
  const { loading, removeDog, toggleDogFavorite } = useDogContext();

  const activeDogs = getPage();

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "}>
        {activeDogs.map((dog) => {
          return (
            <DogCard
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
        {currentPage === "form" && <CreateDogForm />}
      </Section>
    </div>
  );
}
