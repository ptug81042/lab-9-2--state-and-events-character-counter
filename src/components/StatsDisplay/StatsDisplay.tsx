import type { StatsDisplayProps } from '../../types';
import './StatsDisplay.css';

function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
    return (
        // Container for the stats display
        <div className="stats-display">

            {/* Section heading */}
            <h2>Text Stats</h2>

            {/* List of text statistics */}
            <ul>
                <li><strong>Characters:</strong> {stats.characterCount}</li>
                <li><strong>Words: </strong> {stats.wordCount}</li>

                {/* Conditionally render reading time if requested */}
                {showReadingTime && (
                    <li>
                        <strong>Estimated Reading Time:</strong> {stats.readingTime.toFixed(2)} min
                    </li>
                )}
            </ul>
        </div>
    );
}

export default StatsDisplay;