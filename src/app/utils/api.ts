import { toast } from 'react-hot-toast';

// General API request handler
export const apiRequest = async (endpoint: string, method = 'GET') => {
  try {
    const res = await fetch(`https://trello-clone-backend-seven.vercel.app/api/v1${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message || 'An unexpected error occurred';
      
      // Show error toast
      toast.error(`Error ${res.status}: ${errorMessage}`, {
        className: 'bg-red-600 text-white font-bold px-4 py-3 rounded-lg',
        icon: '❌',
        duration: 5000,
      });

      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// POST request handler
export const postRequest = async (endpoint: string, email: string, password: string) => {
  try {
    const res = await fetch(`https://trello-clone-backend-seven.vercel.app/api/v1${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message || 'An unexpected error occurred';
      
        toast.error(errorMessage , {
          className: 'bg-red-600 text-xl text-white font-bold px-4 py-3 rounded-lg',
          icon: '❌',
          duration: 5000,
        });


      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

// POST request with user details
export const postUpRequest = async (endpoint: string, username: string, email: string, password: string) => {
  console.log(username, email, password, endpoint);
  try {
    const res = await fetch(`https://trello-clone-backend-seven.vercel.app/api/v1${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username, email, password })
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message || 'An unexpected error occurred';
      
      toast.error(errorMessage , {
        className: 'bg-red-600 text-xl text-white font-bold px-4 py-3 rounded-lg',
        icon: '❌',
        duration: 5000,
      });

      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

// Add Task request handler
export const addTaskRequest = async (endpoint: string, title: string, description: string, priority: string, date: string, status: string) => {
  try {
    const res = await fetch(`https://trello-clone-backend-seven.vercel.app/api/v1${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ title, description, priority, date, status })
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      const errorMessage = errorResponse.message || 'An unexpected error occurred';
      
      toast.error(errorMessage , {
        className: 'bg-red-600 text-xl text-white font-bold px-4 py-3 rounded-lg',
        icon: '❌',
        duration: 5000,
      });

      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};
