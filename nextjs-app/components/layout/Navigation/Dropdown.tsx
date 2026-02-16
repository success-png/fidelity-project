/**
 * Dropdown Component
 * Renders a dropdown menu for navigation items
 * Uses legacy CSS classes for exact UI replication
 */

'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import type { NavLink, NavSubmenu } from '@/types/navigation';

export interface DropdownProps {
    /** Array of links to display in the dropdown */
    links: NavLink[];
    /** Optional submenus for mega dropdowns */
    submenus?: NavSubmenu[];
    /** Additional CSS class for the dropdown */
    className?: string;
}

/**
 * Renders a single dropdown link item
 */
function DropdownLink({ link }: { link: NavLink }): React.ReactElement {
    const hasLockIcon = link.icon === 'fas fa-lock';
    const isLocked = hasLockIcon || link.accessLevel === 'authenticated';
    const linkClass = isLocked ? 'dropdown-link dropdown-link--locked' : 'dropdown-link';

    return (
        <Link
            href={link.href}
            className={linkClass}
            aria-label={link.ariaLabel}
            role="menuitem"
        >
            <span className="dropdown-text">{link.label}</span>
            {isLocked && (
                <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
            )}
        </Link>
    );
}

/**
 * Renders a submenu section with nested dropdown
 */
function DropdownSubmenuItem({ submenu }: { submenu: NavSubmenu }): React.ReactElement {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = useCallback(() => {
        setIsSubmenuOpen((prev) => !prev);
    }, []);

    // Check if this is a nested submenu structure (like in Planning & Advice -> Robo Investing)
    // or a simple group of links
    
    // For the specific "Robo Investing Plus Advice" submenu structure in legacy code:
    return (
        <div className={`dropdown-item dropdown-item--submenu ${isSubmenuOpen ? 'is-open' : ''}`} role="none">
            <button 
                className="dropdown-subtrigger" 
                type="button" 
                aria-expanded={isSubmenuOpen}
                onClick={toggleSubmenu}
            >
                <span className="dropdown-text">{submenu.title}</span>
                <i className="fas fa-angle-right dropdown-caret" aria-hidden="true"></i>
            </button>
            <div className="dropdown-submenu" role="menu">
                <div className="dropdown-subtitle" role="none">{submenu.title}</div>
                {submenu.links.map((link) => (
                    <DropdownLink key={link.id} link={link} />
                ))}
            </div>
        </div>
    );
}

/**
 * Dropdown Component
 * Displays a dropdown menu with navigation links
 */
export function Dropdown({
    links,
    submenus,
    className = 'dropdown'
}: DropdownProps): React.ReactElement {
    
    // Check if this is the Products dropdown which needs tabs
    const isProductsDropdown = className.includes('dropdown--products');

    return (
        <div className={className} role="menu">
            {isProductsDropdown && (
                <div className="dropdown-tabs" role="none">
                    <a className="dropdown-tab" href="/products/retirement-iras">Retirement &amp; IRAs</a>
                    <a className="dropdown-tab" href="/products/spending-saving">Spending &amp; Saving</a>
                    <a className="dropdown-tab dropdown-tab--active" href="/products/investing-trading">Investing &amp; Trading</a>
                </div>
            )}
            
            <div className="dropdown-list" role="none">
                {links.map((link) => (
                    <DropdownLink key={link.id} link={link} />
                ))}
                
                {submenus && submenus.map((submenu) => (
                    <DropdownSubmenuItem key={submenu.id} submenu={submenu} />
                ))}
            </div>
        </div>
    );
}