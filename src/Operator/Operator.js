import React from 'react';

const operator = (props) => {
    return <button style={props.style} onClick={props.click}>{props.operator}</button>
}

export default operator;