import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

const TodoListPage: React.FC = () => {
  return (
    <div className="flex bg-blue-500 max-w-full h-screen ">
      <div className="bg-white h-4/5 w-4/5 m-auto rounded-2xl overflow-hidden">
        <div>
          <Header />
        </div>
        <div className="flex h-full">
          <Sidebar />
          <TodoList
            tasks={[
              'Write a file with nothing',
              'Make something who does not make sense',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
