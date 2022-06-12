import React from "react";
import { withPagination, WithPaginationProps } from "./HOC/withPagination";

const UseTheHoc = ({
  prevPage,
  nextPage,
  setPage,
  page
}: WithPaginationProps) => {
  return (
    <div>
      {" "}
      <button onClick={prevPage}>prev</button> use the hoc {page}{" "}
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default withPagination(UseTheHoc, 99);
