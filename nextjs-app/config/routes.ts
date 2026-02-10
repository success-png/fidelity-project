/**
 * Route definitions for the Fidelity Next.js application.
 * Maps HTML source files to clean URL paths.
 */

import type { PageRoute } from '@/types/page';
import { RouteGroup } from '@/types/page';

/**
 * Complete route mapping from HTML files to clean URLs.
 * This configuration drives the clean URL routing structure.
 */
export const ROUTES: PageRoute[] = [
    // ==================== AUTH ROUTES ====================
    {
        sourceFile: 'login.html',
        path: '/auth/login',
        routeGroup: RouteGroup.AUTH,
        title: 'Log in',
        componentName: 'LoginPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'open-account.html',
        path: '/auth/open-account',
        routeGroup: RouteGroup.AUTH,
        title: 'Open an Account',
        componentName: 'OpenAccountPage',
        requiresAuth: false,
    },

    // ==================== ACCOUNTS ROUTES ====================
    {
        sourceFile: 'portfolio.html',
        path: '/accounts/portfolio',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Portfolio',
        componentName: 'PortfolioPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'account-positions.html',
        path: '/accounts/positions',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Account Positions',
        componentName: 'AccountPositionsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'trade.html',
        path: '/accounts/trade',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Trade',
        componentName: 'TradePage',
        requiresAuth: true,
    },
    {
        sourceFile: 'fidelity-trader-plus.html',
        path: '/accounts/fidelity-trader-plus',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Fidelity Trader Plus',
        componentName: 'FidelityTraderPlusPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fidelity-trader-plus-web.html',
        path: '/accounts/fidelity-trader-plus-web',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Fidelity Trader Plus Web',
        componentName: 'FidelityTraderPlusWebPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'transfers.html',
        path: '/accounts/transfers',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Transfers',
        componentName: 'TransfersPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'cash-management.html',
        path: '/accounts/cash-management',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Cash Management',
        componentName: 'CashManagementPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'bill-pay.html',
        path: '/accounts/bill-pay',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Bill Pay',
        componentName: 'BillPayPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'full-view.html',
        path: '/accounts/full-view',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Full View',
        componentName: 'FullViewPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'security-settings.html',
        path: '/accounts/security-settings',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Security Settings',
        componentName: 'SecuritySettingsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'account-features.html',
        path: '/accounts/features',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Account Features',
        componentName: 'AccountFeaturesPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'documents.html',
        path: '/accounts/documents',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Documents',
        componentName: 'DocumentsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'tax-forms-information.html',
        path: '/accounts/tax-forms',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Tax Forms & Information',
        componentName: 'TaxFormsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'retirement-distributions.html',
        path: '/accounts/retirement-distributions',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Retirement Distributions',
        componentName: 'RetirementDistributionsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'refer-a-friend.html',
        path: '/accounts/refer-friend',
        routeGroup: RouteGroup.ACCOUNTS,
        title: 'Refer a Friend',
        componentName: 'ReferFriendPage',
        requiresAuth: false,
    },

    // ==================== PLANNING ROUTES ====================
    {
        sourceFile: 'retirement.html',
        path: '/planning/retirement',
        routeGroup: RouteGroup.PLANNING,
        title: 'Retirement',
        componentName: 'RetirementPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'plan-for-retirement.html',
        path: '/planning/plan-retirement',
        routeGroup: RouteGroup.PLANNING,
        title: 'Plan for Retirement',
        componentName: 'PlanForRetirementPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'build-your-free-plan.html',
        path: '/planning/free-plan',
        routeGroup: RouteGroup.PLANNING,
        title: 'Build Your Free Plan',
        componentName: 'BuildFreePlanPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'my-goals.html',
        path: '/planning/my-goals',
        routeGroup: RouteGroup.PLANNING,
        title: 'My Goals',
        componentName: 'MyGoalsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'financial-basics.html',
        path: '/planning/financial-basics',
        routeGroup: RouteGroup.PLANNING,
        title: 'Financial Basics',
        componentName: 'FinancialBasicsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'building-savings.html',
        path: '/planning/building-savings',
        routeGroup: RouteGroup.PLANNING,
        title: 'Building Savings',
        componentName: 'BuildingSavingsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'wealth-management.html',
        path: '/planning/wealth-management',
        routeGroup: RouteGroup.PLANNING,
        title: 'Wealth Management',
        componentName: 'WealthManagementPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'find-an-advisor.html',
        path: '/planning/find-advisor',
        routeGroup: RouteGroup.PLANNING,
        title: 'Find an Advisor',
        componentName: 'FindAdvisorPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'life-events.html',
        path: '/planning/life-events',
        routeGroup: RouteGroup.PLANNING,
        title: 'Life Events',
        componentName: 'LifeEventsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'saving-investing-for-a-child.html',
        path: '/planning/savings-child',
        routeGroup: RouteGroup.PLANNING,
        title: 'Saving & Investing for a Child',
        componentName: 'SavingForChildPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'charitable-giving.html',
        path: '/planning/charitable-giving',
        routeGroup: RouteGroup.PLANNING,
        title: 'Charitable Giving',
        componentName: 'CharitableGivingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'long-term-care-planning.html',
        path: '/planning/long-term-care',
        routeGroup: RouteGroup.PLANNING,
        title: 'Long-Term Care Planning',
        componentName: 'LongTermCarePage',
        requiresAuth: false,
    },
    {
        sourceFile: 'what-we-offer.html',
        path: '/planning/what-we-offer',
        routeGroup: RouteGroup.PLANNING,
        title: 'What We Offer',
        componentName: 'WhatWeOfferPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'planning-advice.html',
        path: '/planning/advice',
        routeGroup: RouteGroup.PLANNING,
        title: 'Planning & Advice',
        componentName: 'PlanningAdvicePage',
        requiresAuth: false,
    },

    // ==================== RESEARCH ROUTES ====================
    {
        sourceFile: 'news.html',
        path: '/research/news',
        routeGroup: RouteGroup.RESEARCH,
        title: 'News',
        componentName: 'NewsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'viewpoints.html',
        path: '/research/viewpoints',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Viewpoints',
        componentName: 'ViewpointsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'marketplace-solutions.html',
        path: '/research/marketplace-solutions',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Marketplace Solutions',
        componentName: 'MarketplaceSolutionsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'wealth-management-insights.html',
        path: '/research/insights',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Wealth Management Insights',
        componentName: 'WealthInsightsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'watchlist.html',
        path: '/research/watchlist',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Watchlist',
        componentName: 'WatchlistPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'alerts.html',
        path: '/research/alerts',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Alerts',
        componentName: 'AlertsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'stocks-etfs-crypto.html',
        path: '/research/stocks-etfs-crypto',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Stocks, ETFs, Crypto',
        componentName: 'StocksEtfsCryptoPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'mutual-funds.html',
        path: '/research/mutual-funds',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Mutual Funds',
        componentName: 'MutualFundsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fixed-income-bonds-cds.html',
        path: '/research/fixed-income',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Fixed Income, Bonds & CDs',
        componentName: 'FixedIncomePage',
        requiresAuth: false,
    },
    {
        sourceFile: 'options.html',
        path: '/research/options',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Options',
        componentName: 'OptionsPage',
        requiresAuth: true,
    },
    {
        sourceFile: 'ipos.html',
        path: '/research/ipos',
        routeGroup: RouteGroup.RESEARCH,
        title: 'IPOs',
        componentName: 'IPOsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'annuities.html',
        path: '/research/annuities',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Annuities',
        componentName: 'AnnuitiesPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'learn.html',
        path: '/research/learn',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Learn',
        componentName: 'LearnPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'insights-tools.html',
        path: '/research/insights-tools',
        routeGroup: RouteGroup.RESEARCH,
        title: 'Insights & Tools',
        componentName: 'InsightsToolsPage',
        requiresAuth: false,
    },

    // ==================== PRODUCTS ROUTES ====================
    {
        sourceFile: 'retirement-iras.html',
        path: '/products/retirement-iras',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Retirement & IRAs',
        componentName: 'RetirementIrasPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'spending-saving.html',
        path: '/products/spending-saving',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Spending & Saving',
        componentName: 'SpendingSavingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'investing-trading.html',
        path: '/products/investing-trading',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Investing & Trading',
        componentName: 'InvestingTradingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'crypto.html',
        path: '/products/crypto',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Crypto',
        componentName: 'CryptoPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'direct-indexing.html',
        path: '/products/direct-indexing',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Direct Indexing',
        componentName: 'DirectIndexingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'etfs.html',
        path: '/products/etfs',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'ETFs',
        componentName: 'ETFsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'sustainable-investing.html',
        path: '/products/sustainable-investing',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Sustainable Investing',
        componentName: 'SustainableInvestingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'managed-accounts.html',
        path: '/products/managed-accounts',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Managed Accounts',
        componentName: 'ManagedAccountsPage',
        requiresAuth: false,
    },
    {
        sourceFile: '529-college-savings.html',
        path: '/products/college-savings',
        routeGroup: RouteGroup.PRODUCTS,
        title: '529 College Savings',
        componentName: 'CollegeSavingsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'health-savings-accounts.html',
        path: '/products/health-savings',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Health Savings Accounts',
        componentName: 'HealthSavingsPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'life-insurance.html',
        path: '/products/life-insurance',
        routeGroup: RouteGroup.PRODUCTS,
        title: 'Life Insurance',
        componentName: 'LifeInsurancePage',
        requiresAuth: false,
    },

    // ==================== COMPANY ROUTES ====================
    {
        sourceFile: 'about-fidelity.html',
        path: '/company/about',
        routeGroup: RouteGroup.COMPANY,
        title: 'About Fidelity',
        componentName: 'AboutPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'careers.html',
        path: '/company/careers',
        routeGroup: RouteGroup.COMPANY,
        title: 'Careers',
        componentName: 'CareersPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fidelity-advantage.html',
        path: '/company/fidelity-advantage',
        routeGroup: RouteGroup.COMPANY,
        title: 'The Fidelity Advantage',
        componentName: 'FidelityAdvantagePage',
        requiresAuth: false,
    },
    {
        sourceFile: 'trading.html',
        path: '/company/trading',
        routeGroup: RouteGroup.COMPANY,
        title: 'Trading',
        componentName: 'TradingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'straightforward-pricing.html',
        path: '/company/pricing',
        routeGroup: RouteGroup.COMPANY,
        title: 'Straightforward Pricing',
        componentName: 'PricingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'security-protection.html',
        path: '/company/security',
        routeGroup: RouteGroup.COMPANY,
        title: 'Security & Protection',
        componentName: 'SecurityPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fdic-sipc-coverage.html',
        path: '/company/fdic-sipc',
        routeGroup: RouteGroup.COMPANY,
        title: 'FDIC & SIPC Coverage',
        componentName: 'FdicSipcPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'why-fidelity.html',
        path: '/company/why-fidelity',
        routeGroup: RouteGroup.COMPANY,
        title: 'Why Fidelity',
        componentName: 'WhyFidelityPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fidelity-locations.html',
        path: '/company/locations',
        routeGroup: RouteGroup.COMPANY,
        title: 'Fidelity Locations',
        componentName: 'LocationsPage',
        requiresAuth: false,
    },

    // ==================== SUPPORT ROUTES ====================
    {
        sourceFile: 'customer-service.html',
        path: '/support/customer-service',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Customer Service',
        componentName: 'CustomerServicePage',
        requiresAuth: false,
    },
    {
        sourceFile: 'help-center.html',
        path: '/support/help-center',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Help Center',
        componentName: 'HelpCenterPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'fidelity-assistant.html',
        path: '/support/fidelity-assistant',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Fidelity Assistant',
        componentName: 'FidelityAssistantPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'contact-us.html',
        path: '/support/contact',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Contact Us',
        componentName: 'ContactPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'profile.html',
        path: '/support/profile',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Profile',
        componentName: 'ProfilePage',
        requiresAuth: true,
    },
    {
        sourceFile: 'security.html',
        path: '/support/security',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Security',
        componentName: 'SecurityPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'disclosures.html',
        path: '/support/disclosures',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Disclosures',
        componentName: 'DisclosuresPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'privacy.html',
        path: '/support/privacy',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Privacy',
        componentName: 'PrivacyPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'pricing.html',
        path: '/support/pricing',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Pricing',
        componentName: 'PricingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'start-trading.html',
        path: '/support/start-trading',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Start Trading',
        componentName: 'StartTradingPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'see-how-to-invest.html',
        path: '/support/how-to-invest',
        routeGroup: RouteGroup.SUPPORT,
        title: 'See How to Invest',
        componentName: 'HowToInvestPage',
        requiresAuth: false,
    },
    {
        sourceFile: 'learn-more.html',
        path: '/support/learn-more',
        routeGroup: RouteGroup.SUPPORT,
        title: 'Learn More',
        componentName: 'LearnMorePage',
        requiresAuth: false,
    },
];

/**
 * Lookup table for quick route access by path.
 */
export const ROUTE_BY_PATH: Record<string, PageRoute> = ROUTES.reduce(
    (acc, route) => {
        acc[route.path] = route;
        return acc;
    },
    {} as Record<string, PageRoute>
);

/**
 * Lookup table for quick route access by source file.
 */
export const ROUTE_BY_SOURCE: Record<string, PageRoute> = ROUTES.reduce(
    (acc, route) => {
        acc[route.sourceFile] = route;
        return acc;
    },
    {} as Record<string, PageRoute>
);

/**
 * Get all routes for a specific route group.
 */
export function getRoutesByGroup(group: RouteGroup): PageRoute[] {
    return ROUTES.filter((route) => route.routeGroup === group);
}

/**
 * Get route by path.
 */
export function getRouteByPath(path: string): PageRoute | undefined {
    return ROUTE_BY_PATH[path];
}

/**
 * Get route by source file name.
 */
export function getRouteBySource(sourceFile: string): PageRoute | undefined {
    return ROUTE_BY_SOURCE[sourceFile];
}

/**
 * Check if a route requires authentication.
 */
export function routeRequiresAuth(path: string): boolean {
    const route = getRouteByPath(path);
    return route?.requiresAuth ?? false;
}
