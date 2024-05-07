import {createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HomePage from "../pages/HomePage/HomePage";
import { FormUserPost } from "../forms/FormUserPost";

export const router = createBrowserRouter([
    {
      path:"/Proyecto-React",
      element: <App/>,
      children: [
        {path:"company", element: <CompanyPage/>},
        {path:"search", element: <SearchPage/>},
        {path:"", element: <HomePage/>},
      ],
      errorElement: <ErrorPage/>,
    },{
      path: "/Proyecto-React/company",
      element: <CompanyPage/>,
      children: [
        {path: "addUser", element: <FormUserPost/>}
      ]
    },
  ])