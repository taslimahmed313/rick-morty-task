import { createBrowserRouter } from "react-router-dom";
import Casts from "../../Pages/AllCasts/Casts";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/casts",
    element: <Casts />,
  },
]);