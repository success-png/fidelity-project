/**
 * Button Component
 * Reusable button with primary, secondary, and outline variants
 */

import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button style variant */
    variant?: ButtonVariant;
    /** Button size */
    size?: ButtonSize;
    /** Full-width button */
    fullWidth?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Icon to display before text */
    iconBefore?: React.ReactNode;
    /** Icon to display after text */
    iconAfter?: React.ReactNode;
    /** Child content */
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    iconBefore,
    iconAfter,
    children,
    className = '',
    disabled,
    ...props
}: ButtonProps): React.ReactElement {
    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.loading : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classNames}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <span className={styles.spinner} aria-hidden="true">
                    ⏳
                </span>
            )}
            {iconBefore && !isLoading && (
                <span className={styles.iconBefore} aria-hidden="true">
                    {iconBefore}
                </span>
            )}
            <span className={styles.content}>{children}</span>
            {iconAfter && !isLoading && (
                <span className={styles.iconAfter} aria-hidden="true">
                    {iconAfter}
                </span>
            )}
        </button>
    );
}
