/**
 * Card Component
 * Reusable card component with various styling options
 */

import React from 'react';
import styles from './Card.module.css';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Card content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Show card with shadow */
    withShadow?: boolean;
    /** Show card border */
    withBorder?: boolean;
    /** Card padding size */
    padding?: CardPadding;
    /** Hover effect */
    hoverable?: boolean;
}

export function Card({
    children,
    className = '',
    withShadow = false,
    withBorder = true,
    padding = 'md',
    hoverable = false,
    ...props
}: CardProps): React.ReactElement {
    const classNames = [
        styles.card,
        withShadow ? styles.withShadow : '',
        withBorder ? styles.withBorder : '',
        styles[`padding-${padding}`],
        hoverable ? styles.hoverable : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
}

/**
 * Card Header Component
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Header content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

export function CardHeader({ children, className = '', ...props }: CardHeaderProps): React.ReactElement {
    return (
        <div className={`${styles.cardHeader} ${className}`} {...props}>
            {children}
        </div>
    );
}

/**
 * Card Body Component
 */
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Body content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

export function CardBody({ children, className = '', ...props }: CardBodyProps): React.ReactElement {
    return (
        <div className={`${styles.cardBody} ${className}`} {...props}>
            {children}
        </div>
    );
}

/**
 * Card Footer Component
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Footer content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps): React.ReactElement {
    return (
        <div className={`${styles.cardFooter} ${className}`} {...props}>
            {children}
        </div>
    );
}
