import React from 'react';
import Header from '../components/Header';

const TodoListPage: React.FC = () => {
  return (
    <div className="flex bg-blue-500 max-w-full h-screen">
      <div className="bg-white h-4/5 w-4/5 m-auto rounded-2xl">
        <Header />
      </div>
    </div>
  );
};

export default TodoListPage;
