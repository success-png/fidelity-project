/**
 * Page-related TypeScript types for the Fidelity Next.js application.
 * These types define the structure for pages and routing.
 */

import type { PageMetadata } from './navigation';

/**
 * Enum for route groups in the application.
 */
export enum RouteGroup {
    AUTH = '(auth)',
    ACCOUNTS = '(accounts)',
    PLANNING = '(planning)',
    RESEARCH = '(research)',
    COMPANY = '(company)',
    SUPPORT = '(support)',
    PRODUCTS = '(products)',
    HOME = '',
}

/**
 * Enum for page sections/components.
 */
export enum PageSection {
    HERO = 'hero',
    PAGE_HEADER = 'page-header',
    PAGE_CONTENT = 'page-content',
    FEATURED = 'featured',
    CTA = 'cta',
    TESTIMONIAL = 'testimonial',
    FAQ = 'faq',
    NEWSLETTER = 'newsletter',
    FOOTER = 'footer',
}

/**
 * Interface for a page route definition.
 */
export interface PageRoute {
    /** HTML file name (source) */
    sourceFile: string;
    /** Clean URL path */
    path: string;
    /** Route group for organization */
    routeGroup: RouteGroup;
    /** Page title */
    title: string;
    /** Page description */
    description?: string;
    /** Component name for import */
    componentName: string;
    /** Whether this page requires authentication */
    requiresAuth: boolean;
    /** SEO metadata */
    metadata?: PageMetadata;
}

/**
 * Interface for route segment parameters.
 */
export interface RouteParams {
    /** Dynamic segment names */
    segments: string[];
    /** Parameter values */
    params: Record<string, string>;
}

/**
 * Interface for breadcrumb navigation.
 */
export interface BreadcrumbItem {
    /** Display label */
    label: string;
    /** URL path */
    href?: string;
    /** Whether this is the current page */
    isCurrent?: boolean;
}

/**
 * Interface for a page template.
 */
export interface PageTemplate {
    /** Template identifier */
    id: string;
    /** Template name */
    name: string;
    /** Sections included in this template */
    sections: PageSection[];
    /** Default layout configuration */
    layout: PageLayoutConfig;
}

/**
 * Interface for page layout configuration.
 */
export interface PageLayoutConfig {
    /** Whether to show header */
    showHeader: boolean;
    /** Whether to show footer */
    showFooter: boolean;
    /** Header variant */
    headerVariant?: 'green' | 'white' | 'transparent';
    /** Container width */
    containerWidth?: 'narrow' | 'wide' | 'full';
    /** Additional CSS classes */
    classes?: string[];
}

/**
 * Interface for a call-to-action component.
 */
export interface CTA {
    /** CTA text */
    text: string;
    /** CTA URL */
    href: string;
    /** Button variant */
    variant: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** Open in new tab */
    openInNewTab?: boolean;
}

/**
 * Interface for a feature card.
 */
export interface FeatureCard {
    /** Card title */
    title: string;
    /** Card description */
    description: string;
    /** Card icon */
    icon?: string;
    /** Card URL */
    href?: string;
    /** Action button */
    action?: CTA;
}

/**
 * Interface for news/article card.
 */
export interface NewsCard {
    /** Article title */
    title: string;
    /** Article excerpt */
    excerpt: string;
    /** Published date */
    publishedAt: string;
    /** Author name */
    author?: string;
    /** Category */
    category?: string;
    /** Image URL */
    imageUrl?: string;
    /** Article URL */
    href: string;
}

/**
 * Interface for a market data item.
 */
export interface MarketData {
    /** Symbol/ticker */
    symbol: string;
    /** Company name */
    name: string;
    /** Current price */
    price: number;
    /** Price change */
    change: number;
    /** Percentage change */
    changePercent: number;
    /** Trading volume */
    volume?: number;
    /** Market status */
    marketStatus?: 'open' | 'closed' | 'pre-market' | 'after-hours';
}

/**
 * Interface for account information.
 */
export interface AccountInfo {
    /** Account ID */
    accountId: string;
    /** Account name */
    accountName: string;
    /** Account type */
    accountType: string;
    /** Account balance */
    balance: number;
    /** Last updated */
    lastUpdated: string;
}

/**
 * Interface for a trading order.
 */
export interface TradeOrder {
    /** Order ID */
    orderId: string;
    /** Symbol to trade */
    symbol: string;
    /** Order type */
    orderType: 'market' | 'limit' | 'stop' | 'stop-limit';
    /** Action */
    action: 'buy' | 'sell';
    /** Quantity */
    quantity: number;
    /** Price (for limit orders) */
    price?: number;
    /** Order status */
    status: 'pending' | 'filled' | 'cancelled' | 'rejected';
}

/**
 * Interface for retirement planning data.
 */
export interface RetirementPlan {
    /** Current age */
    currentAge: number;
    /** Retirement age target */
    retirementAge: number;
    /** Current savings */
    currentSavings: number;
    /** Monthly contribution */
    monthlyContribution: number;
    /** Expected annual return */
    expectedReturn: number;
    /** Target retirement income */
    targetIncome: number;
}

/**
 * Interface for a user profile.
 */
export interface UserProfile {
    /** User ID */
    userId: string;
    /** First name */
    firstName: string;
    /** Last name */
    lastName: string;
    /** Email */
    email: string;
    /** Phone */
    phone?: string;
    /** Account type */
    accountType: 'individual' | 'institutional' | 'advisor';
}

/**
 * Type for form validation rules.
 */
export type ValidationRule =
    | { type: 'required' }
    | { type: 'email' }
    | { type: 'minLength'; value: number }
    | { type: 'maxLength'; value: number }
    | { type: 'pattern'; value: RegExp }
    | { type: 'custom'; validator: (value: unknown) => boolean };

/**
 * Interface for a form field.
 */
export interface FormField {
    /** Field name */
    name: string;
    /** Field label */
    label: string;
    /** Field type */
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'select' | 'checkbox' | 'radio' | 'textarea';
    /** Placeholder text */
    placeholder?: string;
    /** Validation rules */
    validation: ValidationRule[];
    /** Error message */
    errorMessage?: string;
}

/**
 * Interface for a site section.
 */
export interface SiteSection {
    /** Section ID */
    id: string;
    /** Section name */
    name: string;
    /** Route prefix */
    routePrefix: string;
    /** Description */
    description?: string;
    /** Page count */
    pageCount: number;
}
