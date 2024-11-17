import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";

import {Home} from "./pages/Home";
import {Accordion} from "./pages/Accordion";
import {Modal} from "./pages/Modal";
import {Slider} from "./pages/Slider";
import {Todo} from "./pages/Todo";

import {MyContextProvider} from "./context/Context.tsx";
import {NoFound} from "./pages/NoFound/NoFound.tsx";

function App() {
  
  
  
  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}>
        <MyContextProvider>
          <Routes>
            <Route path={"/portfolio/"} element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path={"/portfolio/accordion"} element={<Accordion/>}/>
              <Route path={"/portfolio/modal"} element={<Modal/>}/>
              <Route path={"/portfolio/slider"} element={<Slider/>}/>
              <Route path={"/portfolio/to-do"} element={<Todo/>}/>
              <Route path={"/*"} element={<NoFound/>}/>
            </Route>
          </Routes>
        </MyContextProvider>
    </BrowserRouter>
  )
}

export default App
