import React, { useEffect, useState } from 'react';
import ExerciseTime from './ExerciseTime';
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
        <div>
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
            <p>{breakTime}</p>
            <ExerciseTime exerciseTime={exerciseTime} />
        </div>
    );
};

export default ExerciseInfo;
