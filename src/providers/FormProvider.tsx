import { ReactNode, createContext, useState } from "react";
import { dogPictures } from "../dog-pictures";
import { useDogContext } from "./provider-hooks";

type TForm = {
  name: string;
  description: string;
  image: string;
};

type TFormContext = {
  form: TForm;
  setForm: (form: TForm) => void;
  submitForm: () => void;
  resetForm: () => void;
};

type TProps = {
  children: ReactNode;
};

export const FormContext = createContext<TFormContext>({} as TFormContext);

export const FormProvider = ({ children }: TProps) => {
  const { addDog } = useDogContext();

  const [form, setForm] = useState<TForm>({
    name: "",
    description: "",
    image: dogPictures.BlueHeeler,
  });

  const submitForm = () => {
    addDog({ ...form, isFavorite: false });
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      image: dogPictures.BlueHeeler,
    });
  };

  return (
    <FormContext.Provider value={{ form, setForm, submitForm, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
