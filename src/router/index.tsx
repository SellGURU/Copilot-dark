import { createBrowserRouter } from "react-router-dom";
import { Develop, Home, InfoGraphic, PatientList } from "../pages";
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
        children:[
          {
            path:'infographic',
            element:<InfoGraphic></InfoGraphic>
          }
        ]
      }
    ]
  },
]);

export default router