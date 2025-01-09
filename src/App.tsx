import React from "react";
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
  
  React.useEffect(() => {
    
  },[])
  
  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}>
        <MyContextProvider>
          <Routes>
            <Route path={"/"} element={<Layout/>}>
              <Route path={"/portfolio"} element={<Home/>}/>
              <Route path={"/portfolio/accordion"} element={<Accordion/>}/>
              <Route path={"/portfolio/modal"} element={<Modal/>}/>
              <Route path={"/portfolio/carousel"} element={<CarouselPage/>}/>
              <Route path={"/portfolio/to-do"} element={<Todo/>}/>
              <Route path={"/portfolio/*"} element={<NoFound/>}/>
            </Route>
          </Routes>
        </MyContextProvider>
    </BrowserRouter>
  )
}

export default App
