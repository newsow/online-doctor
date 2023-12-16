import React from 'react'
import NavPatient from './NavPatient'
import { Outlet } from 'react-router-dom'
import FooterPatient from './FooterPatient'

const LayoutPatient = () => {
  return (
    <div>
        <NavPatient/>
        <Outlet/>
        <FooterPatient/>
    </div>
  )
}

export default LayoutPatient