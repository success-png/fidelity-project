/**
 * Navigation-related TypeScript types for the Fidelity Next.js application.
 * These types define the structure for navigation configuration and menu items.
 */

/**
 * Represents the type of navigation item - main nav, dropdown, or submenu.
 */
export type NavItemType = 'link' | 'dropdown' | 'submenu' | 'mega';

/**
 * Represents access level for navigation items.
 * Public items are accessible to all users.
 * Protected items require authentication.
 */
export type AccessLevel = 'public' | 'protected' | 'authenticated';

/**
 * Interface for a single navigation link.
 */
export interface NavLink {
    /** Unique identifier for the link */
    id: string;
    /** Display text for the link */
    label: string;
    /** URL path for the link */
    href: string;
    /** Access level requirement */
    accessLevel: AccessLevel;
    /** Icon class name (Font Awesome or similar) */
    icon?: string;
    /** Whether this link is currently active */
    isActive?: boolean;
    /** ARIA label for accessibility */
    ariaLabel?: string;
}

/**
 * Interface for a dropdown menu item.
 */
export interface NavDropdown {
    /** Unique identifier for the dropdown */
    id: string;
    /** Type of dropdown (standard, mega, etc.) */
    type: NavItemType;
    /** Display label for the dropdown trigger */
    label: string;
    /** Access level requirement */
    accessLevel: AccessLevel;
    /** Array of nav links in this dropdown */
    links: NavLink[];
    /** Optional icon class */
    icon?: string;
    /** ARIA label for accessibility */
    ariaLabel?: string;
}

/**
 * Interface for a submenu within a dropdown.
 */
export interface NavSubmenu {
    /** Unique identifier for the submenu */
    id: string;
    /** Title displayed for the submenu section */
    title: string;
    /** Array of nav links in this submenu */
    links: NavLink[];
}

/**
 * Interface for a complete navigation section.
 */
export interface NavSection {
    /** Unique identifier for the section */
    id: string;
    /** Display label for the section */
    label: string;
    /** Type of navigation item */
    type: NavItemType;
    /** Access level requirement */
    accessLevel: AccessLevel;
    /** URL for link-type items */
    href?: string;
    /** Array of links for dropdown items */
    links?: NavLink[];
    /** Array of submenus for mega menus */
    submenus?: NavSubmenu[];
    /** Optional icon class */
    icon?: string;
    /** Whether this section is expanded */
    isExpanded?: boolean;
    /** ARIA label for accessibility */
    ariaLabel?: string;
}

/**
 * Interface for the top-level navigation configuration.
 */
export interface NavigationConfig {
    /** Main navigation sections */
    mainNav: NavSection[];
    /** Secondary navigation (header links) */
    secondaryNav: NavLink[];
    /** Footer navigation sections */
    footerNav: FooterNavSection[];
}

/**
 * Interface for a footer navigation section.
 */
export interface FooterNavSection {
    /** Unique identifier */
    id: string;
    /** Section title */
    title: string;
    /** Array of links in this section */
    links: NavLink[];
}

/**
 * Interface for the user context in navigation.
 */
export interface NavUserContext {
    /** Whether the user is authenticated */
    isAuthenticated: boolean;
    /** User's first name for personalization */
    firstName?: string;
    /** Account type for conditional rendering */
    accountType?: 'individual' | 'institutional' | 'advisor';
}

/**
 * Navigation event handlers.
 */
export interface NavigationEventHandlers {
    /** Called when a nav item is clicked */
    onNavItemClick?: (item: NavLink) => void;
    /** Called when a dropdown is opened */
    onDropdownOpen?: (dropdownId: string) => void;
    /** Called when a dropdown is closed */
    onDropdownClose?: (dropdownId: string) => void;
    /** Called when search is submitted */
    onSearchSubmit?: (query: string) => void;
}

/**
 * Utility type for extracting route parameters.
 */
export type RouteParams<T extends string> = {
    [K in T]: string;
};

/**
 * Type for page metadata.
 */
export interface PageMetadata {
    title: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
    canonicalUrl?: string;
}
