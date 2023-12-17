import React, { useEffect, useState } from "react";
import NavDoctor from "../components/NavDoctor";
import FooterDoctor from "../components/FooterDoctor";
import {Link} from "react-router-dom";
import axios from 'axios'
import PatientComponent from "../components/PatientComponent";

const PatientsList = () => {

    const [patients,setPatients] = useState([])
    const [search,setSearch] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/user/all').then((res)=>{
            setPatients(res.data)
        })
        
    },[])
    let filtredPatient
    if(patients){
    filtredPatient = patients.filter(patient=>{
        const fullName = patient.firstName+' '+patient.lastName
        return fullName.toLowerCase().includes(search.toLowerCase())
    })
    } else{
        filtredPatient = null 
    }
  return(
      <div>
          <div>
              <div className="max-w-2xl mx-auto mt-14 ">
                  <form>
                      <label htmlFor="default-search"
                             className="mb-2 text-sm font-medium text-gray-900 sr-only">Поиск</label>
                      <div className="relative">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-500" fill="none"
                                   stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                          </div>
                          <input type="search" id="default-search"
                                 className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                                 placeholder="Введите имя и фамилию пациента" 
                                 value={search}
                                 onChange={(e)=>{setSearch(e.target.value)}}
                                 required/>

                      </div>


                  </form>
                  {/* <button
                        className="text-white relative right-2.5 bottom-2.5 bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2">
                        Добавить пациента
                    </button> */}
              </div>
              <div className='flex justify-around mt-8 '>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {filtredPatient ?
                    filtredPatient.map((patient)=>{
                        return <PatientComponent patient={patient} key={patient._id}/>
                    })
                    :
                    <h2>У вас нет пациентов</h2>    
                }
                  </div>
              </div>
          </div>
          </div>
    )
}
export default PatientsList