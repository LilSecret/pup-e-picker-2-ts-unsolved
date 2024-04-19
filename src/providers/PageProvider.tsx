import { ReactNode, createContext, useState } from "react";
import { TDog, TPage } from "../types";
import { useDogContext } from "./provider-hooks";

type TPageProvider = {
  currentPage: TPage;
  setActivePage: (page: TPage) => void;
  getDogsPage: () => TDog[];
};

type TProps = {
  children: ReactNode;
};

export const PageContext = createContext<TPageProvider>({} as TPageProvider);

export const PageProvider = ({ children }: TProps) => {
  const [currentPage, setCurrentPage] = useState<TPage>("all");

  const { dogs } = useDogContext();

  const setActivePage = (page: TPage) => {
    setCurrentPage(page === currentPage ? "all" : page);
  };

  const getDogsPage = (): TDog[] => {
    switch (currentPage) {
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
    <PageContext.Provider value={{ currentPage, setActivePage, getDogsPage }}>
      {children}
    </PageContext.Provider>
  );
};
