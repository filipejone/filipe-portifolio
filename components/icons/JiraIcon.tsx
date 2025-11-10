
import React from 'react';

export const JiraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2l10 10-10 10L2 12 12 2z" />
        <path d="M12 2v20" />
        <path d="M12 12l5 5" />
        <path d="M12 12l-5 5" />
        <path d="M12 12l5-5" />
        <path d="M12 12l-5-5" />
    </svg>
);
