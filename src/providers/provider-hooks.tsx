import { useContext } from "react";
import { DogContext } from "./DogProviders";

export const useDogContext = () => useContext(DogContext);
