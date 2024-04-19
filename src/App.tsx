import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { FormProvider } from "./providers/FormProvider";
import { usePageContext } from "./providers/provider-hooks";

export function App() {
  const { currentPage } = usePageContext();

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "}>
        <Dogs />
        <FormProvider>
          {currentPage === "form" && <CreateDogForm />}
        </FormProvider>
      </Section>
    </div>
  );
}
