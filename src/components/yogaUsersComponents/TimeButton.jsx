import React from 'react';

const TimeButton = ({ time, breakTimeHandler }) => (
    <div className="avatar">
        <div className="rounded-full ring ring-offset-green-600 ring-offset-2 ">
            <button
                type="button"
                className="text-black bg-yellow-300 hover:bg-green-600 hover:text-white rounded-full p-2 transition ease-in-out delay-150"
                onClick={() => breakTimeHandler(time)}
            >
                {time}s
            </button>
        </div>
    </div>
);

export default TimeButton;
