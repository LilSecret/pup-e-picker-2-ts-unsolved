import { ReactNode } from "react";
import { useDogContext } from "../providers/DogProvider";
import { TPage } from "../types";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { dogs, currentPage, setActivePage } = useDogContext();
  const favoriteAmount = dogs.filter((dog) => dog.isFavorite).length;
  const unfavoritedAmount = dogs.length - favoriteAmount;

  const isPageActive = (page: TPage) => {
    return page === currentPage ? "active" : "";
  };

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${isPageActive("favorite")}`}
            onClick={() => {
              setActivePage("favorite");
            }}
          >
            favorited ( {favoriteAmount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector  ${isPageActive("unfavorite")}`}
            onClick={() => {
              setActivePage("unfavorite");
            }}
          >
            unfavorited ( {unfavoritedAmount} )
          </div>
          <div
            className={`selector  ${isPageActive("form")}`}
            onClick={() => {
              setActivePage("form");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
