import React from 'react';

const Accordion = ({ data: { title, description } }) => (
    <div>
        <div
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default Accordion;
