import React from 'react';

import TodoItem from '../components/TodoItem';

interface Todo {
  task: string;
  done: boolean;
  id: number;
}

interface TodoListProps {
  todos: Array<Todo>;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <main className="w-4/5 m-8">
      <h1 className="text-3xl text-blue-700 mb-4">Inbox</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem task={todo.task} done={todo.done} id={todo.id} />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
