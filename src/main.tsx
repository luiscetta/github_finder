import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import SearchPage from "./Pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
