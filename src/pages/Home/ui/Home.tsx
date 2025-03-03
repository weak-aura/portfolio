// import React from 'react';
import styles from "./Home.module.scss";
import photo from "../../../assets/photo.jpg"

import {FaWhatsapp, FaTelegramPlane, FaLinkedinIn, FaGithub} from "react-icons/fa";
import {SiHabr} from "react-icons/si";

export const Home = () => {

  return (
    <div className={styles.canvas}>
      <div className={styles.primary_frame}>
        <div className={styles.author}>
          <h1>Bekzat Tulebayev</h1>
          <p className="flex-1">«Увлеченный фронтенд-разработчик, нацеленный на создание качественного и эффективного
            кода. Обладаю глубокими знаниями React и TypeScript, а также опытом работы с современными библиотеками. В
            процессе разработки особое внимание уделяю созданию удобных и отзывчивых пользовательских интерфейсов, а
            также оптимизации производительности. Готов к решению сложных задач и постоянному обучению.»</p>
          <h2 className="mb-2">Контакты:</h2>
          <div className="flex gap-8 ">
            <a className="hover:scale-125 transition-transform duration-300"
               href="https://wa.me/+77472999242"><FaWhatsapp className="w-[40px] h-[40px] text-[#08D85C]"/></a>
            <a className="hover:scale-125 transition-transform duration-300"
               href="https://telegram.me/weak_aura"><FaTelegramPlane className="w-[40px] h-[40px] text-[#2CA6E2]"/></a>
            <a className="hover:scale-125 transition-transform duration-300"
               href="https://www.linkedin.com/in/bekzat-tulebayev-691244354/"><FaLinkedinIn
              className="w-[40px] h-[40px] text-[#0a66c2]"/></a>
            <a className="hover:scale-125 transition-transform duration-300"
               href="https://career.habr.com/weakaura"><SiHabr className="w-[40px] h-[40px] text-white"/></a>
            <a className="hover:scale-125 transition-transform duration-300"
               href="https://github.com/weak-aura"><FaGithub className="w-[40px] h-[40px] text-[#f0f6fc]"/></a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={photo} alt="img"/>
        </div>
      </div>
    </div>
  );
};

