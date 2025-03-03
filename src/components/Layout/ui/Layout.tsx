import React from 'react';
// import styles from "./Layout.module.scss";
import {Outlet} from "react-router-dom";
import {Header} from "../../Header";
import {useMyContext} from "../../../context/Context.tsx";

export const Layout = () => {

  const {setIsOpen} = useMyContext();

  return (
    <React.Fragment>
      <div onClick={() => setIsOpen(false)} className="mx-5">
        <div className={"fixed top-0 left-[50%] translate-x-[-50%] w-screen z-50"}>
         
            <Header/>
    
        </div>
        <div className="mt-20 mx-auto max-w-screen-lg">
          <Outlet/>
        </div>
      </div>
    </React.Fragment>
  );
};

