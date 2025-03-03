// import React from 'react';
import {Carousel} from "../../../components/Carousel";

// docs
import {slides} from "../../../assets/img.ts";
import {Accordion} from "../../../components/Accordion";

export const MyProjects = () => {
  return (
    <div>
      <h1 className="mb-4  text-xl font-black">1. Mern app</h1>
      {/*body*/}
      <div className="flex gap-4 md:flex-row flex-col">

        {/*Slider*/}
        <div className="flex justify-center">
          <div className="relative max-w-[500px] h-full rounded-xl overflow-hidden">
            <div className="">
              <Carousel slides={slides}/>
            </div>
            <a href="https://mern-app-client-puce.vercel.app/">
              <button
                className="absolute top-[10px] left-[10px] z-20 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Перейти к приложению
              </button>
            </a>
          </div>
        </div>
        
        {/*stacks*/}
        <div>
          <Accordion title={"Frontend"}><p className="p-4 text-gray-700">@reduxjs/toolkit, framer-motion, react, react-router-dom,
            react-hot-toast,
            react-icons,react-loading-skeleton</p></Accordion>
          <Accordion title={"Backend"}>
            <p className="p-4 text-gray-700">bcryptjs, cloudinary, express, jsonwebtoken, mongoose, multer, nodemailer, mongodb</p>
          </Accordion>
        </div>
      </div>
      
      {/*Description*/}
      <div className="md:mt-4 mt-0">
        <Accordion title={"Описание"}>
          <div className=" rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Система аутентификации с верификацией почты и управлением постами (MongoDB)
            </h2>
            <p className="text-gray-700 mb-4">
              Этот проект представляет собой полноценную систему аутентификации пользователей с обязательной
              верификацией
              email, дополненную функциональностью для создания и управления постами. Для хранения данных используется
              MongoDB, обеспечивая гибкость и масштабируемость.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Ключевые особенности проекта:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-1">Регистрация и верификация пользователей через email.</li>
                <li className="mb-1">Безопасное хранение паролей и восстановление доступа.</li>
                <li className="mb-1">Создание, редактирование и удаление постов.</li>
                <li className="mb-1">Использование MongoDB для хранения данных пользователей и постов.</li>
                <li className="mb-1">Интуитивно понятный пользовательский интерфейс для управления контентом.</li>
              </ul>
            </div>
            <p className="text-gray-700">
              Проект демонстрирует мои навыки в разработке backend-логики, работе с базами данных и создании удобных
              пользовательских интерфейсов.
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

