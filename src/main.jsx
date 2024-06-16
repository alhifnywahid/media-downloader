import React from "react";
import ReactDOM from "react-dom/client";
import Tiktok from "./Layouts/Tiktok";
import Error from "./Layouts/Error";
// import Instagram from './Layouts/Instagram'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "tailwindcss/tailwind.css"; 

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Tiktok />,
  },
  /* {
    path: "/instagram",
    element: <Instagram />,
  },
  {
    path: "/facebook",
    element: <Tiktok />,
  },
  {
    path: "/youtube",
    element: <Tiktok />,
  },
  {
    path: "/twitter",
    element: <Tiktok />,
  }, */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
