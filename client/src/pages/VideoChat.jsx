import React from 'react'
import camera from '../images/camera.svg'
import micro from '../images/micro.svg'
import sound from '../images/sound.svg'
const VideoChat = () => {
  return (
    <div>
        <div className="mx-auto max-w-screen-xl">
            <h1 className="text-3xl text-teal-600">Видеовстреча с врачом</h1>
            <div className="flex gap-6 mt-12">
                <div className="w-full h-full">
                    <div className="bg-teal-700 h-80 w-full flex items-center justify-center">
                        <h3 className="text-white text-center text-4xl">Врач</h3>
                    </div>
                    <div className="mt-3">
                        <button className="border-2 p-1 hover:border-teal-500"><img src={sound} className="w-6 h-6" alt=""/></button>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="bg-teal-700 h-80 w-full flex items-center justify-center">
                        <h3 className="text-white text-center text-4xl ali">Пациент (Вы)</h3>
                    </div >
                    <div className="mt-3">
                        <button className="border-2 p-1 hover:border-teal-500"><img src={sound} className="w-6 h-6" alt=""/></button>
                        <button className="border-2 p-1 hover:border-teal-500"> <img src={camera}  className="w-6 h-6" alt=""/></button>
                        <button className="border-2 p-1 hover:border-teal-500"> <img src={micro} className="w-6 h-6" alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoChat