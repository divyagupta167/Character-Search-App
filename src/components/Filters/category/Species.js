import React from "react";
import FilterBtn from "../FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h5>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body  d-flex flex-wrap gap-1">
          {species.map((items, index) => (
            <FilterBtn
              setPageNumber={setPageNumber}
              task={setSpecies}
              key={index}
              name="species"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
