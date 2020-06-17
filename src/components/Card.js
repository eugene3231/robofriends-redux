import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props; DE-STRUCTURING
    return (
        // CAN ONLY RETURN ONE ELEMENT ONLY (indentation)        
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            {/* USING TEMPLATE STRINGS */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;