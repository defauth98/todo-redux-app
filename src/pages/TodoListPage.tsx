import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TodoList from '../components/TodoList';

interface Todo {
  task: string;
  done: boolean;
  id: number;
}

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(task: string) {
    if (task.length < 2) {
      return;
    }

    const newTask: Todo = {
      task,
      done: false,
      id: Math.random() * 1000,
    };

    if (todos) setTodos([newTask, ...todos]);
  }

  return (
    <div className="flex bg-blue-500 max-w-full h-screen ">
      <div className="bg-white h-4/5 w-4/5 m-auto rounded-2xl overflow-hidden">
        <div>
          <Header addTodo={addTodo} />
        </div>
        <div className="flex h-full">
          <Sidebar />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
