import React from 'react';
import './emoji.css'
const Emoji = props => (
    <span
    className="emoji"
    role="img"
    arial-label={props.label ? props.label : ""}
    arial-hidden={props.label ? props.lable : ""}
    >
        {props.symbol}
    </span>
)

export default Emoji