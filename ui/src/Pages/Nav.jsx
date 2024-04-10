import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [toggle, setToggle] = useState(0);

  function ToggleHandler(){
    setToggle(!toggle);
  }

  return (
    <div className='navbar shadow-md p-4 bg-white' >
         <div className='flex justify-between items-center'>
             <span className=" custom_text_shadow  text-green-500 font-bold text-4xl">TReminder</span>
              <span onClick={ToggleHandler} className='sm:hidden text-2xl shadow p-1 rounded bg-slate-100 text-zinc-600 hover:text-zinc-700'> <GiHamburgerMenu/> </span>


              <div className=' hidden sm:flex justify-center items-center gap-6' >
                <p>
                <Link to={'/home'} className="block  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </p>
                <Link to={'/addTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link>
                <p>
                <Link to={'/remainingTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Remaining Task</Link>
                </p>
                <p>
                <Link to={'/completedTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Completed Task</Link>
                </p>
                <p>
                    <Link to={'/login'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <ExitToAppIcon/> </Link>
                </p>
            </div>
        </div>

        {/* <div className=' sm:hidden text-center mt-3' > */}
        <div className={`  sm:hidden text-center mt-3 ${toggle ? '' : 'hidden'}`} >
                <p className='mt-4' >
                  <Link to={'/home'} className=" shadow inline smallScreenLinks  py-[3px] px-3 text-gray-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </p>
                <p className='mt-4'>
                  <Link to={'/addTask'} className="shadow inline py-[3px] px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link>
                </p>
                <p className='mt-4'>
                  <Link to={'/remainingTask'} className="shadow inline py-[3px] px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Remaining Task</Link>
                </p>
                <p className='mt-4'>
                  <Link to={'/completedTask'} className="shadow inline py-[3px] px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Completed Task</Link>
                </p>
                <p className='mt-4'>
                  <Link to={'/login'} className="shadow inline py-[3px] px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <ExitToAppIcon/> </Link>
                </p>
            </div>

    </div>
  )
}

// function Nav() {
//   return (
//     <div className='navbar shadow-md p-4' >
//         <div className='flex justify-between items-center'>
//             <span className=" custom_text_shadow  text-green-500 font-bold text-4xl">TReminder</span>

//             <div className='flex justify-center items-center gap-6' >
//                 <p>
//                 <Link to={'/home'} className="block  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
//                 </p>
//                 <Link to={'/addTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link>
//                 <p>
//                 <Link to={'/remainingTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Remaining Task(10)</Link>
//                 </p>
//                 <p>
//                 <Link to={'/completedTask'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Completed Task(11)</Link>
//                 </p>
//                 <p>
//                     <Link to={'/login'} className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <ExitToAppIcon/> </Link>
//                 </p>
//             </div>
//         </div>

//     </div>
//   )
// }



export default Nav
