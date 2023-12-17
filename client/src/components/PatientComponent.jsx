import React from 'react'
import { Link } from 'react-router-dom'
const PatientComponent = ({patient}) => {
  return (
    <div>
        <Link
            to=''
            className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100 duration-200'>
            <img
                alt='logo'
                className='rounded-full w-28 h-28 my-auto ml-2 mb-3 mt-3'
                src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
            <div className='block my-auto mx-2'>
                <p
                    id='PatientName'
                    className='font-semibold'>
                    {patient.firstName+' '+patient.lastName}
                </p>
                <p
                    id='PatientEmail'
                    className='font-light'>
                    {patient.email}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default PatientComponent