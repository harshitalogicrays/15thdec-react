import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pagenotfound from "./pages/Pagenotfound";
import Home from "./pages/Home";
import App from "./App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element: <Home />  },
        {path: "login", element: <Login />  },
        { path: "register", element: <Register />  },
        {  path: "*", element: <Pagenotfound /> },
      ],
    },
  ]);