import { createBrowserRouter } from "react-router-dom";
import { Develop, Home } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'/develop',
    element: <Develop></Develop>
  }
]);

export default router