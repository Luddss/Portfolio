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

  const [backendData, setBackendData] = useState([{}]);

  /* 
  useEffect(() => {
    //No http needed, proxy defined in package.js
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);


  //To include in the return 
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )} 
      </div>

  */

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App