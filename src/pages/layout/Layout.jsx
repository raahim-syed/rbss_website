import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer extraClasses="mt-4" />
    </div>
  )
}

export default Layout
