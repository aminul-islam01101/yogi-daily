import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserImage from '../assets/images/userImage.jpg';
import UserData from './UserData';

const UserInfo = () => {
    const userData = [
        {
            parameter: 'weight',
            value: 65,
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
        <div className="  space-y-10">
            <div className="flex items-center gap-5 ">
                <div className="avatar online ">
                    <div className="w-full rounded-full ">
                        <img src={UserImage} alt="img" className="" />
                    </div>
                </div>
                <div>
                    <h3>Mr. Camp David</h3>
                    <small>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        Bali, Indonesia
                    </small>
                </div>
            </div>
            <div className=" p-3 bg-amber-200 ">
                <div className="flex p-2 gap-2 rounded justify-center">
                    {userData.map((data) => (
                        <UserData data={data} key={Math.random()} />
                    ))}
                </div>
                <p className="border shadow-lg p-2 text-center">Bmi : 20.5 </p>
            </div>
        </div>
    );
};

export default UserInfo;
