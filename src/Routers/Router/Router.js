import { createBrowserRouter } from "react-router-dom";
import Casts from "../../Pages/AllCasts/Casts";
import CastDetails from "../../Pages/CastDetails/CastDetails";
import Extra from "../../Pages/Extra/Extra";
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
  {
    path: "/cast-details/:id",
    element: <CastDetails />,
    loader: ({ params }) =>
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
  },
  {
    path: "/extra",
    element: <Extra />,
  },
]);