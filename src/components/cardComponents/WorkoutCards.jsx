import React, { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutCards = ({ handleClick }) => {
    const [workouts, setWorkouts] = useState([]);
    // data retrieving from fakeDb
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('fakeData.json');
            const displayData = await response.json();
            setWorkouts(displayData);
        };
        loadData();
    }, []);
    return (
        // workout card ui
        <div className="className=mt-20 grid  gap-8 lg:gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {workouts.map((workout) => (
                <WorkoutCard workout={workout} key={workout.workoutId} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default WorkoutCards;
