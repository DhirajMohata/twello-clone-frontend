'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import AddTask from './Addtask';
import Image from 'next/image';

const Sidebar = ({ name }: { name: string }) => {
  
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    window.location.href = '/signin';
  }

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    
    const handleAddTaskClick = () => {
        setIsAddTaskOpen(true);
      };
    
      const handleCloseAddTask = () => {
        setIsAddTaskOpen(false);
      };
  return (
    <div className="flex flex-col border-r bg-muted/40">
      <aside className="w-72 p-5 h-screen bg-white border-r">
        
        <div className="mb-4 flex gap-7">
          <div className="flex space-x-2 items-center">
          <Image src={'/profile.png'} width={75} height={75} alt='Logo' className='mr-2 size-10'/>
            <p className="text-xl font-semibold">{name}</p>
          </div>
          
        </div>
        <div className='flex gap-10 content-center justify-between '>
          
        <svg className='mt-2' width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M56 2V6" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M56 18V22" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M66 12H62" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50 12H46" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M48.9292 4.92896L51.7576 7.75738" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60.2427 16.2427L63.0711 19.0711" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M63.0711 4.92896L60.2427 7.75738" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M51.7571 16.2427L48.9287 19.0711" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M63.5 9C65.9854 9 68 6.98527 68 4.5C68 2.01472 65.9854 0 63.5 0C61.0146 0 59 2.01472 59 4.5C59 6.98527 61.0146 9 63.5 9Z" fill="#FFB800"/>
          <path d="M101 6L107 12L101 18" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M93 6L99 12L93 18" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <button  className=" w-fit rounded-lg bg-slate-200 text-center p-2 hover:bg-slate-300" onClick={logout}>
            <p>Logout</p>
          </button>
          </div>

        <nav className="space-y-2 mt-6">
          <Link
            href="#"
            className="flex gap-2 items-center p-2 text-lg ont-semibold bg-slate-200 text-black bg-primary rounded-md"
            prefetch={false}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7.99998L11.7317 3.13414C11.9006 3.04969 12.0994 3.04968 12.2683 3.13414L22 7.99998" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Home
          </Link>
          <Link
            href="#"
            className="flex gap-2 items-center p-2 text-lg text-gray-700 rounded-md"
            prefetch={false}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.6V18.4C1 18.7314 1.26863 19 1.6 19H18.4C18.7314 19 19 18.7314 19 18.4V1.6C19 1.26863 18.7314 1 18.4 1H1.6C1.26863 1 1 1.26863 1 1.6Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Boards
          </Link>
          <Link
            href="#"
            className="flex gap-2 items-center p-2 text-lg  text-gray-700 rounded-md"
            prefetch={false}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Settings
          </Link>
          <Link
            href="#"
            className="flex gap-2 items-center p-2 text-lg ont-semibold text-gray-700 rounded-md"
            prefetch={false}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 20V19C1 15.134 4.13401 12 8 12C11.866 12 15 15.134 15 19V20" stroke="#797979" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13 14C13 11.2386 15.2386 9 18 9C20.7614 9 23 11.2386 23 14V14.5" stroke="#797979" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Teams
          </Link>
          <Link
            href="#"
            className="flex gap-2 items-center p-2 text-lg ont-semibold text-gray-700 rounded-md"
            prefetch={false}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20H4V4" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 16.5L12 9L15 12L19.5 7.5" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Analytics
          </Link>
        </nav>
        <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] justify-center space-x-3 text-white p-3 rounded-lg flex items-center w-full mt-6" onClick={handleAddTaskClick}>
            <p>Create new task</p>
            <PlusIcon className="w-5 h-5 mr-2 bg-white rounded-full text-[#2F2188]" />
        </button>
      </aside>

      <div className='h-screen content-end bg-white border-r p-3' >
            <button className="flex items-center w-full bg-gray-200 p-2 rounded-lg">
                <DownloadIcon  className='mr-4'/>
                <div className='flex flex-col'>
                    <p>Download the app</p>
                    <p className='text-sm'>Get Full Experiencxe</p>
                </div>
            </button>
        </div>
            <AddTask title='' isOpen={isAddTaskOpen} onClose={handleCloseAddTask} />
    </div>
  )
}


  
  function DownloadIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
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
    )
  }
  
  


export default Sidebar