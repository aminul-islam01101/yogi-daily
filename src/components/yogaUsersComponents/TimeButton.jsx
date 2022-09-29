import React from 'react';

const TimeButton = ({ time, breakTimeHandler }) => (
    <div className="avatar">
        <div className="rounded-full ring ring-offset-green-700 ring-offset-2">
            <button
                type="button"
                className="text-black bg-yellow-300 rounded-full p-2"
                onClick={() => breakTimeHandler(time)}
            >
                {time}s
            </button>
        </div>
    </div>
);

export default TimeButton;
