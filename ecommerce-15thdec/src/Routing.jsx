import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pagenotfound from "./pages/Pagenotfound";
import Home from "./pages/Home";
import App from "./App";
import DefaultLayout from "./features/DefaultLayout";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import AddProduct from "./features/Admin/AddProduct";
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element:<DefaultLayout> <Home /></DefaultLayout>  },
        {path: "login", element: <Login />  },
        { path: "register", element: <Register />  },
        {path:'admin',element:<AdminLayout></AdminLayout>,
      children:[
        {path:'',element:<Dashboard/>},
        {path:'addproduct',element:<AddProduct/>},
        {path:'addcategory',element:<AddCategory/>},
        {path:'viewcategory',element:<ViewCategory/>},
        {path:'editcategory/:id',element:<AddCategory/>},
      ]
    },
     {  path: "*", element: <Pagenotfound /> },
      ],
    },
  ]);