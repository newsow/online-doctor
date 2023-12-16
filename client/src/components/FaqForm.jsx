import React from "react";
import {Link} from "react-router-dom";

const FaqForm = () => {
    return(
        <div>
            <div className="mx-auto">
                    <div>
                        <h1 className="text-3xl mt-12 font-bold text-center text-teal-800">Оставьте данные и мы с Вами
                            свяжемся</h1>


                        <div className=" px-4 py-16 sm:px-6 lg:px-8">
                            <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">

                                <div className=" rounded-lg bg-teal-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                                    <form action="" className="space-y-4">
                                        <div>
                                            <label className="sr-only" htmlFor="name">Имя</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Введите имя.."
                                                type="text"
                                                id="name"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="sr-only" htmlFor="email">E-mail</label>
                                                <input
                                                    className="w-full rounded-lg border-teal-300 border-3 p-3 text-sm"
                                                    placeholder="Введите E-mail.."
                                                    type="email"
                                                    id="email"
                                                />
                                            </div>

                                            <div>
                                                <label className="sr-only" htmlFor="phone">Phone</label>
                                                <input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Введите номер телефона.."
                                                    type="tel"
                                                    id="phone"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="sr-only" htmlFor="message">Комментарий</label>

                                            <textarea
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Введите комментарий..."
                                                rows="8"
                                                id="message"
                                            ></textarea>
                                        </div>

                                        <div className="mt-4">
                                            <Link
                                                to=''
                                                type="submit"
                                                className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto"
                                            >
                                                Отправить запрос
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )

}
export default FaqForm