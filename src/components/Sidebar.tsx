import React from 'react';

import { BsFillInboxFill, BsCalendar } from 'react-icons/bs';
import { IoIosToday, IoIosDoneAll } from 'react-icons/io';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/5 p-8 border-r-2">
      <ul>
        <li className="flex items-center my-2 cursor-pointer">
          <BsFillInboxFill size={30} color="blue" />
          <span className="px-4 text-lg text-blue-800 font-bold">Inbox</span>
        </li>
        <li className="flex items-center my-4 cursor-pointer">
          <IoIosToday size={30} color="gray" />
          <span className="px-4 text-lg text-gray-700">Today</span>
        </li>
        <li className="flex items-center my-4 cursor-pointer">
          <BsCalendar size={30} color="gray" />
          <span className="px-4 text-lg text-gray-700">Upcoming</span>
        </li>
        <li className="flex items-center my-4 cursor-pointer">
          <IoIosDoneAll size={30} color="gray" />
          <span className="px-4 text-lg text-gray-700">Completed</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
