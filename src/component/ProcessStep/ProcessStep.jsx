// components/ProcessStep.jsx
import React from 'react';
import styles from './ProcessStep.module.css';

const gradientId = "gradient";

const GradientDefs = () => (
  <defs>
    <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="orange" />
      <stop offset="50%" stopColor="magenta" />
      <stop offset="100%" stopColor="cyan" />
    </linearGradient>
  </defs>
);

const ShapeSVG = ({ shape, number }) => {
  switch (shape) {
    case 'circle':
      return (
        <svg width="100" height="100">
          <GradientDefs />
          <circle cx="50" cy="50" r="45" stroke={`url(#${gradientId})`} strokeWidth="4" fill="none" />
          <text x="50" y="60" textAnchor="middle" fontSize="35" fill="black">{number}</text>
        </svg>
      );
    case 'square':
      return (
        <svg width="100" height="100">
          <GradientDefs />
          <rect x="10" y="10" width="80" height="80" stroke={`url(#${gradientId})`} strokeWidth="4" fill="none" />
          <text x="50" y="60" textAnchor="middle" fontSize="35" fill="black">{number}</text>
        </svg>
      );
    case 'triangle':
      return (
        <svg width="130" height="120" viewBox="0 0 120 110">
          <GradientDefs />
          <polygon points="60,10 10,100 110,100" fill="none" stroke={`url(#${gradientId})`} strokeWidth="4" />
          <text x="60" y="80" textAnchor="middle" fontSize="35" fill="black">{number}</text>
        </svg>
      );
    default:
      return null;
  }
};

const ProcessStep = ({ step }) => (
  <div className={styles.processStep}>
    <ShapeSVG shape={step.shape} number={step.number} />
    <div>
      <h4>{step.title}</h4>
      <p>{step.description}</p>
    </div>
  </div>
);

export default ProcessStep;
