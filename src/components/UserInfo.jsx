import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserImage from '../assets/images/userImage.jpg';
import UserData from './UserData';

const UserInfo = () => {
    const userData = [
        {
            parameter: 'weight',
            value: 75,
            unit: 'kg',
        },
        {
            parameter: 'Height',
            value: 6.5,
            unit: 'ft',
        },
        {
            parameter: 'age',
            value: 25,
            unit: 'yrs',
        },
    ];

    return (
        <div className="p-5 space-y-10">
            <div className="flex items-center gap-5 justify-between">
                <div className="avatar online ">
                    <div className="w-full rounded-full ">
                        <img src={UserImage} alt="img" className="" />
                    </div>
                </div>
                <div>
                    <h3>Mr. Camp David</h3>
                    <small>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        Sydney, Australia
                    </small>
                </div>
            </div>
            <div className="flex bg-gray-200 p-3 space-x-4 rounded">
                {userData.map((data) => (
                    <UserData data={data} key={Math.random()} />
                ))}
            </div>
        </div>
    );
};

export default UserInfo;
