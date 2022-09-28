import React, { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';

function WorkoutCards() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('fakeData.json');
            const displayData = await response.json();
            setWorkouts(displayData);
        };
        loadData();
    }, []);
    return (
        <div>
            {workouts.map((workout) => (
                <WorkoutCard workout={workout} key={workout.workoutId} />
            ))}
        </div>
    );
}

export default WorkoutCards;
