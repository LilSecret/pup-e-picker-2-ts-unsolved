import { useContext } from "react";
import { DogContext } from "./DogProvider";
import { PageContext } from "./PageProvider";

export const useDogContext = () => useContext(DogContext);

export const usePageContext = () => useContext(PageContext);
