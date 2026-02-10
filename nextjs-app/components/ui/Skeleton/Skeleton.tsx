/**
 * Skeleton Component
 * Loading state placeholder with shimmer effect
 */

import React from 'react';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';
export type SkeletonWidth = 'sm' | 'md' | 'lg' | 'full' | number | `${number}%`;

export interface SkeletonProps {
    /** Skeleton variant */
    variant?: SkeletonVariant;
    /** Width of the skeleton */
    width?: SkeletonWidth;
    /** Height of the skeleton */
    height?: number | string;
    /** Number of lines (for text variant) */
    lines?: number;
    /** Additional CSS class */
    className?: string;
}

export function Skeleton({
    variant = 'text',
    width = 'full',
    height,
    lines = 1,
    className = '',
}: SkeletonProps): React.ReactElement {
    const getWidth = (): string => {
        if (typeof width === 'number') return `${width}px`;
        if (width === 'sm') return '80px';
        if (width === 'md') return '150px';
        if (width === 'lg') return '300px';
        return width;
    };

    const getHeightValue = (): string => {
        if (typeof height === 'number') return `${height}px`;
        if (typeof height === 'string') return height;
        if (variant === 'text') return '1em';
        if (variant === 'circular') return '40px';
        return '100px';
    };

    if (variant === 'text' && lines > 1) {
        return (
            <div className={`${styles.skeletonText} ${className}`}>
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.skeleton} ${styles.text}`}
                        style={{
                            width: index === lines - 1 ? '60%' : '100%',
                            height: getHeightValue(),
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`${styles.skeleton} ${styles[variant]} ${className}`}
            style={{
                width: getWidth(),
                height: getHeightValue(),
            }}
        />
    );
}

/**
 * Skeleton Card Component
 * Pre-configured skeleton for card loading states
 */
export interface SkeletonCardProps {
    /** Show header */
    showHeader?: boolean;
    /** Show image */
    showImage?: boolean;
    /** Number of content lines */
    contentLines?: number;
    /** Additional CSS class */
    className?: string;
}

export function SkeletonCard({
    showHeader = true,
    showImage = true,
    contentLines = 3,
    className = '',
}: SkeletonCardProps): React.ReactElement {
    return (
        <div className={`${styles.skeletonCard} ${className}`}>
            {showImage && (
                <div className={styles.skeletonImage}>
                    <Skeleton variant="rectangular" height={180} width="100%" />
                </div>
            )}
            {showHeader && (
                <div className={styles.skeletonCardHeader}>
                    <Skeleton variant="text" width="70%" height={24} />
                </div>
            )}
            <div className={styles.skeletonCardContent}>
                <Skeleton variant="text" lines={contentLines} height={16} />
            </div>
        </div>
    );
}

/**
 * Skeleton List Component
 * Pre-configured skeleton for list loading states
 */
export interface SkeletonListProps {
    /** Number of items */
    items?: number;
    /** Show avatar/image */
    showAvatar?: boolean;
    /** Additional CSS class */
    className?: string;
}

export function SkeletonList({
    items = 3,
    showAvatar = true,
    className = '',
}: SkeletonListProps): React.ReactElement {
    return (
        <div className={`${styles.skeletonList} ${className}`}>
            {Array.from({ length: items }).map((_, index) => (
                <div key={index} className={styles.skeletonListItem}>
                    {showAvatar && (
                        <div className={styles.skeletonAvatar}>
                            <Skeleton variant="circular" width={40} height={40} />
                        </div>
                    )}
                    <div className={styles.skeletonListContent}>
                        <Skeleton variant="text" width="40%" height={16} />
                        <Skeleton variant="text" width="70%" height={14} />
                    </div>
                </div>
            ))}
        </div>
    );
}
