import React from "react";
import NavPatient from "../components/NavPatient";
import FooterPatient from "../components/FooterPatient";
import {Link} from "react-router-dom";

const ChatMenu = () => {
  return(
      <div>
          <NavPatient/>
          <div className='flex flex-row justify-center my-5 gap-5 border-b border-teal-500 '>
              <Link className='hover:border hover:border-teal-400 hover:rounded-t-md p-2 hover:border-b-white'>
                  <span className='text-gray-500'>
                      Написать сообщение
                  </span>
              </Link>
              <Link className='border border-b-white border-teal-500 border rounded-t-md p-2'>
                  <span className=''>
                      Полученные
                  </span>
              </Link>
              <Link className='hover:border hover:border-teal-400 hover:rounded-t-md p-2 hover:border-b-white'>
                  <span className='text-gray-500'>
                      Отправленные
                  </span>
              </Link>
          </div>
          <div className='my-8 border border-teal-500 rounded-md mx-auto max-w-6xl'>
              <div className='max-w-5xl mx-auto my-5 bg-gray-100'>
                  <div
                      className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden border border-teal-400 rounded-md">
                      <div className="grid place-items-center h-full w-12 text-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                          </svg>
                      </div>

                      <input
                          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                          type="text"
                          id="search"
                          placeholder="Поиск.."/>
                  </div>
              </div>
              <Link
                  to=''
                  className='py-3 border-teal-500 border-t block mx-auto max-w-6xl hover:bg-gray-100 duration-200'>
                  <p className='ml-5 mt-2 font-light'>
                      Лелик.Л
                  </p>
                  <p className='ml-5 mb-2 font-semibold'>
                      Тема сообщения..
                  </p>
              </Link>
              <Link
                  to=''
                  className='py-3 border-teal-500 border-t block mx-auto max-w-6xl hover:bg-gray-100 duration-200'>
                  <p className='ml-5 mt-2 font-light'>
                      Лелик.Л
                  </p>
                  <p className='ml-5 mb-2 font-semibold'>
                      Тема сообщения..
                  </p>
              </Link>
              <Link
                  to=''
                  className='py-3 border-teal-500 border-t block mx-auto max-w-6xl hover:bg-gray-100 duration-200'>
                  <p className='ml-5 mt-2 font-light'>
                      Лелик.Л
                  </p>
                  <p className='ml-5 mb-2 font-semibold'>
                      Тема сообщения..
                  </p>
              </Link>
              <Link
                  to=''
                  className='py-3 border-teal-500 border-t block mx-auto max-w-6xl hover:bg-gray-100 duration-200'>
                  <p className='ml-5 mt-2 font-light'>
                      Лелик.Л
                  </p>
                  <p className='ml-5 mb-2 font-semibold'>
                      Тема сообщения..
                  </p>
              </Link>
              <Link
                  to=''
                  className='py-3 border-teal-500 border-t block mx-auto max-w-6xl hover:bg-gray-100 duration-200'>
                  <p className='ml-5 mt-2 font-light'>
                      Лелик.Л
                  </p>
                  <p className='ml-5 mb-2 font-semibold'>
                      Тема сообщения..
                  </p>
              </Link>
          </div>
          <FooterPatient/>
      </div>
  )
}
export default ChatMenu