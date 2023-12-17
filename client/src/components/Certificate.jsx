import React from 'react'
import { Link } from 'react-router-dom'
const Certificate = ({certificate}) => {
  return (
    <div>
        <Link
            id='disease'
            to={'http://localhost:5000/'+certificate.path}
            className='font-light hover:underline '>
            {certificate.name}
        </Link>
    </div>
  )
}

export default Certificate