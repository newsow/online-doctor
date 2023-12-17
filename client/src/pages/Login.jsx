import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const options = [
        {value:'doctor', label:'Я доктор'},
        {value:'user',label:'Я пациент'}
    ]
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [select,setSelect] = useState(null)
    const login = async(e) => {
        e.preventDefault()
        let res;
        if(select.value==='doctor'){
            res = await axios.post('http://localhost:5000/doctor/login',{
                email,
                password
            })
            console.log(res)
            if (res.status === 200){
                localStorage.setItem('doctorToken',res.data)
                return navigate('/doctor')
            }
        }
        else{
            res = await axios.post('http://localhost:5000/user/login',{
                email,
                password
            })
            console.log(res)
            if (res.status === 200){
                localStorage.setItem('token',res.data)
                return navigate('/patient')
            }
        }
    } 
    return(
        <div>
            <section className="bg-white mt-7">
                <div className="mx-auto max-w-screen-xl lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Pattern"
                            src="https://www.vokrug.tv/pic/product/a/1/9/c/a19c55d41809aa429b6901b90f553ad7.jpg"
                            className="absolute inset-0 h-70 w-full object-cover"
                        />
                    </aside>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <h1 className="my-6 text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Войти
                            </h1>

                            <form
                                onSubmit={(e)=>login(e)}
                                className="mt-10 grid grid-cols-2 gap-6">
                                <div className="col-span-1 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Почта
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        className="mt-1 p-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        placeholder="Введите почту..."
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>


                                <div className="col-span-1 sm:col-span-3">
                                    <label htmlFor="PasswordConfirmation"
                                           className="block text-sm font-medium text-gray-700">
                                        Пароль
                                    </label>

                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        placeholder="Введите пароль..."
                                        className="mt-1 p-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <Select
                                    defaultValue={select}
                                    onChange={setSelect}
                                    options={options}
                                    />
                                </div>
                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button type="submit" className="inline-block shrink-0 rounded-md border border-blue-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                                        Войти
                                    </button>
                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Еще нет аккаунта?
                                        <Link
                                            to="/registration"
                                            className="text-gray-700 underline">
                                            Зарегистрируйтесь
                                        </Link>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    )

}
export default Login