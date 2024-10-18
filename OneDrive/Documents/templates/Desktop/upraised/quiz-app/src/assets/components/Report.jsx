// src/components/Report.jsx
import React from 'react';
import './Report.css'; // Assuming you save your styles in this file

const Report = () => {
    return (
        <div className="result">
            {/* Background Rectangle */}
            <div className="rectangle-background"></div>

            {/* Color Section */}
            <div className="color-section"></div>

            {/* Circles */}
            <div className="circle orange"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
            <div className="circle pink"></div>
            <div className="circle lightYellow"></div>
            <div className="circle blue"></div>
            <div className="circle purple"></div>
            <div className="circle red"></div>

            {/* Main Report Content */}
            <h1 className="your-result">Your Result</h1>
            <div className="score-section">
                <div className="score-box correct">
                    <p className="score-label">Correct</p>
                    <p className="score-value">95</p>
                </div>
                <div className="score-box incorrect">
                    <p className="score-label">Incorrect</p>
                    <p className="score-value">5</p>
                </div>
            </div>

            {/* Next Button */}
            <div className="next-button">
                <p>Next</p>
            </div>
        </div>
    );
};

export default Report;
