import { useState } from 'react'

import { Task } from '../utils/data-tasks'

const TaskCard = ({
  task,
  updateTask,
  deleteTask
}: {
  task: Task
  updateTask: (task: Task) => void
  deleteTask: (task: Task) => void
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  return (
    <div
      draggable
      onDoubleClick={() => setIsEditingTitle(true)}
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(task.id))
      }}
      className="group relative w-24 h-24  border bg-gray-50 py-1 px-2 flex justify-center items-center"
    >
      <div
        onClick={() => deleteTask(task)}
        className="cursor pointer absolute right-1 -top-1 hidden cursor-pointer transition-opacity duration-300 group-hover:block"
      >
        ×
      </div>

        {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setIsEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTask({ ...task, title: e.target.value })}
          />
        ) : (
          <div className='text-center'>{task.title}</div>
        )}

    </div>
  )
}

export default TaskCard
