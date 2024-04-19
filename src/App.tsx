import { CreateDogForm } from "./Components/CreateDogForm";
import { Section } from "./Components/Section";
import { PageProvider } from "./providers/PageProvider";
import { usePageContext } from "./providers/provider-hooks";

export function App() {
  const { page, getPage } = usePageContext();

  const activePage = getPage();

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <Section label={"Dogs: "}>{
        page === "form" ? <CreateDogForm />
      }</Section>
    </div>
  );
}
