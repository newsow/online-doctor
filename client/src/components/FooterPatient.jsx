import React from "react";
import {Link, Outlet} from "react-router-dom";

const FooterPatient = () => {
    return(
        <div>
            <div className="bg-gray-100">
                <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-14">

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-teal-600 lg:justify-start">
                                <Link className="flex text-teal-600 items-center gap-6 text-xl"
                                      to="/">
                                    <span className="sr-only"></span>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="teal"
                                         viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    Онлайн доктор
                                </Link>
                            </div>

                            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                                С заботой о Вашем здоровьем
                            </p>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                        >
                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    to="/">
                                    Обратная связь
                                </Link>
                            </li>
                        </ul>
                    </div>



                    <p className="text-center text-sm text-gray-500 lg:text-right">
                        Все права защищены &copy; 2023. Командой Апельсин
                    </p>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
export default FooterPatient