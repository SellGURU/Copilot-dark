import { createBrowserRouter } from "react-router-dom";
import { Develop, Home, PatientList } from "../pages";
import { InfoGraphic } from "@/components/overview-infographic/InfoGraphic";
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
        element:<PatientList></PatientList>
      },
      {
        path:'/patientList/infoGraphic',
        element : <InfoGraphic/>,
      }
    ]
  },
]);

export default router