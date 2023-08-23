import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filters = ({setStatus,setPageNumber,setGender,setSpecies}) => {

  let clear=()=>{
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }
  return (
    <div className="col-lg-2 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2 display-2">Filter</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-2"
      >
        Clear Filter
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
      </div>
    </div>
  );
};

export default Filters;
