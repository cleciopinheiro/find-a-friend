import React from 'react';

type NotificationProps = {
    show: boolean,
    message: string,
    backgroundColor: string
};

export const NotificationPopout: React.FC<NotificationProps> = ({ show, message, backgroundColor }) => {
    if (!show) return null;
    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '10px',
            backgroundColor,
            color: 'white',
            borderRadius: '5px'
        }}>
            {message}
        </div>
    );
};
