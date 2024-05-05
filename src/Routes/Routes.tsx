import { Search, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import Root from "./root";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
      path:"/Proyecto-React",
      element: <App/>,
      children: [
        {path:"root", element: <Root/>},
        {path:"company/tickle:", element: <CompanyPage/>},
        {path:"search", element: <SearchPage/>},
        {path:"home", element: <HomePage/>},
      ],
      errorElement: <ErrorPage></ErrorPage>,
    },
  ])