import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import AboutConsultant from './pages/AboutConsultant'
import Home from './pages/Home'
import Layout from "./pages/layout/Layout"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-consultant" element={<AboutConsultant />} />
        </Route>
    )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
