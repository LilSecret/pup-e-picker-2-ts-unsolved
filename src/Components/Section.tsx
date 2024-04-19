import { ReactNode } from "react";
import { useDogContext } from "../providers/provider-hooks";

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { dogs } = useDogContext();
  const favoriteAmount = dogs.filter((dog) => dog.isFavorite).length;
  const unfavoritedAmount = dogs.length - favoriteAmount;

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${"active"}`}
            onClick={() => {
              alert("click favorited");
            }}
          >
            favorited ( {favoriteAmount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${""}`}
            onClick={() => {
              alert("click unfavorited");
            }}
          >
            unfavorited ( {unfavoritedAmount} )
          </div>
          <div
            className={`selector ${""}`}
            onClick={() => {
              alert("clicked create dog");
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
