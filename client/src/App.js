import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"

//layouts
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(

  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/:projectId" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

function App() {

  return (
    <div>
      <RouterProvider basename="/Portfolio" router={router} />
    </div>

  )
}

export default App