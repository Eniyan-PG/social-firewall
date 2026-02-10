import React, { useState } from 'react';

const Input = () => {
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);

    const handleChange = (event) => {
        const input = event.target.value;
        setMessage(input);
        setCharCount(input.length);
    };

    const handleAnalyze = () => {
        // Function to analyze the message
        console.log('Analyzing:', message);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <textarea
                placeholder="Type your message..."
                value={message}
                onChange={handleChange}
                style={{ width: '100%', height: '150px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <div style={{ margin: '10px 0', textAlign: 'right' }}>
                <span>{charCount} characters</span>
            </div>
            <button onClick={handleAnalyze} style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
                Analyze
            </button>
        </div>
    );
};

export default Input;