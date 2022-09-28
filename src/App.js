import WorkoutCards from './components/WorkoutCards';

function App() {
    return (
        <div>
            <div className="container grid  grid-cols-[4fr_1fr]  gap-5">
                <div className="mt-20">
                    <header>No-Gym Workouts</header>
                    <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-3">
                        <WorkoutCards />
                    </div>
                </div>
                <div className="min-h-screen bg-orange-300 ">i am side bar</div>
            </div>
        </div>
    );
}

export default App;
