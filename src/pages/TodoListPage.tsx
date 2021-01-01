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
  const [id, setID] = useState(0);

  function addTodo(task: string) {
    if (task.length < 2) {
      return;
    }

    const newTask: Todo = {
      task,
      done: false,
      id: id,
    };

    if (todos) setTodos([newTask, ...todos]);

    setID(id + 1);
  }

  function handleDeleteTask(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="flex bg-blue-500 max-w-full h-screen ">
      <div className="bg-white h-4/5 w-4/5 m-auto rounded-2xl overflow-hidden">
        <div>
          <Header addTodo={addTodo} />
        </div>
        <div className="flex h-full">
          <Sidebar />
          <TodoList todos={todos} handleDeleteTask={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
