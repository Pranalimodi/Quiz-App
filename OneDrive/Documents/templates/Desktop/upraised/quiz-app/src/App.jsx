import React, { useState } from 'react';
import Home from './components/Home.jsx';
import Question1 from './components/Question1.jsx';
import Question2 from './components/Question2.jsx';
import Question3 from './components/Question3.jsx';
import Report from './components/Report.jsx';

const App = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);

    const nextStep = (answer) => {
        if (answer) {
            setAnswers((prev) => [...prev, answer]);
        }
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="app-container">
            {currentStep === 0 && <Home onStart={() => nextStep()} />}
            {currentStep === 1 && <Question1 onNext={nextStep} />}
            {currentStep === 2 && <Question2 onNext={nextStep} />}
            {currentStep === 3 && <Question3 onNext={nextStep} />}
            {currentStep > 3 && <Report answers={answers} />}
        </div>
    );
    
};

export default App;
