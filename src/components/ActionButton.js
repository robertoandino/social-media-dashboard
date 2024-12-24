import React from 'react';

const ActionButton = ({ icon, text, onClick }) => {
    return (
        <button
            className="text-sm text-blue-400 hover:underline flex items-center space-x-1"
            onClick={onClick}
        >
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    );
};

export default ActionButton;