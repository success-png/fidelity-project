/**
 * Typography Components
 * Heading and Text components for consistent typography
 */

import React from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextColor = 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'error';
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Heading content */
    children: React.ReactNode;
    /** Heading level (h1-h6) */
    level?: HeadingLevel;
    /** Additional CSS class */
    className?: string;
    /** Font weight */
    weight?: FontWeight;
    /** Custom color */
    color?: string;
}

export function Heading({
    children,
    level = 'h2',
    className = '',
    weight = 'semibold',
    color,
    ...props
}: HeadingProps): React.ReactElement {
    const Tag = level;

    const style: React.CSSProperties = {
        fontWeight: weight === 'semibold' ? 600 : weight === 'bold' ? 700 : weight === 'medium' ? 500 : 400,
        color: color || 'inherit',
        margin: 0,
    };

    return (
        <Tag className={className} style={style} {...props}>
            {children}
        </Tag>
    );
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** Text content */
    children: React.ReactNode;
    /** Text size */
    size?: TextSize;
    /** Text color variant */
    color?: TextColor;
    /** Font weight */
    weight?: FontWeight;
    /** Line height */
    lineHeight?: 'tight' | 'normal' | 'relaxed';
    /** Additional CSS class */
    className?: string;
}

export function Text({
    children,
    size = 'base',
    color = 'default',
    weight = 'normal',
    lineHeight = 'normal',
    className = '',
    ...props
}: TextProps): React.ReactElement {
    const sizeMap: Record<TextSize, string> = {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
    };

    const colorMap: Record<TextColor, string> = {
        default: 'var(--fidelity-dark-gray)',
        muted: 'var(--fidelity-medium-gray)',
        primary: 'var(--fidelity-blue)',
        secondary: 'var(--fidelity-dark-blue)',
        success: 'var(--fidelity-green)',
        error: 'var(--fidelity-red)',
    };

    const lineHeightMap: Record<string, string> = {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
    };

    const style: React.CSSProperties = {
        fontSize: sizeMap[size],
        color: colorMap[color],
        fontWeight: weight === 'semibold' ? 600 : weight === 'bold' ? 700 : weight === 'medium' ? 500 : 400,
        lineHeight: lineHeightMap[lineHeight],
        margin: 0,
    };

    return (
        <p className={className} style={style} {...props}>
            {children}
        </p>
    );
}

/**
 * Lead Text - larger introductory text
 */
export interface LeadProps extends Omit<TextProps, 'size'> {
    children: React.ReactNode;
}

export function Lead({ children, ...props }: LeadProps): React.ReactElement {
    return (
        <Text size="lg" color="muted" {...props}>
            {children}
        </Text>
    );
}

/**
 * Small Text - for disclaimers, footnotes
 */
export interface SmallProps extends Omit<TextProps, 'size'> {
    children: React.ReactNode;
}

export function Small({ children, ...props }: SmallProps): React.ReactElement {
    return (
        <Text size="xs" color="muted" {...props}>
            {children}
        </Text>
    );
}
