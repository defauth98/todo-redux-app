import React, { useState } from 'react';

import { SiTodoist } from 'react-icons/si';
import { BsPeopleCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const Header: React.FC = () => {
  const [tasks, setTasks] = useState<[string]>(['']);
  const [inputTask, setInputTask] = useState('');

  function addNewTask() {
    const taskArray = tasks;

    taskArray.push(inputTask);

    setTasks(taskArray);
  }

  return (
    <header className="border-b-2 h-16 p-4 px-8 shadow w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          <SiTodoist size={32} color="blue" />
          <span className="text-xl text-blue-700 px-4">Todo App</span>
        </div>

        <div className="flex items-center relative">
          <input
            type="text"
            className="border h-8 rounded-md w-96 text-center"
            placeholder="Make something"
            onChange={(e) => setInputTask(e.target.value)}
          />

          <button
            className="px-4 mx-4 h-8 bg-blue-700 border-blue-700 rounded"
            onClick={addNewTask}
          >
            {' '}
            <AiOutlinePlus size={20} color="blue" className="absolute left-2" />
            <span className="text-white">Add</span>
          </button>
        </div>

        <div className="flex items-center cursor-pointer">
          <BsPeopleCircle size={32} color="blue" />
          <h1 className="px-2 text-xl">Daniel Ribeiro</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
