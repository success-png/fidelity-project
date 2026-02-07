/**
 * Navigation Component
 * Main navigation bar with dropdown menus and mobile menu support
 */

'use client';

import React, { useState, useCallback } from 'react';
import { MAIN_NAV } from '@/config/navigation';
import type { NavSection } from '@/types/navigation';
import { NavItem } from './NavItem';
import { MobileMenu } from './MobileMenu';
import styles from './Navigation.module.css';

export interface NavigationProps {
    /** Optional additional CSS class */
    className?: string;
    /** Navigation sections to display (defaults to MAIN_NAV) */
    sections?: NavSection[];
    /** Whether to show the search input */
    showSearch?: boolean;
}

/**
 * Search Component
 * Renders a search input field
 */
function SearchInput(): React.ReactElement {
    return (
        <div className={styles.search}>
            <span className={styles.searchIcon}>
                <i className="fas fa-search" aria-hidden="true" />
            </span>
            <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                aria-label="Search Fidelity"
            />
        </div>
    );
}

/**
 * Navigation Component
 * Main navigation bar with dropdown menus and mobile responsive design
 */
export function Navigation({
    className = '',
    sections = MAIN_NAV,
    showSearch = true
}: NavigationProps): React.ReactElement {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <nav
            className={`${styles.nav} ${className}`}
            aria-label="Main navigation"
        >
            {/* Desktop Navigation Links */}
            <ul className={styles.navList}>
                {sections.map((section) => (
                    <NavItem key={section.id} section={section} />
                ))}
            </ul>

            {/* Right Section: Search */}
            <div className={styles.navRight}>
                {showSearch && <SearchInput />}

                {/* Mobile Menu Toggle & Panel */}
                <MobileMenu
                    sections={sections}
                    isOpen={isMobileMenuOpen}
                    onToggle={toggleMobileMenu}
                />
            </div>
        </nav>
    );
}
