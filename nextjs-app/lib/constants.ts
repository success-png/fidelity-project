/**
 * Application constants for the Fidelity Next.js application.
 * Contains all static configuration values used throughout the app.
 */

/**
 * Application branding constants.
 */
export const APP_BRAND = {
    /** Full company name */
    name: 'Fidelity Investments',
    /** Short display name */
    shortName: 'Fidelity',
    /** Brand tagline */
    tagline: 'Helping you enjoy more of what you love',
    /** Brand description */
    description:
        'Fidelity Investments offers financial planning and investment services for individuals, businesses, and institutions.',
    /** Official website URL */
    website: 'https://www.fidelity.com',
    /** Brand logo URL */
    logoUrl: 'https://www.fidelity.com/static/fidelity-rebrand/fidelity-2.0/images/fidelity-logo.svg',
    /** Favicon path */
    favicon: '/favicon.ico',
} as const;

/**
 * Route group path mappings.
 */
export const ROUTE_GROUPS = {
    auth: { path: '/auth', name: 'Authentication' },
    accounts: { path: '/accounts', name: 'Accounts & Trade' },
    planning: { path: '/planning', name: 'Planning & Advice' },
    research: { path: '/research', name: 'News & Research' },
    products: { path: '/products', name: 'Products & Services' },
    company: { path: '/company', name: 'Company' },
    support: { path: '/support', name: 'Customer Support' },
} as const;

/**
 * HTTP status codes.
 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * API configuration.
 */
export const API_CONFIG = {
    /** Base URL for API requests */
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    /** API version prefix */
    apiVersion: 'v1',
    /** Request timeout in milliseconds */
    timeout: 30000,
    /** Maximum retry attempts for failed requests */
    maxRetries: 3,
} as const;

/**
 * Authentication configuration.
 */
export const AUTH_CONFIG = {
    /** Token refresh interval in milliseconds (30 minutes) */
    tokenRefreshInterval: 30 * 60 * 1000,
    /** Session timeout in milliseconds (1 hour) */
    sessionTimeout: 60 * 60 * 1000,
    /** Maximum login attempts before lockout */
    maxLoginAttempts: 5,
    /** Lockout duration in milliseconds (15 minutes) */
    lockoutDuration: 15 * 60 * 1000,
    /** Password minimum length */
    passwordMinLength: 8,
    /** Password requires uppercase */
    passwordRequireUppercase: true,
    /** Password requires lowercase */
    passwordRequireLowercase: true,
    /** Password requires number */
    passwordRequireNumber: true,
    /** Password requires special character */
    passwordRequireSpecial: true,
} as const;

/**
 * Pagination defaults.
 */
export const PAGINATION = {
    /** Default page size */
    defaultPageSize: 20,
    /** Maximum page size allowed */
    maxPageSize: 100,
    /** Page size options for user selection */
    pageSizeOptions: [10, 20, 50, 100],
} as const;

/**
 * Date format constants.
 */
export const DATE_FORMATS = {
    /** Display format for dates (e.g., January 1, 2024) */
    display: 'MMMM d, yyyy',
    /** Short display format (e.g., Jan 1, 2024) */
    short: 'MMM d, yyyy',
    /** Time format (e.g., 12:00 PM) */
    time: 'h:mm a',
    /** Full datetime format */
    full: 'MMMM d, yyyy h:mm a',
    /** ISO format for APIs */
    iso: "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
    /** Date picker format */
    picker: 'yyyy-MM-dd',
} as const;

/**
 * Currency configuration.
 */
export const CURRENCY = {
    /** Default currency code */
    code: 'USD',
    /** Currency symbol */
    symbol: '$',
    /** Locale for formatting */
    locale: 'en-US',
    /** Number of decimal places */
    decimals: 2,
} as const;

/**
 * Feature flags for progressive rollout.
 */
export const FEATURE_FLAGS = {
    /** Enable new portfolio view */
    newPortfolioView: true,
    /** Enable crypto trading */
    cryptoTrading: true,
    /** Enable robo advisor features */
    roboAdvisor: true,
    /** Enable social features */
    socialFeatures: false,
    /** Enable beta features */
    betaFeatures: false,
    /** Enable dark mode */
    darkMode: false,
} as const;

/**
 * Accessibility configuration.
 */
export const ACCESSIBILITY = {
    /** Minimum contrast ratio for text */
    minContrastRatio: 4.5,
    /** Focus indicator size in pixels */
    focusIndicatorSize: 2,
    /** Minimum tap target size in pixels */
    minTapTargetSize: 44,
    /** Reduced motion preference key */
    reducedMotionKey: 'prefers-reduced-motion',
} as const;

/**
 * Analytics configuration.
 */
export const ANALYTICS = {
    /** Google Analytics measurement ID */
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
    /** Google Tag Manager container ID */
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
    /** Facebook Pixel ID */
    fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    /** Enable event tracking */
    enableTracking: true,
} as const;

/**
 * Error messages used throughout the application.
 */
export const ERROR_MESSAGES = {
    /** Generic error message */
    generic: 'Something went wrong. Please try again later.',
    /** Network error */
    network: 'Unable to connect. Please check your internet connection.',
    /** Session expired */
    sessionExpired: 'Your session has expired. Please log in again.',
    /** Unauthorized access */
    unauthorized: 'You are not authorized to access this resource.',
    /** Not found */
    notFound: 'The requested resource was not found.',
    /** Validation error prefix */
    validation: 'Please check the following:',
    /** Rate limit exceeded */
    rateLimit: 'Too many requests. Please try again later.',
} as const;

/**
 * Success messages used throughout the application.
 */
export const SUCCESS_MESSAGES = {
    /** Generic success */
    generic: 'Operation completed successfully.',
    /** Account created */
    accountCreated: 'Your account has been created successfully.',
    /** Changes saved */
    changesSaved: 'Your changes have been saved.',
    /** Email sent */
    emailSent: 'Email has been sent successfully.',
    /** Password reset */
    passwordReset: 'Password reset instructions have been sent to your email.',
} as const;

/**
 * Regex patterns for validation.
 */
export const REGEX_PATTERNS = {
    /** Email validation */
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    /** Phone number (US format) */
    phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    /** SSN format */
    ssn: /^\d{3}-?\d{2}-?\d{4}$/,
    /** Account number */
    accountNumber: /^[0-9]{4,17}$/,
    /** Routing number */
    routingNumber: /^[0-9]{9}$/,
    /** Ticker symbol */
    ticker: /^[A-Z]{1,5}$/,
    /** ZIP code (US) */
    zipCode: /^\d{5}(-\d{4})?$/,
    /** Strong password */
    strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;

/**
 * Cookie names used by the application.
 */
export const COOKIES = {
    /** Authentication token */
    authToken: 'fidelity_auth_token',
    /** Refresh token */
    refreshToken: 'fidelity_refresh_token',
    /** Session ID */
    sessionId: 'fidelity_session_id',
    /** User preferences */
    preferences: 'fidelity_preferences',
    /** Analytics consent */
    analyticsConsent: 'fidelity_analytics_consent',
    /** Cookie consent */
    cookieConsent: 'fidelity_cookie_consent',
} as const;

/**
 * Local storage keys.
 */
export const STORAGE_KEYS = {
    /** User profile */
    userProfile: 'fidelity_user_profile',
    /** Watchlist */
    watchlist: 'fidelity_watchlist',
    /** Recent searches */
    recentSearches: 'fidelity_recent_searches',
    /** User preferences */
    preferences: 'fidelity_preferences',
    /** Cart items */
    cart: 'fidelity_cart',
} as const;

/**
 * Asset URL configurations.
 */
export const ASSETS = {
    /** Images CDN URL */
    imagesCdn: 'https://www.fidelity.com/static/fidelity-rebrand',
    /** Default OG image */
    defaultOgImage: 'https://www.fidelity.com/static/fidelity-rebrand/og-default.jpg',
} as const;

/**
 * Social media links.
 */
export const SOCIAL_LINKS = {
    /** Facebook page */
    facebook: 'https://www.facebook.com/fidelity',
    /** Twitter/X account */
    twitter: 'https://twitter.com/fidelity',
    /** LinkedIn page */
    linkedin: 'https://www.linkedin.com/company/fidelity-investments',
    /** YouTube channel */
    youtube: 'https://www.youtube.com/fidelity',
    /** Instagram account */
    instagram: 'https://www.instagram.com/fidelity/',
} as const;

/**
 * Contact information.
 */
export const CONTACT_INFO = {
    /** Customer service phone */
    phone: '1-800-FIDELITY (1-800-343-3548)',
    /** International phone */
    internationalPhone: '+1 212-318-2000',
    /** Customer service hours (Eastern Time) */
    hours: '7 a.m. - 8 p.m. ET, Mon-Fri',
    /** Automated phone service */
    automatedService: '24/7',
    /** Support email */
    email: 'fidelity_email@fidelity.com',
} as const;

/**
 * Application version information.
 */
export const APP_VERSION = {
    /** Current version */
    current: process.env.npm_package_version || '1.0.0',
    /** Build number */
    build: process.env.BUILD_NUMBER || '1',
    /** Environment */
    environment: process.env.NODE_ENV || 'development',
    /** Is production */
    isProduction: process.env.NODE_ENV === 'production',
    /** Is development */
    isDevelopment: process.env.NODE_ENV === 'development',
} as const;

/**
 * Export all constants as a single object for convenience.
 */
export const CONSTANTS = {
    APP_BRAND,
    ROUTE_GROUPS,
    HTTP_STATUS,
    API_CONFIG,
    AUTH_CONFIG,
    PAGINATION,
    DATE_FORMATS,
    CURRENCY,
    FEATURE_FLAGS,
    ACCESSIBILITY,
    ANALYTICS,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    REGEX_PATTERNS,
    COOKIES,
    STORAGE_KEYS,
    ASSETS,
    SOCIAL_LINKS,
    CONTACT_INFO,
    APP_VERSION,
} as const;
