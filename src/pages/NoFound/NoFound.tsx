// import React from 'react';
import {Link} from "react-router-dom";

export const NoFound = () => {
  return (
    <div className={"text-center mt-[150px]"}>
      <h1>"Error_404" Page not found!</h1>
      <Link className={"hover:text-white"} to={"/"}>
        <button className={"underline mt-5"}>click Back to "Home" page</button>
      </Link>
    </div>
  );
};

