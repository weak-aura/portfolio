import React from 'react';
// import styles from "./Layout.module.scss";
import {Outlet} from "react-router-dom";
import {Header} from "../../Header";
import {useMyContext} from "../../../context/Context.tsx";

export const Layout = () => {

  const {setIsOpen} = useMyContext();

  return (
    <React.Fragment>
      <div onClick={() => setIsOpen(false)}>
        <div className={"fixed top-0 left-[50%] translate-x-[-50%] w-full z-50"}>
          <Header/>
        </div>
        <Outlet/>
      </div>
    </React.Fragment>
  );
};

