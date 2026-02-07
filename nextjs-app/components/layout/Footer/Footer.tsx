/**
 * Footer Component
 * Main footer with navigation links, legal information, social media, and copyright
 */

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import styles from './Footer.module.css';

export interface FooterLink {
    /** Display label for the link */
    label: string;
    /** URL path for the link */
    href: string;
    /** Whether this link opens in a new tab */
    external?: boolean;
}

export interface FooterSection {
    /** Section title */
    title: string;
    /** Array of links in this section */
    links: FooterLink[];
}

export interface FooterProps {
    /** Optional additional CSS class */
    className?: string;
}

/**
 * Footer navigation sections configuration
 */
const footerSections: FooterSection[] = [
    {
        title: 'Customer Service',
        links: [
            { label: 'Help Center', href: '/support/help-center' },
            { label: 'Contact Us', href: '/support/contact' },
            { label: 'Customer Service', href: '/support/customer-service' },
            { label: 'Security', href: '/support/security' },
        ],
    },
    {
        title: 'Account Services',
        links: [
            { label: 'Open an Account', href: '/auth/open-account' },
            { label: 'Log In', href: '/auth/login' },
            { label: 'Pricing', href: '/support/pricing' },
            { label: 'Disclosures', href: '/support/disclosures' },
        ],
    },
    {
        title: 'Planning & Advice',
        links: [
            { label: 'Retirement', href: '/planning/retirement' },
            { label: 'Investing', href: '/products/investing-trading' },
            { label: 'Wealth Management', href: '/planning/wealth-management' },
            { label: 'Find an Advisor', href: '/planning/find-advisor' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Fidelity', href: '/company/about' },
            { label: 'Careers', href: '/company/careers' },
            { label: 'Why Fidelity', href: '/company/why-fidelity' },
            { label: 'Locations', href: '/company/locations' },
        ],
    },
];

/**
 * Social media links configuration
 */
const socialLinks: FooterLink[] = [
    { label: 'Facebook', href: 'https://www.facebook.com/fidelity', external: true },
    { label: 'Twitter', href: 'https://www.twitter.com/fidelity', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fidelity-investments', external: true },
    { label: 'YouTube', href: 'https://www.youtube.com/fidelity', external: true },
    { label: 'Instagram', href: 'https://www.instagram.com/fidelityinvestments', external: true },
];

/**
 * Legal links configuration
 */
const legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/support/privacy' },
    { label: 'Terms of Use', href: '/support/disclosures' },
    { label: 'Accessibility', href: '/support/customer-service' },
    { label: 'SIPC Coverage', href: '/company/fdic-sipc' },
    { label: 'FDIC Coverage', href: '/company/fdic-sipc' },
];

export function Footer({ className = '' }: FooterProps): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.footer} ${className}`}>
            {/* Main Footer Content */}
            <div className={styles.main}>
                <Container>
                    <div className={styles.grid}>
                        {/* Navigation Sections */}
                        {footerSections.map((section) => (
                            <nav key={section.title} className={styles.section} aria-label={section.title}>
                                <h3 className={styles.sectionTitle}>{section.title}</h3>
                                <ul className={styles.linkList}>
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            {link.external ? (
                                                <a
                                                    href={link.href}
                                                    className={styles.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <Link href={link.href} className={styles.link}>
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>

                    {/* Social Media Section */}
                    <div className={styles.socialSection}>
                        <h3 className={styles.socialTitle}>Follow Us</h3>
                        <ul className={styles.socialList}>
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </div>

            {/* Legal Section */}
            <div className={styles.legal}>
                <Container>
                    <div className={styles.legalContent}>
                        <ul className={styles.legalLinks}>
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.legalLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <Container>
                    <div className={styles.copyrightContent}>
                        <p className={styles.copyrightText}>
                            &copy; {currentYear} FMR LLC. All rights reserved.
                        </p>
                        <p className={styles.copyrightDisclaimer}>
                            Fidelity, Fidelity Investments, and the Pyramid Design are registered trademarks of FMR LLC.
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
