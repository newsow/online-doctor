import React from "react";
import {Link, Outlet} from "react-router-dom";

const NavPatient = () => {
    return(
        <div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link
                            to="/"
                            className="flex text-teal-600 items-center gap-6 text-xl hover:text-teal-500 duration-200" >
                            <span className="sr-only"></span>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="teal"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            Онлайн доктор
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link to=''
                                          className="text-gray-500 transition hover:text-gray-500/75">
                                        Обратная связь
                                    </Link>
                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 duration-200"
                                    to='/'
                                >
                                    История болезни
                                </Link>

                                <Link
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 duration-200"
                                    to='/'
                                >
                                    Связь с врачом
                                </Link>

                                <Link
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 duration-200"
                                    to="/"
                                >
                                    Профиль
                                </Link>

                                <Link
                                    to=''
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-500 duration-200"
                                    id = "specialButton"
                                >
                                    Версия для слабовидящих
                                </Link>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default NavPatient