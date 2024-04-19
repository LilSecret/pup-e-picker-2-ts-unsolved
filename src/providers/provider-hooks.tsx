import { useContext } from "react";
import { DogContext } from "./DogProvider";
import { PageContext } from "./PageProvider";
import { FormContext } from "./FormProvider";

export const useDogContext = () => useContext(DogContext);
export const usePageContext = () => useContext(PageContext);
export const useFormContext = () => useContext(FormContext);
