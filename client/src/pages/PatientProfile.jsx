import React from "react";
import NavDoctor from "../components/NavDoctor";
import FooterDoctor from "../components/FooterDoctor";
import {Link} from "react-router-dom";

const PatientProfile = () => {
    return(
        <div>
            <NavDoctor/>
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
                            className="text-4xl font-medium text-gray-700">Егорик Егорик
                            <span
                                id='PatientAge'
                                className="font-light text-gray-500"> 27</span>
                        </h1>
                        <p  id='PatientPlace'
                            className="font-light text-gray-600 mt-3">
                            Саров, Россия
                        </p>

                    </div>
                    <div className=''>
                        <div className="mt-8 flex flex-col justify-center border-b border-teal-500 pb-8">
                            <p className="text-gray-600 text-center font-semibold text-xl lg:px-16">Список справок</p>
                        </div>
                        <div className='flex flex-row justify-between mt-8 mx-5'>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                        </div>
                        <div className='flex flex-row justify-between mt-14 mx-5'>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                            <Link
                                id='disease'
                                to=''
                                className='font-light hover:underline '>
                                Паспорт
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <FooterDoctor/>
        </div>
    )

}
export default PatientProfile