import React from 'react';

const TimeButton = ({ time, breakTimeHandler }) => (
    <button
        type="button"
        className="text-rose-500 bg-slate-500 mr-1"
        onClick={() => breakTimeHandler(time)}
    >
        {time}s
    </button>
);

export default TimeButton;
