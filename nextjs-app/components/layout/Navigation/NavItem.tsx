/**
 * NavItem Component
 * Renders an individual navigation item with optional dropdown
 */

'use client';

import React from 'react';
import Link from 'next/link';
import type { NavSection } from '@/types/navigation';
import { Dropdown } from './Dropdown';
import styles from './Navigation.module.css';

export interface NavItemProps {
    /** Navigation section data */
    section: NavSection;
    /** Whether this is a simple link (no dropdown) */
    isSimpleLink?: boolean;
}

/**
 * NavItem Component
 * Displays a navigation item with an optional dropdown menu
 */
export function NavItem({
    section,
    isSimpleLink = false
}: NavItemProps): React.ReactElement {
    // Determine if dropdown should be wide (for certain sections)
    const isWideDropdown =
        section.id === 'planning-advice' ||
        section.id === 'products' ||
        section.id === 'why-fidelity';

    const dropdownClasses = isWideDropdown ? styles.dropdownWide : '';

    if (isSimpleLink || section.type === 'link') {
        return (
            <li className={styles.navItem}>
                <Link
                    href={section.href ?? '#'}
                    className={styles.navTrigger}
                    aria-label={section.ariaLabel}
                >
                    {section.label}
                </Link>
            </li>
        );
    }

    return (
        <li className={styles.navItem}>
            <button
                type="button"
                className={styles.navTrigger}
                aria-haspopup="true"
                aria-expanded="false"
                aria-label={section.ariaLabel}
            >
                {section.label}
                <span className={styles.navTriggerIcon}>
                    <i className="fas fa-chevron-down" aria-hidden="true" />
                </span>
            </button>
            {section.links && section.links.length > 0 && (
                <Dropdown
                    links={section.links}
                    submenus={section.submenus}
                    className={dropdownClasses}
                />
            )}
        </li>
    );
}
