import React from 'react';
import NoTaskImg from '/TRemainder pic.jpg';
import { Link } from 'react-router-dom';

function NoTasks() {
  return (
    <section>
        <div className=' m-auto sm:w-300'>
            <h1 className=' text-center box-content mt-6 text-2xl text-purple-300 font-bold'>Be More Productive With Daily Task Reminder <br /> From <span className='text-center text-2xl text-green-300 font-bold mt-5'>TReminder </span></h1>
            <div className='text-center '>
                <figure className='grid place-content-center'>
                    <img src={NoTaskImg} className='w-[38rem] mt-0 text-center ' title='No Task Added. Add Task Now!!' alt="No Task Available Image" />
                    <figcaption className=' md:text-2xl font-bold text-teal-400' >OOPS!! No Task Added Today!</figcaption>
                </figure>
            </div>
        </div>
        <div className='flex justify-center items-center mt-4 '>
            <Link to={'/addTask'} className='text-xl sm:text-2xl font-semibold bg-green-500 px-3 rounded-sm text-white'>Add Task</Link>
            {/* <AddTask/> */}
        </div>
    </section>
  )
}

export default NoTasks
