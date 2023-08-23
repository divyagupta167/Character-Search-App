import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h5>
      <div
        id="collapseOne"
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body  d-flex flex-wrap gap-1">
          {genders.map((items, index) => (
            <FilterBtn setPageNumber={setPageNumber} task={setGender} key={index} name="gender" index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
