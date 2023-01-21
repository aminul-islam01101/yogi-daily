/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import blogData from '../assets/images/blogData';
import Logo from '../assets/images/logo.png';
import Accordion from './Accordion';
import WorkoutCards from './cardComponents/WorkoutCards';
import ExerciseInfo from './yogaUsersComponents/ExerciseInfo';

const Home = () => {
    const [exerciseTime, setExerciseTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const status = (fn) => fn;

    //  data retrieving from local storage
    useEffect(() => {
        const storedBreakTime = localStorage.getItem('break-time');

        if (storedBreakTime) {
            setBreakTime(storedBreakTime);
        }
    }, []);
    // break time data setting to local storage
    // new commits
    const breakTimeHandler = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time);
    };

    // ExerciseComplete btn functionality
    const handleExerciseComplete = () => {
        setBreakTime(0);
        setExerciseTime(0);
        localStorage.setItem('break-time', 0);
        exerciseTime
            ? Swal.fire('Good job!', 'You Finished todays session!', 'success')
            : Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please select exercise Time!',
              });
    };
    // card btn functionality
    const handleClick = (duration, setButtonStatus) => {
        setButtonStatus(true);
        status(setButtonStatus);
        // eslint-disable-next-line radix
        setExerciseTime((prev) => prev + parseInt(duration));
    };

    return (
        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1fr]  gap-5">
                <div className="mt-20 container">
                    {/* header: brand name and logo */}
                    <header className="flex items-center mb-20 justify-center md:justify-start ">
                        <figure>
                            <img className="w-20" src={Logo} alt="" />
                        </figure>
                        <h1 className="text-3xl font-semibold">
                            Yogi-<span className="text-green-600">Daily</span>
                        </h1>
                    </header>
                    {/* card components */}
                    <h3 className="text-base mb-5 font-bold">
                        Are you set for todays session ?
                        <span className="text-green-600 font-bold ">Lets start !</span>
                    </h3>
                    <div>
                        <WorkoutCards handleClick={handleClick} />
                    </div>
                </div>

                {/* yoga users Exercise details section */}
                <div className="min-h-screen bg-lime-100 p-3 ">
                    <ExerciseInfo
                        exerciseTime={exerciseTime}
                        breakTimeHandler={breakTimeHandler}
                        breakTime={breakTime}
                        handleExerciseComplete={handleExerciseComplete}
                    />
                </div>
            </div>
            {/* Blog accordion */}
            <div className="mt-28 container">
                <h2 className="text-center text-3xl mb-10">Frequently asked blog</h2>
                <div className="w-9/12 mx-auto">
                    {blogData.map((data) => (
                        <Accordion key={Math.random()} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
