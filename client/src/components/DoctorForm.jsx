import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
const DoctorForm = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [location,setLocation] = useState('')
  const [position,setPosition] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token){
      return navigate('/admin/login')
    }
  })
  const createDoctor = async(e) =>{
    
    const res = await axios.post('http://localhost:5000/doctor/create',{
        firstName,
        lastName,
        email,
        password,
        location,
        position
    })
    console.log(res)
  }
  return (
    <div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Create New Doctor</h2>
          <form className="max-w-sm" onSubmit={(e)=>createDoctor(e)}>
            <div className="mb-4">
              <label htmlFor="Title" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor First Name
              </label>
              <input
                type="text"
                id="Title"
                name="Title"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="Enter sight title"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Last Name
              </label>
              <input
                type="text"
                id="desc"
                name="desc"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="Enter sight description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Email
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter sight location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Password
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter sight location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder="Enter sight location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Position
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={position}
                onChange={(e)=>setPosition(e.target.value)}
                placeholder="Enter sight location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Create Doctor
            </button>
          </form>
        </div>
    </div>
  )
}

export default DoctorForm