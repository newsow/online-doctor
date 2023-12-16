import React from 'react'
import NavDoctor from './NavDoctor'
import { Outlet } from 'react-router-dom'
import FooterDoctor from './FooterDoctor'

const LayoutDoctor = () => {
  return (
    <div>
        <NavDoctor/>
        <Outlet/>
        <FooterDoctor/>
    </div>
  )
}

export default LayoutDoctor