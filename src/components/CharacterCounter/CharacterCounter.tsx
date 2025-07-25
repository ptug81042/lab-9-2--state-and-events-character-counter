import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps, TextStats } from '../../types';
import './CharacterCounter.css';

function CharacterCounter({
    minWords = 0,
    maxWords = Infinity,
    targetReadingTime = 0,
}: CharacterCounterProps) {
    // Internal state to track character, word, and reading time stats
    const [stats, setStats] = useState<TextStats>({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
    });

    // Handler triggered on every text update from TextInput component
    const handleTextChange = (text: string) => {
        const characterCount = text.length;

        // Sanitize whitespace and split text into valid words
        const words = text.trim().split(/\s+/).filter(Boolean);
        const wordCount = words.length;

        const readingTime = wordCount / 200;

        // Update stats object with computed values
        setStats({ characterCount, wordCount, readingTime });
    };

    return (
        // Main coontainer for the character counter module
        <div className="character-counter">

            {/* Text input area (child component) */}
            <TextInput onChange={handleTextChange} />

            {/* Display calculated text statistics */}
            <StatsDisplay stats={stats} showReadingTime={true} />

            {/* Progress bar indicating how close the user is to maxWords */}
            {Number.isFinite(maxWords) && (
            <div className="progress-container">
                {/* Inner progress bar width is calculated based on current word count */}
                <div
                className="progress-bar"
                style={{
                    width: `${Math.min((stats.wordCount / maxWords) * 100, 100)}%`, // Cap at 100%
                    backgroundColor: stats.wordCount > maxWords ? '#f44336' : '#4caf50', // Red if exceeded
                }}
                />
            </div>
            )}


            {/* Conditionally show warning messages based on user-defined limit */}
            {stats.wordCount < minWords && (
                <p className="warning">
                Add at least {minWords - stats.wordCount} more words.
            </p>
            )}

            {stats.wordCount > maxWords && (
                <p className="warning">
                    You have exceeded the word limit by {stats.wordCount - maxWords} words.
                </p>
            )}

            {stats.readingTime > targetReadingTime && (
                <p className="warning">
                    Rading time exceeds target ({targetReadingTime} min).
                </p>
            )}
        </div>
    )
}

export default CharacterCounter;