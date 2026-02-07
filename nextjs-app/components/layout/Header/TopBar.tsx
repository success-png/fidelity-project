/**
 * TopBar Component
 * Green top bar with brand logo, utility links, and CTA buttons
 */

import React from 'react';
import Link from 'next/link';
import { SECONDARY_NAV } from '@/config/navigation';
import { Container } from '@/components/ui/Container/Container';
import styles from './Header.module.css';

/**
 * Filter utility links (non-CTA links)
 */
function isUtilityLink(id: string): boolean {
    return id !== 'open-account' && id !== 'login';
}

/**
 * Filter CTA buttons
 */
function isCtaButton(id: string): boolean {
    return id === 'open-account' || id === 'login';
}

/**
 * Check if a link is for authenticated users only
 */
function isAuthenticatedOnly(id: string): boolean {
    return id === 'profile';
}

export interface TopBarProps {
    /** Optional additional CSS class */
    className?: string;
    /** Whether user is authenticated */
    isAuthenticated?: boolean;
}

export function TopBar({ className = '', isAuthenticated = false }: TopBarProps): React.ReactElement {
    const utilityLinks = SECONDARY_NAV.filter((link) => isUtilityLink(link.id));
    const ctaButtons = SECONDARY_NAV.filter((link) => isCtaButton(link.id));
    const authenticatedLink = SECONDARY_NAV.find((link) => link.id === 'profile');

    return (
        <div className={`${styles.greenBar} ${className}`}>
            <Container className={styles.greenBarInner}>
                {/* Brand Logo */}
                <Link href="/" className={styles.brand} aria-label="Fidelity Investments - Home">
                    <svg
                        className={styles.brandLogo}
                        viewBox="0 0 120 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {/* Fidelity Logo SVG - White version */}
                        <path
                            d="M10.5 0H0V28H10.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M24.5 0H14V28H24.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M38.5 0H28V28H38.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M52.5 0H42V28H52.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M66.5 0H56V28H66.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M80.5 0H70V28H80.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M94.5 0H84V28H94.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M108.5 0H98V28H108.5V0Z"
                            fill="white"
                        />
                        <path
                            d="M120 14H112V22H120V14Z"
                            fill="white"
                        />
                        <path
                            d="M120 6H112V10H120V6Z"
                            fill="white"
                        />
                    </svg>
                </Link>

                {/* Utility Links and CTA Buttons */}
                <div className={styles.links}>
                    {/* Utility Links (Customer Service, Fidelity Assistant, etc.) */}
                    {utilityLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={styles.link}
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Profile link for authenticated users */}
                    {isAuthenticated && authenticatedLink && (
                        <Link
                            href={authenticatedLink.href}
                            className={styles.link}
                            aria-label={authenticatedLink.ariaLabel}
                        >
                            {authenticatedLink.label}
                        </Link>
                    )}

                    {/* CTA Buttons */}
                    {ctaButtons.map((button) => {
                        const isOpenAccount = button.id === 'open-account';
                        const buttonStyles = isOpenAccount ? styles.buttonLight : styles.buttonOutline;

                        return (
                            <Link
                                key={button.id}
                                href={button.href}
                                className={`${styles.button} ${buttonStyles}`}
                                aria-label={button.ariaLabel}
                            >
                                {button.label}
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
