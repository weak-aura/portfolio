// import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";

import {Home} from "./pages/Home";
import {Accordion} from "./pages/Accordion";
import {Modal} from "./pages/Modal";
import {CarouselPage} from "./pages/CarouselPage";
import {Todo} from "./pages/Todo";
import {NoFound} from "./pages/NoFound/NoFound.tsx";

import {MyContextProvider} from "./context/Context.tsx";

function App() {
  
  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}
    basename={"/portfolio/"}
    >
        <MyContextProvider>
          <Routes>
            <Route path={"/"} element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path={"/accordion"} element={<Accordion/>}/>
              <Route path={"/modal"} element={<Modal/>}/>
              <Route path={"/carousel"} element={<CarouselPage/>}/>
              <Route path={"/to-do"} element={<Todo/>}/>
              <Route path={"/*"} element={<NoFound/>}/>
            </Route>
          </Routes>
        </MyContextProvider>
    </BrowserRouter>
  )
}

export default App
