import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                        key={ robots[i].id } 
                        id={ robots[i].id } 
                        name={ robots[i].names } 
                        email={ robots[i].emailk }     
                    />);
                })
            }
        </div>
    );
}

export default CardList;