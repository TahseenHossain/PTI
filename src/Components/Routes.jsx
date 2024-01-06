import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./LayOut/main";
import AddPopular from "./AddPopular";
import Populars from "./Home/Populars";
import AddRecommended from "./AddRecommended";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/addPopular',
          element: <AddPopular></AddPopular>,
        },
        {
          path: '/addRecommended',
          element: <AddRecommended></AddRecommended>,
        },
        {
          path: '/populars',
          element: <Populars></Populars>,
        },
      ]
    },
  ]);