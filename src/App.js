import WorkoutCards from './components/WorkoutCards';

function App() {
    return (
        <div>
            <div className="container grid  grid-cols-[4fr_1fr]  gap-5">
                <div className="mt-20">
                    <header>No-Gym Workouts</header>
                    <div>
                        <WorkoutCards />
                    </div>
                </div>
                <div className="min-h-screen bg-orange-100 " />
            </div>
        </div>
    );
}

export default App;
