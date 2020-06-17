import React from 'react';
// has children of cardList
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'2px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
}; 

export default Scroll;