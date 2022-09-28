import React from 'react';
import ExerciseTime from './ExerciseTime';
import TimeButton from './TimeButton';

const ExerciseInfo = ({ exerciseTime }) => {
    const breakTimes = [10, 20, 30, 40, 50];

    return (
        <div>
            <div>
                {breakTimes.map((time) => (
                    <TimeButton time={time} />
                ))}
            </div>
            <ExerciseTime exerciseTime={exerciseTime} />
        </div>
    );
};

export default ExerciseInfo;
