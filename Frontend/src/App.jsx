import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from './component/Home.jsx';
// import Register from './component/Register.jsx';
// import Login from './component/Login.jsx';
// import CompletedTask from './component/CompletedTask.jsx';
// import RemainingTask from './component/RemainingTask.jsx';
// import NotFound from './component/NotFound.jsx';
// import ForgetPassword from './component/ForgetPassword.jsx';
// import AllTasks from './component/AllTasks.jsx';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import RemainingTask from "./Pages/RemainingTask";
import CompleteTask from "./Pages/CompleteTask";
import EditTask from "./Pages/EditTask";
import NotFound from "./Pages/NotFound";
import addNotification from "react-push-notification";
import logo from "/TRemainder pic.jpg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let aa = 100;
    const fetchAndCheckTasks = async () => {
      try {
        const response = await fetch("http://localhost:4000/tasks/remaining", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // Include any authorization headers if needed
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const tasks = await response.json();

        tasks.forEach((task) => {
          const reminderTime = new Date(task.reminderTime);
          const currentTime = new Date();
          console.log("cuurentTime ::",currentTime);
          console.log("reminderTime ::",reminderTime)
          // Check if current time matches the reminder time
          if (
            currentTime.getFullYear() === reminderTime.getFullYear() &&
            currentTime.getMonth() === reminderTime.getMonth() &&
            currentTime.getDate() === reminderTime.getDate() &&
            currentTime.getHours() === reminderTime.getHours() &&
            currentTime.getMinutes() === reminderTime.getMinutes()
          ) {
            console.log(reminderTime);
            addNotification({
              title: "Task Reminder",
              message: task.taskName,
              duration: 4000,
              icon: logo,
              native: true,
            });   
          }
        });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchAndCheckTasks();

    // Check tasks every minute
    const intervalId = setInterval(fetchAndCheckTasks, 60000); // 60000 milliseconds = 1 minute

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/remainingTask" element={<RemainingTask />} />
        <Route path="/completedTask" element={<CompleteTask />} />
        <Route path="/tasks/edit/:taskId" element={<EditTask />} />
        <Route path="/*" element={<NotFound />} />

        {/* <Route path='/completedTask' element = { <CompletedTask/> } />
        <Route path='/remainingTask' element = { <RemainingTask/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/forgetPassword' element={ <ForgetPassword/> } /> */}
        {/* <Route path='/allTasks' element = { <AllTasks/> } /> */}
        {/* <Route path='/*' element = { <NotFound/> } /> */}
      </Routes>
    </>
  );
}

export default App;
