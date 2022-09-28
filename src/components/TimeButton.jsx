import React from 'react';

const TimeButton = ({ time, breakTimeHandler }) => (
    <button
        type="button"
        className="text-white bg-slate-500 rounded-full p-2"
        onClick={() => breakTimeHandler(time)}
    >
        {time}s
    </button>
);

export default TimeButton;
