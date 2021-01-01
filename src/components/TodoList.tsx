import React from 'react';

import TodoItem from '../components/TodoItem';

interface Todo {
  task: string;
  done: boolean;
  id: number;
}

interface TodoListProps {
  handleDeleteTask(id: number): void;
  todos: Array<Todo>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDeleteTask }) => {
  return (
    <main className="w-4/5 m-8">
      <h1 className="text-3xl text-blue-700 mb-4">Inbox</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            done={todo.done}
            id={todo.id}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
