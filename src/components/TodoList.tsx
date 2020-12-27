import React from 'react';

import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: Array<string>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  console.log(tasks);

  function renderItems() {
    if (tasks[0].length > 2) {
      console.log('maior que dois');

      return tasks.map((task) => <TodoItem task={task} key={task} />);
    }

    console.log('menor que dois');

    return;
  }

  return (
    <main className="w-4/5 m-8">
      <h1 className="text-3xl text-blue-700 mb-4">Inbox</h1>
      <ul>{renderItems}</ul>
    </main>
  );
};

export default TodoList;
