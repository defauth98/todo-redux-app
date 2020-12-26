import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const TodoListPage: React.FC = () => {
  return (
    <div className="flex bg-blue-500 max-w-full h-screen ">
      <div className="bg-white h-4/5 w-4/5 m-auto rounded-2xl overflow-hidden">
        <div>
          <Header />
        </div>
        <div className="flex h-full">
          <Sidebar />
          <main className="w-4/5">Tasks</main>
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
