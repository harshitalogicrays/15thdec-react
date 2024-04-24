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
import AddSlider from "./features/Admin/AddSlider";
import ViewSlider from "./features/Admin/ViewSlider";
import Products from "./features/Products";
import Cart from "./features/Cart";
import ViewProduct from "./features/Admin/ViewProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element:<DefaultLayout> <Home /></DefaultLayout>  },
        {path: "login", element: <Login />  },
        { path: "register", element: <Register />  },
        { path: "products", element:<DefaultLayout><Products /></DefaultLayout>   },
        { path: "cart", element: <Cart />  },
        {path:'admin',element:<AdminLayout></AdminLayout>,
      children:[
        {path:'',element:<Dashboard/>},
        {path:'addproduct',element:<AddProduct/>},
        {path:'viewproduct',element:<ViewProduct/>},
        {path:'editproduct/:id',element:<AddProduct/>},
        {path:'addcategory',element:<AddCategory/>},
        {path:'viewcategory',element:<ViewCategory/>},
        {path:'editcategory/:id',element:<AddCategory/>},
        {path:'addslider',element:<AddSlider/>},
        {path:'viewslider',element:<ViewSlider/>},
        {path:'editslider/:id',element:<AddSlider/>},
      ]
    },
     {  path: "*", element: <Pagenotfound /> },
      ],
    },
  ]);