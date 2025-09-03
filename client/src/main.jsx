import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Main from "./pages/main";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Card from "./pages/Card";
import Portal from "./pages/Portal";
import Layout from "./pages/Layout";

// Define your routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="card" element={<Card />} />
      <Route path="portal" element={<Portal />} />
    </Route>
  )
);

// Attach app to root
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
