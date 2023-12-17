import React from 'react'
import Certificate from './Certificate'

const ListCerificates = ({certificates}) => {
  return (
    <div>
        <div className=''>
            <div className="mt-8 flex flex-col justify-center border-b border-teal-500 pb-8">
                <p className="text-gray-600 text-center font-semibold text-xl lg:px-16">Список справок</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {certificates? certificates.map((certificate)=>{
                return <Certificate certificate={certificate} />
            }): ''}
            </div>
        </div>
    </div>
  )
}

export default ListCerificates