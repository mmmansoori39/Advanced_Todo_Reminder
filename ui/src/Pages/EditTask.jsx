import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import { useParams, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

function EditTask() {
    const [data, setData] = useState({
        taskName: "",
        taskDesc: "",
        reminderTime: ""
    });
    const taskId = useParams();
    const navigate = useNavigate()
    

    useEffect(() => {
        const fetchData = async (taskId) => {
        try {
            const id = taskId.taskId;
            const response = await fetch(`http://localhost:4000/tasks/${id}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            });
            if (response.ok) {
            const resData = await response.json();
            setData(resData.task); // Assuming tasks are stored in a property named 'tasks'
            // console.log(resData.task);
            } else {
            console.error("Failed to fetch tasks:", response.status);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
        };
  
    fetchData(taskId);
  }, []);


  const updateTask = async (e) => {
    try {
        e.preventDefault()
        const id = taskId.taskId;
        console.log(id)
        const response = await fetch(`http://localhost:4000/tasks/edit/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log("ok")
        if(response.ok){
            const updatedTask = await response.json()
            console.log(updateTask)
            toast.success("Task Updated Successfully!!")
            navigate("/home")
        } else{
            const errorData = await response.json();
            toast.error(errorData.message);
        }
    } catch (error) {
        toast.error(error)
    }
  }

  return (
    <>
        <section className=''>
          <Nav/>
        </section>

        <div className='mt-28 sm:mt-24'>
          <h1 className=' mb-[-1.6rem] sm:mb-[-1rem] text-center box-content mt-4 text-xl sm:text-2xl text-gray-600 font-bold'>Here you can update your ToDo Details</h1>
          <div className="CreateNote w-[300px] sm:w-[500px]">
              <h1 className="text-center text-xl sm:text-2xl font-semibold underline text-gray-500">
                Edit Task
              </h1>
              <form action="" method='PUT' className="form ">
                <input
                  className="title w-full shadow p-2 mt-4 "
                  name="taskName"
                  onChange={(e) => setData({ ...data, taskName: e.target.value })}
                  type="text"
                  value={data.taskName}
                  placeholder="Title"
                  autoComplete="off"
                />
                <textarea
                  name="taskDesc"
                  onChange={(e) => setData({ ...data, taskDesc: e.target.value })}
                  rows="6"
                  value={data.taskDesc}
                  className=" title NoteText p-2 shadow"
                  placeholder="Write a note"
                />
                <input
                  className="title text-sm w-full shadow p-2 mt-4 "
                  name="reminderTime"
                  onChange={(e) => setData({ ...data, reminderTime: e.target.value })}
                  type="datetime-local"
                  value={data.reminderTime ? data.reminderTime.slice(0, 16) : ""}
                  placeholder="Date"
                  autoComplete="off"
                />
                {/* <input className='title text-sm w-full shadow p-2 mt-4 ' name='currentTime' onChange={getTaskData}  type="time" placeholder='time' autoComplete='off' /> */}
                <div className="text-center mt-4 relative h-5">
                  <button
                    onClick={updateTask}
                    className=" AddBtn font-semibold absolute end-2 bg-yellow-400 hover:bg-blue-600 hover:text-white text-slate-700 px-2 rounded-[50%] text-5xl"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
            <p className='inline mx-2 mt-5 text-blue-600 hover:text-red-600 text-left'>
              {/* <Link to={'/home'}>⬅️ Go Back</Link> */}
            </p>
        </div>
    </>
  )
}

export default EditTask
