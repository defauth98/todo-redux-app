import React from 'react';

import { SiTodoist } from 'react-icons/si';
import { BsPeopleCircle, BsSearch } from 'react-icons/bs';

const Header: React.FC = () => {
  return (
    <header className="border-b-2 h-16 p-4 px-8 shadow w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          <SiTodoist size={32} color="blue" />
          <span className="text-xl text-blue-700 px-4">Todo App</span>
        </div>

        <div className="flex items-center relative">
          <BsSearch size={20} color="blue" className="absolute left-2" />
          <input
            type="text"
            className="border h-8 rounded-md w-96 text-center"
            placeholder="Search task"
          />
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
