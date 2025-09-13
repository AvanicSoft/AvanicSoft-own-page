import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Card from "./pages/Card";
import Portal from "./pages/portal";
import Layout from "./pages/Layout";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="card" element={<Card />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />

      <Route path="about" element={<About />} />

    </Route>
      <Route path="portal" element={<Portal />} />
    </>
  )
);


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
