/**
 * Container Component
 * Layout container with max-width 1280px
 */

import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Container content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Custom max-width (default: 1280px) */
    maxWidth?: string;
    /** Remove default padding */
    noPadding?: boolean;
}

export function Container({
    children,
    className = '',
    maxWidth = '1280px',
    noPadding = false,
    ...props
}: ContainerProps): React.ReactElement {
    return (
        <div
            className={className}
            style={{
                maxWidth,
                margin: '0 auto',
                padding: noPadding ? '0' : '0 20px',
            }}
            {...props}
        >
            {children}
        </div>
    );
}
