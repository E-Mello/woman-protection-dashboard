import React from 'react';

interface ChatMessageProps {
    content: string;
    timestamp: Date;
    sender: 'user' | 'police';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, timestamp, sender }) => {
    const messageTime = timestamp.toLocaleTimeString();

    return (
        <div className={`p-2 ${sender === 'user' ? 'bg-blue-300 text-white' : 'bg-gray-300 text-black'} rounded-lg`}>
            <p>{content}</p>
            <span className="text-xs">{messageTime}</span>
        </div>
    );
};

export default ChatMessage;
