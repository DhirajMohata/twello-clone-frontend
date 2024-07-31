'use client';
import React, { useEffect, useState } from 'react';
import { addTaskRequest } from '../utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface AddTaskProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ title, isOpen, onClose }) => {
  const router = useRouter();
  const [status, setStatus] = React.useState(title);
  const [main, setMain] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!title) setStatus('To Do');
  }, []);

  const add = async () => {
    try {
      const response = await addTaskRequest(
        '/task/addTask',
        main,
        description,
        priority,
        date,
        status
      );

      // Show success toast
      toast.success('Successfuly Added', {
        className: 'bg-green-600 text-xl text-white font-bold px-4 py-3 rounded-lg',
        icon: '✅',
        duration: 5000,
      });

      window.location.reload();
      onClose();
    } catch (error) {
      console.error('Adding task failed:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    add();
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-100 bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="p-9 pr-11 fixed top-0 right-0 h-full w-full max-w-3xl bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out">
        <div className="flex justify-end items-center mb-5  border-gray-400">
          <button
            className=" text-gray-600 hover:text-red-600 transition-colors duration-200"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className='pl-5'>
          <input type="text" placeholder="Title" className="w-full p-2 mb-3 font-semibold text-4xl border-hidden focus:outline-none focus:ring-0" required onChange={(e)=>setMain(e.target.value)}/>
          <table className="table-auto w-full ">
            <tbody className=''>
              <tr>
                <td className="py-2 pr-4"></td>
                <td></td>
              </tr>
              <tr>
              
                <td className="py-2 pr-4 inline-flex gap-2 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V22" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 12H18" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 12H2" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.9292 4.92896L7.75762 7.75738" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.2427 16.2427L19.0711 19.0711" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.0711 4.92896L16.2427 7.75738" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.75713 16.2427L4.92871 19.0711" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <label className="block text-gray-700 ">Status</label>
                </td>
                <td className='mb-5'>


                  <select className="w-full p-2 border-none rounded focus:outline-none focus:ring-0"
                  value={status}
                  onChange={(e) => setStatus(e.target.value.toString())}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Finished">Finished</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 inline-flex gap-2 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_42_503)">
                <path d="M11.5757 1.42427C11.81 1.18996 12.1899 1.18996 12.4243 1.42427L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42427 12.4243C1.18996 12.19 1.18996 11.8101 1.42427 11.5757L11.5757 1.42427Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V12" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16.0099L12.01 15.9988" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_42_503">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                  <label className="block text-gray-700">Description</label>
                </td>
                <td className='mb-5'><input type="text" className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" placeholder="Add Description" onChange={(e)=>setDescription(e.target.value)}/></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 inline-flex gap-2 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 2V6" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  <label className="block text-gray-700">Deadline</label>
                </td>
                <td className='mb-5'><input type="date" className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" placeholder="Deadline" onChange={(e) => setDate(e.target.value)}/></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 inline-flex gap-2 mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3631 5.65147L15.843 4.17148C16.6241 3.39043 17.8904 3.39043 18.6715 4.17148L20.0857 5.5857C20.8667 6.36674 20.8667 7.63307 20.0857 8.41412L18.6057 9.89411M14.3631 5.65147L4.74742 15.2671C4.41535 15.5992 4.21072 16.0375 4.1694 16.5053L3.92731 19.2458C3.87254 19.8658 4.39141 20.3847 5.01143 20.3299L7.75184 20.0878C8.21965 20.0465 8.658 19.8418 8.99007 19.5098L18.6057 9.89411M14.3631 5.65147L18.6057 9.89411" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  <label className="block text-gray-700">Priority</label>
                </td>
                <td className='mb-5'>
                  <select className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" onChange={(e)=>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex mt-4 ">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 text-lg rounded">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
