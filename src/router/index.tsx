import { createBrowserRouter } from "react-router-dom";
import { Develop, Home, PatientList , InfoGraphic } from "../pages";
import Layout from "@/Themes/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/develop",
        element: <Develop></Develop>,
      },
      {
        path: "/patientList",
        element : <PatientList/>,
        
      },
      {
        path: "/patientList/Overview-infoGraphic",
        element: <InfoGraphic />,
      },
      
    ],
  },
]);

export default router;
