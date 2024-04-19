import { ReactNode } from "react";
import { useDogContext, usePageContext } from "../providers/provider-hooks";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { dogs } = useDogContext();
  const { currentPage, setActivePage } = usePageContext();
  const favoriteAmount = dogs.filter((dog) => dog.isFavorite).length;
  const unfavoritedAmount = dogs.length - favoriteAmount;

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${currentPage === "favorite" ? "active" : ""}`}
            onClick={() => {
              setActivePage("favorite");
            }}
          >
            favorited ( {favoriteAmount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector  ${
              currentPage === "unfavorite" ? "active" : ""
            }`}
            onClick={() => {
              setActivePage("unfavorite");
            }}
          >
            unfavorited ( {unfavoritedAmount} )
          </div>
          <div
            className={`selector  ${currentPage === "form" ? "active" : ""}`}
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
