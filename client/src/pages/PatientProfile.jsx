import React, { useEffect,useState } from "react";
import ListCerificates from "../components/ListCerificates";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import ModalForm from "../components/ModalForm";
const PatientProfile = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState([])
    const [showModal,setShowModal] = useState(false)
    const token = localStorage.getItem('token')
    const closeModal = () =>{
        setShowModal(false)
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/user/profile',{
          headers:{
            'Authorization': `Bearer ${token}`
          }}).then(response=>{
            setUser(response.data)
          },[])
      })
      if(!token){
        return navigate('/')
      }
    return(
        <div>
            <div className="p-16">
                <div className="p-8 bg-white border-2 border-teal-500 rounded-xl mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative">
                            <div
                                className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center border-b-2 border-teal-500 pb-12">
                        <h1 id='PatientName'
                            className="text-4xl font-medium text-gray-700">{user.firstName+' '+user.lastName}
                            <span
                                id='PatientAge'
                                className="font-light text-gray-500">{user.age}</span>
                        </h1>
                        <p  id='PatientPlace'
                            className="font-light text-gray-600 mt-3">
                            {user.email}
                        </p>

                    </div>
                    <div>
                        <button onClick={()=>{
                            setShowModal(true)
                        }}>
                            Добавить Справку
                        </button>
                    </div>
                    <ModalForm isOpen={showModal} onClose={closeModal} id={user._id}/>
                    <ListCerificates certificates={user.documents} />
                </div>
            </div>
        </div>
    )

}
export default PatientProfile