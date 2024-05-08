import {createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HomePage from "../pages/HomePage/HomePage";
import { FormUserPost } from "../forms/FormUserPost";
import EditPage from "../pages/EditPage/EditPage";
import { UserViewPage } from "../pages/UserViewPage/UserViewPage";

export const router = createBrowserRouter([
    {
      path:"/Proyecto-React",
      element: <App/>,
      children: [
        {path:  "company", element: <CompanyPage/>},
        {path: "search", element: <SearchPage/>},
        {path:"", element: <HomePage/>},
      ],
      errorElement: <ErrorPage/>,
    },{
      path:"/Proyecto-React/search",
      element: <App/>,
      children: [
        {path: "view/:userId", element: <UserViewPage/>},
        {path: "edit/:userId", element: <EditPage/>},
        {path:"", element: <SearchPage/>},
    ],
    errorElement: <ErrorPage/>
  },{
      path:"/Proyecto-React/company",
      element: <App/>,
      children: [
        {path:"addUser", element: <FormUserPost/>},
        {path: "view/:userId", element: <UserViewPage/>},
        {path: "edit/:userId", element: <EditPage/>},
        {path: "delete/:userId",element: <UserViewPage />},
        {path:"", element: <CompanyPage/>},
    ],
    errorElement: <ErrorPage/>,
  }
  ])

