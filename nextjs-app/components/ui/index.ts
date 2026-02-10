/**
 * UI Component Library
 * Reusable UI components for the Fidelity project
 */

// Button
export { Button } from './Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button/Button';

// Card
export { Card, CardHeader, CardBody, CardFooter } from './Card/Card';
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, CardPadding } from './Card/Card';

// Container
export { Container } from './Container/Container';
export type { ContainerProps } from './Container/Container';

// Input
export { Input, Textarea } from './Input/Input';
export type { InputProps, InputSize, TextareaProps } from './Input/Input';

// Typography
export { Heading, Text, Lead, Small } from './Typography/Typography';
export type {
    HeadingProps,
    HeadingLevel,
    TextProps,
    TextSize,
    TextColor,
    FontWeight,
    LeadProps,
    SmallProps,
} from './Typography/Typography';

// Badge
export { Badge, StatusDot } from './Badge/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize, StatusDotProps } from './Badge/Badge';

// Skeleton
export { Skeleton, SkeletonCard, SkeletonList } from './Skeleton/Skeleton';
export type {
    SkeletonProps,
    SkeletonVariant,
    SkeletonWidth,
    SkeletonCardProps,
    SkeletonListProps,
} from './Skeleton/Skeleton';
