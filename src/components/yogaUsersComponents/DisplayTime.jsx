import React from 'react';

const DisplayTime = ({ timeType, time }) => (
    <div className="flex p-2 bg-amber-200 justify-between">
        <span>{timeType} time</span>
        <span>{time} seconds</span>
    </div>
);

export default DisplayTime;
