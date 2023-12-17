import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from './Main'
import AdminSidebar from '../components/AdminSidebar'
import AdminForm from '../components/AdminForm'
import LayoutMain from '../components/LayoutMain'
import Error404 from './Error404'
import Faq from './Faq'
import Login from './Login'
import LayoutPatient from '../components/LayoutPatient'
import LayoutDoctor from '../components/LayoutDoctor'
import Registration from './Registration'
import PatientProfile from './PatientProfile'
import DoctorProfile from './DoctorProfile'
import PatientsList from './PatientsList'
import ChatMenuGet from './ChatMenuGet'
import VideoChat from './VideoChat'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LayoutMain/>}>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/admin/panel' element={<AdminSidebar/>}>
                    <Route path='/admin/panel' element={<AdminForm/>}/>
                </Route>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='*' element={<Error404/>}/>
            </Route>
            <Route path='/patient' element={<LayoutPatient/>}>
              <Route path='/patient' element={<PatientProfile/>}/>
              <Route path='/patient/chat' element={<ChatMenuGet/>}/>
              <Route path='/patient/video' element={<VideoChat/>}/>
            </Route>
            <Route path='/doctor' element={<LayoutDoctor/>}>
              <Route path='/doctor' element={<DoctorProfile/>}/>
              <Route path='/doctor/patients' element={<PatientsList/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter