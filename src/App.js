import { useState } from 'react';
import ExerciseInfo from './components/ExerciseInfo';
import WorkoutCards from './components/WorkoutCards';

const App = () => {
    const [exerciseTime, setExerciseTime] = useState(0);

    const handleClick = (duration, setButtonStatus) => {
        setButtonStatus(true);
        // eslint-disable-next-line radix
        setExerciseTime((prev) => prev + parseInt(duration));
    };

    return (
        <div>
            <div className="container grid  grid-cols-[4fr_1fr]  gap-5">
                <div className="mt-20">
                    <header>No-Gym Workouts</header>
                    <div>
                        <WorkoutCards handleClick={handleClick} />
                    </div>
                </div>
                <div className="min-h-screen bg-orange-100 ">
                    <ExerciseInfo exerciseTime={exerciseTime} />
                </div>
            </div>
        </div>
    );
};

export default App;
