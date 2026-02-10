import React from 'react';
import './Result.css';

const Result = ({ riskScore, judgmentLabel, saferRewrite, explanation, regretProbability }) => {
    const getColor = (score) => {
        if (score < 3) return 'green';
        else if (score < 7) return 'yellow';
        return 'red';
    };

    return (
        <div className="result-container" style={{ color: getColor(riskScore) }}>
            <h2>Risk Score: {riskScore}</h2>
            <p>Judgment: {judgmentLabel}</p>
            <p>Safer Rewrite: {saferRewrite}</p>
            <p>Explanation: {explanation}</p>
            <p>Regret Probability: {regretProbability}%</p>
        </div>
    );
};

export default Result;