import React, { useEffect, useState } from 'react';

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
  const [doneTask, setDoneTask] = useState(false);

  useEffect(() => {
    setDoneTask(done);
  }, [done]);

  function toggleDoneTask() {
    if (doneTask === false) {
      setDoneTask(true);
      return;
    }

    setDoneTask(false);
  }

  return (
    <li className="flex items-center my-6">
      <input
        type="checkbox"
        name="task"
        id="task"
        onClick={toggleDoneTask}
        className="h-6 w-6 mr-2 rounded"
      />
      <span className={`text-xl ${doneTask ? 'line-through' : ''}`}>
        {task}
      </span>
    </li>
  );
};

export default TodoItem;
