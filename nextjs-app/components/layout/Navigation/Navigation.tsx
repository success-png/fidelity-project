/**
 * Navigation Component
 * Main navigation bar with dropdown menus and mobile responsive design
 * Uses legacy CSS classes for exact UI replication
 */

'use client';

import React, { useState, useCallback } from 'react';
import { MAIN_NAV } from '@/config/navigation';
import type { NavSection } from '@/types/navigation';
import { NavItem } from './NavItem';
import { MobileMenu } from './MobileMenu';

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
        <div className="search">
            <i className="fas fa-search search-icon" aria-hidden="true" />
            <input
                type="search"
                className="search-input"
                placeholder="How can we help?"
                aria-label="Search"
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

    return (
        <>
            <nav
                className={`nav-links ${className}`}
                id="mainNav"
                aria-label="Primary"
            >
                {sections.map((section) => (
                    <NavItem key={section.id} section={section} />
                ))}
            </nav>

            <div className="nav-right">
                {showSearch && <SearchInput />}

                <MobileMenu
                    sections={sections}
                    isOpen={isMobileMenuOpen}
                    onToggle={toggleMobileMenu}
                />
            </div>
        </>
    );
}