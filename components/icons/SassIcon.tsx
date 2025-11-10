
import React from 'react';

export const SassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 9a3 3 0 100 6H12v-3" />
        <path d="M9.5 15a3 3 0 100-6H12v3" />
    </svg>
);
