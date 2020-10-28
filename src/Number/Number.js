import React from 'react';

const number = (props) => {
    return <button style={props.style} onClick={props.click}>{props.number}</button>
}

export default number;