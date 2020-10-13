import React from 'react';
import './chat-message.css';
import classNames from 'classnames';

const Message = ({ isMyMessage, message, username }) => {
    const messageClass = classNames('message-row', {
        'you-message': isMyMessage,
        'other-message': !isMyMessage
    });

    const imageThumbnail = isMyMessage ? null : <div className="avatar">{username.charAt(0)}</div>;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {message}
                </div>
                <div className="message-time">{username} - April 14</div>
            </div>
        </div>
    );
}

export default Message;