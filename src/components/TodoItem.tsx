import React from 'react';

interface TodoItemProps {
  task: string;
  done: boolean;
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  done,
  id,
}: TodoItemProps) => {
  return (
    <li className="flex items-center my-6">
      <input
        type="checkbox"
        name="task"
        id="task"
        className="h-6 w-6 mr-2 rounded"
      />
      <span className="text-xl">{task}</span>
    </li>
  );
};

export default TodoItem;
