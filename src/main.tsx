import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import "./styles/theme.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { Home } from "./views/Home/Home.tsx";
import { Portfolio } from "./views/Portfolio/Portfolio.tsx";
import { CV } from "./views/CV/CV.tsx";
import { Contact } from "./views/Contact/Contact.tsx";
import { Error } from "./components/Error/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/cv", element: <CV /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
