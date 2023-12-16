import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from './Main'
import AdminSidebar from '../components/AdminSidebar'
import AdminForm from '../components/AdminForm'
import LayoutMain from '../components/LayoutMain'
import Error404 from './Error404'
import Faq from './Faq'
import Login from './Login'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LayoutMain/>}>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/admin/panel' element={<AdminSidebar/>}>
                    <Route path='/admin/panel' element={<AdminForm/>}/>
                </Route>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='*' element={<Error404/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter