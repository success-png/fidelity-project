/**
 * MobileMenu Component
 * Renders a mobile-friendly navigation menu
 */

'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import type { NavSection } from '@/types/navigation';
import styles from './Navigation.module.css';

export interface MobileMenuProps {
    /** Navigation sections to display */
    sections: NavSection[];
    /** Whether the menu is open */
    isOpen: boolean;
    /** Callback when menu state changes */
    onToggle: () => void;
}

/**
 * Renders a mobile dropdown link item
 */
function MobileDropdownLink({
    link
}: {
    link: { id: string; label: string; href: string; icon?: string; accessLevel?: string }
}): React.ReactElement {
    const hasLockIcon = link.icon === 'fas fa-lock';

    return (
        <li className={styles.mobileMenuDropdownItem}>
            <Link href={link.href} className={styles.mobileMenuLink}>
                <span className={styles.dropdownText}>{link.label}</span>
                {hasLockIcon && (
                    <span className={styles.dropdownLock}>
                        <i className="fas fa-lock" aria-hidden="true" />
                    </span>
                )}
            </Link>
        </li>
    );
}

/**
 * MobileMenu Component
 * Displays a collapsible mobile navigation menu
 */
export function MobileMenu({
    sections,
    isOpen,
    onToggle
}: MobileMenuProps): React.ReactElement {
    const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

    const toggleSubmenu = useCallback((sectionId: string) => {
        setOpenSubmenus((prev) => {
            const next = new Set(prev);
            if (next.has(sectionId)) {
                next.delete(sectionId);
            } else {
                next.add(sectionId);
            }
            return next;
        });
    }, []);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent, sectionId: string) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleSubmenu(sectionId);
            }
        },
        [toggleSubmenu]
    );

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                type="button"
                className={`${styles.navToggle} ${isOpen ? styles.navToggleActive : ''
                    }`}
                onClick={onToggle}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <span className={styles.navToggleSpan} />
                <span className={styles.navToggleSpan} />
                <span className={styles.navToggleSpan} />
            </button>

            {/* Mobile Menu Panel */}
            <div
                className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''
                    }`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <ul className={styles.mobileMenuList}>
                    {sections.map((section) => {
                        const hasDropdown =
                            (section.links && section.links.length > 0) ||
                            (section.submenus && section.submenus.length > 0);
                        const isSubmenuOpen = openSubmenus.has(section.id);

                        return (
                            <li
                                key={section.id}
                                className={styles.mobileMenuItem}
                            >
                                {hasDropdown ? (
                                    <>
                                        <button
                                            type="button"
                                            className={styles.mobileMenuTrigger}
                                            onClick={() =>
                                                toggleSubmenu(section.id)
                                            }
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, section.id)
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={isSubmenuOpen}
                                            aria-label={section.ariaLabel}
                                        >
                                            {section.label}
                                            <span
                                                className={
                                                    styles.navTriggerIcon
                                                }
                                            >
                                                <i
                                                    className={`fas fa-chevron-${isSubmenuOpen
                                                            ? 'up'
                                                            : 'down'
                                                        }`}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>
                                        <div
                                            className={`${styles.mobileMenuDropdown} ${isSubmenuOpen
                                                    ? styles.mobileMenuDropdownOpen
                                                    : ''
                                                }`}
                                        >
                                            {section.links && (
                                                <ul
                                                    className={
                                                        styles.mobileMenuDropdownList
                                                    }
                                                >
                                                    {section.links.map(
                                                        (link) => (
                                                            <MobileDropdownLink
                                                                key={link.id}
                                                                link={link}
                                                            />
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={section.href ?? '#'}
                                        className={styles.mobileMenuTrigger}
                                        aria-label={section.ariaLabel}
                                    >
                                        {section.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
