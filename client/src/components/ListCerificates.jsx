import React from 'react'
import Certificate from './Certificate'

const ListCerificates = ({certificates}) => {
  return (
    <div>
        <div className=''>
            <div className="mt-8 flex flex-col justify-center border-b border-teal-500 pb-8">
                <p className="text-gray-600 text-center font-semibold text-xl lg:px-16">Список справок</p>
            </div>
            {certificates.map((certificate)=>{
                return <Certificate certificate={certificate} />
            })}
        </div>
    </div>
  )
}

export default ListCerificates