import { createBrowserRouter } from "react-router-dom";
import { Develop, Home, PatientList } from "../pages";
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
      }
    ]
  },
]);

export default router