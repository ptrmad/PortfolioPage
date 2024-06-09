import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./styles/globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./componets/Layout/Layout.tsx";
import { Home } from "./views/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
