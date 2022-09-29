import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import DisplayTime from './DisplayTime';
import TimeButton from './TimeButton';
import UserInfo from './UserInfo';

const ExerciseInfo = ({ exerciseTime }) => {
    const [breakTime, setBreakTime] = useState(0);

    const breakTimes = [10, 20, 30, 40, 50];
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

    return (
        <div className="space-y-10">
            <UserInfo />
            <div className="flex justify-between">
                {breakTimes.map((time) => (
                    <TimeButton
                        time={time}
                        key={Math.random()}
                        breakTimeHandler={breakTimeHandler}
                    />
                ))}
            </div>
            <DisplayTime timeType="exercise" time={exerciseTime} />
            <DisplayTime timeType="break" time={breakTime} />
            <button
                type="button"
                className="button"
                onClick={() => Swal.fire('Good job!', 'You clicked the button!', 'success')}
            >
                Exercise Completed
            </button>
        </div>
    );
};

export default ExerciseInfo;
