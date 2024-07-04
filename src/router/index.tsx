import { createBrowserRouter } from "react-router-dom";
import { Develop, Home, PatientList , InfoGraphic, Biomarker } from "../pages";
import Layout from "@/Themes/index";
import { OverviewInfoGraphic } from "@/components";
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
        path: "/patientList/info-graphic",
        element: <InfoGraphic />,
        children : [
          {
            index: true,
            element: <OverviewInfoGraphic />
          },
          {
            path : 'biomarker',
            element : <Biomarker />
          },
          {
            path : 'diagnosis',
           
          },
          {
            path : 'intervention',
          },
          {
            path : 'timeline',
          },
          {
            path : 'messages',
          },
        
        ]
      },
      
    ],
  },
]);

export default router;
