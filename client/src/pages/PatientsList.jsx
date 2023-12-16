import React from "react";
import NavDoctor from "../components/NavDoctor";
import FooterDoctor from "../components/FooterDoctor";
import {Link} from "react-router-dom";

const PatientsList = () => {
  return(
      <div>
          <NavDoctor/>
          <div>
              <div className="max-w-2xl mx-auto mt-14">
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
                                 placeholder="Введите имя и фамилию пациента" required/>
                              <Link
                                  to=''
                                  type="submit"
                                  className="text-white absolute right-2.5 bottom-2.5 bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2">
                                  Найти
                              </Link>
                      </div>
                  </form>
              </div>
              <div className='flex justify-around mt-8 '>
                  <div className='flex flex-row flex-wrap border border-teal-500 rounded-xl justify-center w-4/5 mb-14'>
                      <Link
                            to=''
                            className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100'>
                          <img
                              alt='logo'
                              className='rounded-full w-28 h-28 my-auto ml-2 mb-3 mt-3'
                              src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
                          <div className='block my-auto mx-2'>
                              <p
                                  id='PatientName'
                                  className='font-semibold'>
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
                      <Link
                          to=''
                          className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100'>
                          <img
                              alt='logo'
                              className='rounded-full w-28 h-28 my-auto ml-2'
                              src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
                          <div className='block my-auto mx-2'>
                              <p
                                  id='PatientName'
                                  className='font-semibold'>
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
                      <Link
                          to=''
                          className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100'>
                          <img
                              alt='logo'
                              className='rounded-full w-28 h-28 my-auto ml-2 mb-3 mt-3'
                              src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
                          <div className='block my-auto mx-2'>
                              <p
                                  id='PatientName'
                                  className='font-semibold'>
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
                      <Link
                          to=''
                          className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100'>
                          <img
                              alt='logo'
                              className='rounded-full w-28 h-28 my-auto ml-2 mb-3 mt-3'
                              src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
                          <div className='block my-auto mx-2'>
                              <p
                                  id='PatientName'
                                  className='font-semibold'>
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
                      <Link
                          to=''
                          className='flex border border-teal-500 mx-4 my-4 hover:bg-gray-100'>
                          <img
                              alt='logo'
                              className='rounded-full w-28 h-28 my-auto ml-2 mb-3 mt-3'
                              src='https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-6.jpg' />
                          <div className='block my-auto mx-2'>
                              <p
                                  id='PatientName'
                                  className='font-semibold'>
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
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
                                  Лелик Леликович
                              </p>
                              <p
                                  id='PatientEmail'
                                  className='font-light'>
                                  kadfhk@gmail.com
                              </p>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
          <FooterDoctor/>
          </div>
    )
}
export default PatientsList