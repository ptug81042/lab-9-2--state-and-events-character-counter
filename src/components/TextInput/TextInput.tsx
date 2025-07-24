import React, { useEffect, useState } from 'react';
import type { TextInputProps } from '../../types';
import './TextInput.css';

function TextInput({ onTextChange, placeholder = 'Type something...', initialValue = '' }: TextInputProps) {
    // Internal state tracks current text content
    const [text, setText] = useState(initialValue);

    // Whenever `text` updates, notify parent via the callback
    useEffect(() => {
        onTextChange(text);
    }, [text, onTextChange]);

    // Handles user input changes in the textarea
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        // Root container for the input block
        <div className="text-input">

            {/* Label associated with the textarea */}
            <label htmlFor="text-box">Enter Text</label>

            {/* Controlled textarea bound to state */}
            <textarea
                id='text-box'
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
                rows={6}
            />
        </div>
    );
}

export default TextInput;