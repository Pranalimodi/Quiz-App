// Question1.jsx
import React from 'react';
import './Question.css';

const Question1 = () => {
    return (
        <div className="question-page">
            <div className="background-layer"></div>
            <div className="decorative-shapes">
                {/* Decorative shapes go here */}
            </div>
            <h1 className="question-title">Which is known as the Red Planet?</h1>
            <div className="options">
                <div className="option">Venus</div>
                <div className="option">Mars</div>
                <div className="option">Jupiter</div>
                <div className="option">Earth</div>
            </div>
            <div className="progress-bar">
                {/* Progress bar component */}
            </div>
            <button className="submit-button">Submit</button>
        </div>
    );
};

export default Question1;
