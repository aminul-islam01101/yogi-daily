import React from 'react';

const DisplayTime = ({ timeType, time }) => (
    <div className="flex p-2 bg-gray-300 justify-between">
        <span>{timeType} time</span>
        <span>{time} seconds</span>
    </div>
);

export default DisplayTime;
