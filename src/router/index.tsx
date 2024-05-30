import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Develop, Home, InfoGraphic, PatientList } from "../pages";
=======
import { Develop, Home, PatientList } from "../pages";
import { InfoGraphic } from "@/components/overview-infographic/InfoGraphic";
>>>>>>> overview-infoGraphic
import Layout from '@/Themes/index'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Home />
      },      
      {
        path:'/develop',
        element: <Develop></Develop>
      },
      {
        path:'/patientList',
        element:<PatientList></PatientList>,
  
      }
    ]
  },
]);

export default router