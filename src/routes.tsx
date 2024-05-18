
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import Home from "./pages/home";
import Legpics from "./pages/legpics";
import Post from "./pages/Post";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MyPhotos from "./pages/myphotos";
import Odds from "./components/odds";

export const router = createBrowserRouter([
    {
      element: <ProtectedRoutes/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          errorElement: <Error/>,
        },
        {
          path: "/Error",
          element: <Error/>,
          errorElement: <Error/>,
        },
        {
          path: "/Home",
          element: <Home/>,
          errorElement: <Error/>,
        },
        {
          path: "/Legpics",
          element: <Legpics/>,
          errorElement: <Error/>,
        },
        {
          path: "/Post",
          element: <Post/>,
          errorElement: <Error/>,
        },
        {
          path: "/Profile",
          element: <Profile/>,
          errorElement: <Error/>,
        },
        {
          path: "/MyPhotos",
          element: <MyPhotos/>,
          errorElement: <Error/>,
        }
      ],
    },
    {
      path: "/Login",
      element: <Login/>,
      errorElement: <Error/>,
    },
    {
     /* path: "/Odds",
      element: <Odds/>,
      errorElement: <Error/>,*/
    },
    {
      path: "/Signup",
      element: <Signup />,
      errorElement: <Error />,
    },
  ]);
  
  export default router;
  