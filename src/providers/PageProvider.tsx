import { ReactNode, createContext, useState } from "react";
import { TPage } from "../types";
import { useDogContext } from "./provider-hooks";

type TPageProvider = {
  page: TPage;
  setPage: (page: TPage) => void;
  getPage: () => void;
};

type TProps = {
  children: ReactNode;
};

export const PageContext = createContext<TPageProvider>({} as TPageProvider);

export const PageProvider = ({ children }: TProps) => {
  const [page, setPage] = useState<TPage>("all");

  const { dogs } = useDogContext();

  const getPage = () => {
    switch (page) {
      case "all":
        return dogs;
      case "favorite":
        return dogs.filter((dog) => dog.isFavorite);
      case "unfavorite":
        return dogs.filter((dog) => !dog.isFavorite);
      case "form":
        return [];
    }
  };

  return (
    <PageContext.Provider value={{ page, setPage, getPage }}>
      {children}
    </PageContext.Provider>
  );
};
