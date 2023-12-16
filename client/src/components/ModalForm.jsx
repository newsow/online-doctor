// ModalForm.js

import React, { useState } from 'react';
import axios from 'axios';
const ModalForm = ({ isOpen, onClose, id }) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    // Обработка выбора файла
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async() => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('file',file)
    const res = await axios.post(`http://localhost:5000/user/add/document/${id}`,formData,{ headers: {'Content-Type': 'multipart/form-data'}})
    console.log(res)
    onClose()
    // Дополнительная логика, например, отправка данных на сервер
  };

  return (
    <div className='w-94 h-94'>
    <div className={`fixed ${isOpen ? 'block' : 'hidden'} inset-0 overflow-y-auto`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Добавить запись</h3>
                <div className="mt-2">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Название:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                        Файл:
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base leading-6 font-medium text-white hover:bg-red-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Закрыть
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base leading-6 font-medium text-white hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalForm;
