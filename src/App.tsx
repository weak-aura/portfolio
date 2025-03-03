import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {Layout} from "./components/Layout";

import {Home} from "./pages/Home";
import {NoFound} from "./pages/NoFound/NoFound.tsx";

import {MyContextProvider} from "./context/Context.tsx";
import {About} from "./pages/About";
import {MyProjects} from "./pages/MyProjects";
import {FutureConfig} from "tailwindcss/types/config";

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/my_projects"} element={<MyProjects />} />
        <Route path={"/*"} element={<NoFound />} />
      </Route>,
    ]
  ),
  {
    future: {
      v7_startTransition: true,
    } as FutureConfig, // Добавляем as FutureConfig
  }
);

function App() {

  return (
    <>
      <MyContextProvider>
        <RouterProvider router={router}/>
      </MyContextProvider>
    </>
  )
}

export default App
