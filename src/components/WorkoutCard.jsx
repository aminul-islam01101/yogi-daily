import React, { useState } from 'react';

const WorkoutCard = ({ workout, handleClick }) => {
    const [buttonStatus, setButtonStatus] = useState(false);

    const { workoutImage, workoutTitle, duration } = workout;
    // const btnClass = ' button w-full ';

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
                        <button
                            type="button"
                            className={buttonStatus ? 'button active' : 'button'}
                            onClick={() => {
                                handleClick(duration, setButtonStatus);
                            }}
                        >
                            {buttonStatus ? 'workout Added' : 'Add to list'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;
