
import React from 'react';

export const SlackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
        <path d="M12 12v-2a2 2 0 01-2-2V6a2 2 0 114 0v2" />
        <path d="M12 12h2a2 2 0 012 2v2a2 2 0 11-4 0h-2" />
        <path d="M12 12v2a2 2 0 012 2v2a2 2 0 11-4 0v-2" />
        <path d="M12 12h-2a2 2 0 01-2-2V6a2 2 0 114 0h2" />
    </svg>
);
