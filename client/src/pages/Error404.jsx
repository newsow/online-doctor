import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Error404 = () => {
  return(
      <div>
          <Navbar/>
          <div className="grid h-screen place-content-center bg-white px-4">
              <div className="text-center">
                  <h1 className="text-9xl font-black text-teal-300">404</h1>

                  <p className="text-2xl font-bold tracking-tight text-teal-600 sm:text-4xl">Что-то пошло не так</p>

                  <p className="mt-4 text-teal-600">Страница не найдена</p>

                  <Link
                      to="/"
                      className="mt-6 inline-block rounded bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                  >
                      Вернуться на главную
                  </Link>
              </div>
          </div>
          <Footer/>
      </div>
  )
}
export default Error404