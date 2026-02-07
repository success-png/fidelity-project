/**
 * Badge Component
 * For labels, tags, and status indicators
 */

import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Badge content */
    children: React.ReactNode;
    /** Badge variant */
    variant?: BadgeVariant;
    /** Badge size */
    size?: BadgeSize;
    /** Outline style */
    outline?: boolean;
    /** Additional CSS class */
    className?: string;
}

export function Badge({
    children,
    variant = 'default',
    size = 'md',
    outline = false,
    className = '',
    ...props
}: BadgeProps): React.ReactElement {
    const classNames = [
        styles.badge,
        styles[variant],
        styles[size],
        outline ? styles.outline : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={classNames} {...props}>
            {children}
        </span>
    );
}

/**
 * Status Dot Component
 * Small dot indicator for status
 */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Status type */
    status: 'success' | 'warning' | 'error' | 'info' | 'default';
    /** Size of the dot */
    size?: 'sm' | 'md';
    /** Additional CSS class */
    className?: string;
}

export function StatusDot({
    status,
    size = 'md',
    className = '',
    ...props
}: StatusDotProps): React.ReactElement {
    const classNames = [styles.statusDot, styles[status], styles[size], className]
        .filter(Boolean)
        .join(' ');

    return <span className={classNames} aria-label={status} {...props} />;
}
