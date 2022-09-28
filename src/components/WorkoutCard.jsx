import React from 'react';

function WorkoutCard({ workout: { workoutImage, workoutTitle, duration } }) {
    console.log();

    return (
        <div>
            <div className="card h-full w-full bg-white shadow-xl">
                <figure>
                    <img src={workoutImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{workoutTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>duration: {duration} seconds</p>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-primary">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkoutCard;
