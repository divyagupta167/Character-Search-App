
import React,{useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber,pageNumber,info}) => {

  let [width, setWidth]=useState(window.innerWidth)
  let updateDimension=()=>{
    setWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize",updateDimension)
    return ()=> window.removeEventListener("resize",updateDimension)
  })
  

  return (
    <>

    <style jsx>
    {
      `
      @media (max-width: 768px){
          .next,.prev{
            display:none;
          }
          .pagination{
            font-size:14px;
          }
      }
      `
    }

    </style>
   <ReactPaginate 
   className="pagination justify-content-center gap-4 my-4"
   style
   nextLabel="Next"
   previousLabel="Prev"
   nextClassName="btn btn-outline-light next"
   previousClassName="btn btn-outline-light prev"
   pageClassName="page-item"
   pageLinkClassName="page-link"
   marginPagesDisplayed={width<576?1:2}
   pageRangeDisplayed={width<576?1:2}
   activeClassName="active"
   forcePage={pageNumber===1?0 :pageNumber-1}
   onPageChange={(data)=>{
    setPageNumber(data.selected +1)
   }}
   pageCount={info?.pages} 

   />

</>

   
  );
};

export default Pagination;
