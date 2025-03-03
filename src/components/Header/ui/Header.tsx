// import React from 'react';
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";

import {IoMdHome} from "react-icons/io";
import {HamburgerButton} from "../../HamburgerButton";
import {useMyContext} from "../../../context/Context.tsx";
import React from "react";

const routeList: Array<{ name: string, route: string }> = [
  {name: "Обо мне", route: "about"},
  {name: "Мои работы", route: "my_projects"},
]

export const Header = () => {
  const {isOpen, setIsOpen} = useMyContext();

  return (
    <div className={isOpen ? styles.overlay : undefined}>
      <header className={`${styles.frame} ${isOpen ? styles.h_animate : undefined}`}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>

        <div className={`${styles.auxiliary_frame}`}>
          <div className={styles.logo}>
            <Link className={styles.link} to={"/"} onClick={() => setIsOpen(false)}>
              <IoMdHome/>Главная
            </Link>
          </div>

          <nav className={`${styles.nav} ${isOpen && styles.nav_visible} `}>
            {routeList.map((el) => (
              <Link to={`/${el.route}`} onClick={() => setIsOpen(false)} key={el.route}>
                <li >
                  {el.name}
                </li>
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.hamburger_button}><HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/></div>
      </header>
    </div>
  );
};

