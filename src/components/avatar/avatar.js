import React from 'react';
import './avatar.css';

const Avatar = (props) => {
    return (
        <div className="avatar">{props.children}</div>
    );
}

export default Avatar;