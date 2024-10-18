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
            <h1 className="question-title">Which is the Largest Ocean?</h1>
            <div className="options">
                <div className="option">Atlantic</div>
                <div className="option">Pacific</div>
                <div className="option">Indian</div>
                <div className="option">Arctic</div>
            </div>
            <div className="progress-bar">
                {/* Progress bar component */}
            </div>
            <button className="submit-button">Submit</button>
        </div>
    );
};

export default Question1;
