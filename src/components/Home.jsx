/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Logo from '../assets/images/logo.png';
import Accordion from './Accordion';
import ExerciseInfo from './ExerciseInfo';
import WorkoutCards from './WorkoutCards';

const Home = () => {
    const [exerciseTime, setExerciseTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const status = (fn) => fn;

    useEffect(() => {
        const storedBreakTime = localStorage.getItem('break-time');

        if (storedBreakTime) {
            setBreakTime(storedBreakTime);
        }
    }, []);

    const breakTimeHandler = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time);
    };
    const handleExerciseComplete = () => {
        setBreakTime(0);
        setExerciseTime(0);
        localStorage.setItem('break-time', 0);
        exerciseTime
            ? Swal.fire('Good job!', 'You clicked the button!', 'success')
            : Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please select exercise Time!',
              });
    };

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
                    <header className="flex items-center mb-20 justify-center md:justify-start ">
                        <figure>
                            <img className="w-20" src={Logo} alt="" />
                        </figure>
                        <h1 className="text-3xl font-semibold">
                            Yogi-<span className="text-green-600">Daily</span>
                        </h1>
                    </header>
                    <div>
                        <WorkoutCards handleClick={handleClick} />
                    </div>
                </div>
                <div className="min-h-screen bg-orange-100 ">
                    <ExerciseInfo
                        exerciseTime={exerciseTime}
                        breakTimeHandler={breakTimeHandler}
                        breakTime={breakTime}
                        handleExerciseComplete={handleExerciseComplete}
                    />
                </div>
            </div>
            <div className="mt-28">
                <Accordion />
                <Accordion />
                <Accordion />
            </div>
        </div>
    );
};

export default Home;
