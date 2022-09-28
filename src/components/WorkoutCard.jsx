import React from 'react';

function WorkoutCard() {
    console.log('clicked');

    return (
        <div>
            <div className="card h-full w-full bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-primary">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkoutCard;
