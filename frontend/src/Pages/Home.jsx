import React from 'react';
import Nav from './Nav';
import NoTasks from '../Components/NoTasks';
import AllTasks from './AllTasks';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
// ------------------------------fetch all task-------------------------------
  useEffect(() => {
      const fetchData = async () => {
        
      try {
          const response = await fetch("http://localhost:4000/tasks", {
          method: "GET",
          credentials: "include",
          headers: {
              "Content-Type": "application/json",
          },
          });
          if (response.ok) {
          const resData = await response.json();
          setData(resData.tasks); // Assuming tasks are stored in a property named 'tasks'
          console.log(resData.tasks);
          } else {
          console.error("Failed to fetch tasks:", response.status);
          }
      } catch (error) {
          console.error("Error fetching tasks:", error);
      }
      };

  fetchData();
}, []);
  
// ----------------------------------delete task functionality---------------------
const updateTasksAfterDeletion = (deletedTaskId) => {
  const updatedTasks = data.filter(task => task._id !== deletedTaskId);
  setData(updatedTasks);
}
const deleteTask = async (id)=>{

  try {
    const TaskRoute = await fetch("http://localhost:4000/tasks/delete", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id}),
    });
    const TaskData = await TaskRoute.json();
    console.log("Task data:", TaskData);

    if (TaskRoute.ok) {
      toast.success("Task deleted successfully");
      updateTasksAfterDeletion(id);
      navigate("/home");
    } else {
      toast.error(TaskData.message);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An unexpected error occurred");
  }
}    

// ------------------------update status-----------------
  const UpdateStatus = async(id)=>{
    try {
      const TaskRoute = await fetch("http://localhost:4000/tasks/status", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id}),
      });
      const TaskData = await TaskRoute.json();
      console.log("Task data:", TaskData);
  
      if (TaskRoute.ok) {
        toast.success("Task Completed!!");
        updateTasksAfterDeletion(id);
        navigate("/home");
      } else {
        toast.error(TaskData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    }
  }
  
  return (
    <>
        <section className=''>
          <Nav/>
        </section>
        <div className='mt-24 sm:mt-24'>
          { data.length !=0 ? <AllTasks data={data} delete={deleteTask} update={UpdateStatus} /> : <NoTasks/> }

        </div>

    </>
  )
}

export default Home;
