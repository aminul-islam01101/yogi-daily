import React from 'react';

import DisplayTime from './DisplayTime';
import TimeButton from './TimeButton';
import UserInfo from './UserInfo';

const ExerciseInfo = ({ exerciseTime, breakTimeHandler, breakTime, handleExerciseComplete }) => {
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className="space-y-10 sm:sticky sm:top-0 p-3">
            <UserInfo />
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">Add a break</h3>
                <div className="flex justify-between">
                    {breakTimes.map((time) => (
                        <TimeButton
                            time={time}
                            key={Math.random()}
                            breakTimeHandler={breakTimeHandler}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">Exercise Details</h3>
                <DisplayTime timeType="exercise" time={exerciseTime} />
                <DisplayTime timeType="break" time={breakTime} />
            </div>
            <button type="button" className="button" onClick={handleExerciseComplete}>
                Exercise Completed
            </button>
        </div>
    );
};

export default ExerciseInfo;
