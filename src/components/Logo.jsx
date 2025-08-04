import React from 'react';

const Logo = ({ size = 40, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#627eea" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        filter="url(#glow)"
      />
      
      {/* Academic cap (graduation hat) */}
      <g fill="white">
        {/* Cap base */}
        <ellipse cx="50" cy="42" rx="25" ry="8" />
        
        {/* Cap top */}
        <path d="M25 42 L50 25 L75 42 L50 50 Z" />
        
        {/* Tassel */}
        <circle cx="65" cy="35" r="2" />
        <line x1="65" y1="37" x2="70" y2="45" stroke="white" strokeWidth="1.5" />
        <circle cx="70" cy="45" r="1.5" />
        
        {/* Academic scroll/diploma */}
        <rect x="40" y="60" width="20" height="3" rx="1.5" />
        <rect x="42" y="66" width="16" height="2" rx="1" />
        <rect x="44" y="70" width="12" height="2" rx="1" />
        
        {/* Crypto/blockchain elements - small cubes */}
        <rect x="30" y="55" width="4" height="4" rx="1" opacity="0.8" />
        <rect x="66" y="58" width="4" height="4" rx="1" opacity="0.8" />
        <rect x="35" y="72" width="3" height="3" rx="0.5" opacity="0.6" />
        <rect x="62" y="68" width="3" height="3" rx="0.5" opacity="0.6" />
      </g>
    </svg>
  );
};

export default Logo;