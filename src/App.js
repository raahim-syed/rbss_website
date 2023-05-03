import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import AboutConsultant from './pages/About/AboutConsultant'
import Home from './pages/Home'
import Layout from "./pages/layout/Layout"
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-consultant" element={<AboutConsultant />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
    )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
