/**
 * Input Component
 * Reusable input component for forms and search
 */

import React, { useId } from 'react';
import styles from './Input.module.css';

export type InputSize = 'md' | 'sm' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Label for the input */
    label?: string;
    /** Error message to display */
    error?: string;
    /** Helper text below input */
    helperText?: string;
    /** Input size */
    inputSize?: InputSize;
    /** Full-width input */
    fullWidth?: boolean;
    /** Left icon */
    iconBefore?: React.ReactNode;
    /** Right icon */
    iconAfter?: React.ReactNode;
}

export function Input({
    label,
    error,
    helperText,
    inputSize = 'md',
    fullWidth = true,
    iconBefore,
    iconAfter,
    className = '',
    id,
    ...props
}: InputProps): React.ReactElement {
    const generatedId = useId();
    const inputId = id || generatedId;
    const hasError = Boolean(error);

    const wrapperClassNames = [
        styles.inputWrapper,
        fullWidth ? styles.fullWidth : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const inputClassNames = [
        styles.input,
        styles[inputSize],
        iconBefore ? styles.hasIconBefore : '',
        iconAfter ? styles.hasIconAfter : '',
        hasError ? styles.hasError : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClassNames}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}
            <div className={styles.inputContainer}>
                {iconBefore && (
                    <span className={styles.iconBefore} aria-hidden="true">
                        {iconBefore}
                    </span>
                )}
                <input id={inputId} className={inputClassNames} {...props} />
                {iconAfter && (
                    <span className={styles.iconAfter} aria-hidden="true">
                        {iconAfter}
                    </span>
                )}
            </div>
            {(error || helperText) && (
                <span className={hasError ? styles.errorText : styles.helperText}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
}

/**
 * Textarea Component
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Label for the textarea */
    label?: string;
    /** Error message to display */
    error?: string;
    /** Helper text below textarea */
    helperText?: string;
    /** Full-width textarea */
    fullWidth?: boolean;
}

export function Textarea({
    label,
    error,
    helperText,
    fullWidth = true,
    className = '',
    id,
    ...props
}: TextareaProps): React.ReactElement {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const hasError = Boolean(error);

    const wrapperClassNames = [
        styles.inputWrapper,
        fullWidth ? styles.fullWidth : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const textareaClassNames = [
        styles.textarea,
        hasError ? styles.hasError : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClassNames}>
            {label && (
                <label htmlFor={textareaId} className={styles.label}>
                    {label}
                </label>
            )}
            <textarea id={textareaId} className={textareaClassNames} {...props} />
            {(error || helperText) && (
                <span className={hasError ? styles.errorText : styles.helperText}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
}
