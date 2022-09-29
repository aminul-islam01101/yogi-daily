import React, { useState } from 'react';

const WorkoutCard = ({ workout, handleClick }) => {
    const [buttonStatus, setButtonStatus] = useState(false);

    const { workoutImage, workoutTitle, duration, description, age } = workout;

    return (
        <div data-aos="zoom-in">
            <div className="card h-full w-full bg-white shadow-xl">
                {/* card image */}
                <figure>
                    <img src={workoutImage} alt="Shoes" />
                </figure>
                {/* card body */}
                <div className="card-body p-7">
                    <h2 className="card-title p-2 text-xl">{workoutTitle}</h2>
                    <p className="leading-7 my-1 text-gray-400 lg:text-sm">
                        {description.slice(0, 100)}...
                    </p>
                    <p>
                        Duration: <span className="font-bold">{duration} seconds</span>
                    </p>
                    <p>
                        Suitable for:<span className="font-bold"> {age} yrs</span>
                    </p>
                    {/* card button */}
                    <div className="card-actions justify-end mt-2">
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
