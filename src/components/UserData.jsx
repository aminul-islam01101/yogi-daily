import React from 'react';

const UserData = ({ data: { value, unit, parameter } }) => (
    <div>
        <p>
            {value}
            <small>{unit}</small>
        </p>
        <p>{parameter}</p>
    </div>
);

export default UserData;
