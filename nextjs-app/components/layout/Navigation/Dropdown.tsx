/**
 * Dropdown Component
 * Renders a dropdown menu for navigation items
 */

'use client';

import React from 'react';
import Link from 'next/link';
import type { NavLink, NavSubmenu } from '@/types/navigation';
import styles from './Navigation.module.css';

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

    return (
        <li className={styles.dropdownItem}>
            <Link
                href={link.href}
                className={styles.dropdownLink}
                aria-label={link.ariaLabel}
            >
                <span className={styles.dropdownText}>{link.label}</span>
                {isLocked && (
                    <span className={styles.dropdownLock}>
                        <i className="fas fa-lock" aria-hidden="true" />
                    </span>
                )}
            </Link>
        </li>
    );
}

/**
 * Renders a submenu section
 */
function DropdownSubmenuSection({
    submenu
}: {
    submenu: NavSubmenu
}): React.ReactElement {
    return (
        <div className={styles.dropdownSection}>
            <h4 className={styles.dropdownSubtitle}>{submenu.title}</h4>
            <ul className={styles.dropdownList}>
                {submenu.links.map((link) => (
                    <DropdownLink key={link.id} link={link} />
                ))}
            </ul>
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
    className = ''
}: DropdownProps): React.ReactElement {
    const dropdownClasses = `${styles.dropdown} ${className}`;

    return (
        <div className={dropdownClasses} role="menu">
            {submenus && submenus.length > 0 ? (
                <div className={styles.dropdownContent}>
                    {submenus.map((submenu) => (
                        <DropdownSubmenuSection
                            key={submenu.id}
                            submenu={submenu}
                        />
                    ))}
                </div>
            ) : (
                <ul className={styles.dropdownList}>
                    {links.map((link) => (
                        <DropdownLink key={link.id} link={link} />
                    ))}
                </ul>
            )}
        </div>
    );
}
