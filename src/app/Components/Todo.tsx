'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import AddTask from './Addtask';
import SkeletonLoader from './SkeletonLoader';
interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: string;
  date: string;
  status: string;
}

interface Taskboard {
  heading: string;
  tasks: Task[];
}

const priorityOrder: Record<string, number> = {
  Low: 1,
  Medium: 2,
  Urgent: 3,
};


const Todo = ({ heading, tasks }: Taskboard) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [loading, setLoading] = useState(true); 

  const handleAddTaskClick = () => {
    setIsAddTaskOpen(true);
  };
  
  useEffect(() => {
    const loadTasks = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(loadTasks);
  }, []);
    
  const handleCloseAddTask = (newTask?: Task) => {
    setIsAddTaskOpen(false);
    if (newTask) {
      const newTasks = [...tasks, newTask];
      newTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
      // Update tasks state
    }
  };

  return (
    <div className='w-[365px] rounded-sm'>
      <h2 className="text-2xl items-center justify-between content-between font-semibold mb-4 flex">
        {heading}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </h2>
        
      <Droppable droppableId={heading}>
        {(provided) => (
          <ul
            className='rounded-xl h-[500px] overflow-y-scroll hide-scrollbar'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {loading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : (
            
              <div>
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <li
                    className="bg-gray-100 p-4 border rounded shadow-md mb-5 task-title"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h3 className="text-gray-700 text-lg font-semibold">{task.title}</h3>
                    {task.description && (
                      <p className="text-gray-400 mt-2 text-balance task-description">{task.description}</p>
                    )}
                    <p className={`text-white w-fit p-1 rounded-lg text-sm px-2 mt-2 ${getPriorityColor(task.priority)}`}>

                      {task.priority}
                    </p>
                    {task.date && (
                    <p className="text-gray-500 inline-flex gap-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                      {task.date}
                      </p>
                    )}
                  </li>
                )}
              </Draggable>
            ))}
            </div>
          )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <button className="bg-gradient-to-b from-[#3A3A3A] to-[#202020] justify-center space-x-3 text-white p-3 rounded-lg flex items-center w-full mt-6" onClick={handleAddTaskClick}>
        <p>Add new task</p>
        <PlusIcon className="w-5 h-5 mr-2 text-white" />
      </button>
      <AddTask title={heading} isOpen={isAddTaskOpen} onClose={handleCloseAddTask} />
    </div>
  );
};

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'Low':
      return 'bg-[#0ECC5A]';
    case 'Medium':
      return 'bg-[#FFA235]';
    case 'Urgent':
      return 'bg-[#FF6B6B]';
    default:
      return '';
  }
}

function PlusIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default Todo;

