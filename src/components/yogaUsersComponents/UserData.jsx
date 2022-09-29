import React from 'react';

const UserData = ({ data: { value, unit, parameter } }) => (
    <div className="border shadow-lg p-2 text-center">
        <p>
            {value}
            <small className="text-gray-400 ">{unit}</small>
        </p>
        <p>{parameter}</p>
    </div>
);

export default UserData;
