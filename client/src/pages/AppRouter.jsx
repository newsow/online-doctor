import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from './Main'
import AdminSidebar from '../components/AdminSidebar'
import AdminForm from '../components/AdminForm'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route path='/' element={<Main/>}/>
                <Route path='/admin/panel' element={<AdminSidebar/>}>
                    <Route path='/admin/panel' element={<AdminForm/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter