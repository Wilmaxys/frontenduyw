import React from 'react';
import './chat-message.css';
import classNames from 'classnames';
import Avatar from '../../avatar/avatar';

const Message = ({ isMyMessage, username, children }) => {
    const messageClass = classNames('message-row', {
        'you-message': isMyMessage,
        'other-message': !isMyMessage
    });

    const imageThumbnail = isMyMessage ? null : <Avatar>{username.charAt(0).toUpperCase()}</Avatar>;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {children}
                </div>
                <div className="message-time">{username} - April 14</div>
            </div>
        </div>
    );
}

export default Message;