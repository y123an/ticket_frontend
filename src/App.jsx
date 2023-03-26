import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider ,HashRouter} from "react-router-dom";
import Home from "./components/homecomponets/Home";
import Movies from "./components/moviescomponent/Movies";
import Sport from "./components/sportcomponents/Sport";
import Concert from "./components/concertcomponenets/Concert";
import Spacial from "./components/specialcompinent/Spacial";
import Book from "./components/bookcomponent/Book";

// creating the root routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/movies",
    element: <Movies></Movies>,
  },
  {
    path: "/sports",
    element: <Sport></Sport>,
  },
  {
    path: "/concerts",
    element: <Concert></Concert>,
  },
  {
    path:"/spacials",
    element:<Spacial></Spacial>
  },
  {
    path:"/book",
    element:<Book></Book>
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
