'use client';

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect , useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const [name, setName] = React.useState<string | null>('');
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/signin');
    }else {
      setLoading(false); // Set loading to false if no token is found
    }
  }, []);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setName(username);
  },[]);
  if (loading) {
    return null; // Render nothing or a loader while checking the token
  }
  return (
    <main className="flex h-screen bg-[#F7F7F7]">
    <Sidebar name={name ?? ''} />
    <div className="">
      <Header name={name ?? ''}/>
      <Main />
    </div>
  </main>
  );
}
