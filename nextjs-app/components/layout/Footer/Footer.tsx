/**
 * Footer Component
 * Main footer with navigation links, legal information, social media, and copyright
 * Uses legacy CSS classes for exact UI replication
 */

import React from 'react';
import Link from 'next/link';

export interface FooterProps {
    /** Optional additional CSS class */
    className?: string;
}

export function Footer({ className = '' }: FooterProps): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`main-footer ${className}`}>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Fidelity</h4>
                        <ul>
                            <li><Link href="/company/why-fidelity">Why Fidelity</Link></li>
                            <li><Link href="/company/pricing">Pricing</Link></li>
                            <li><Link href="/research/viewpoints">Viewpoints</Link></li>
                            <li><Link href="/research/research">Research</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><Link href="/support/contact">Contact Us</Link></li>
                            <li><Link href="/support/help-center">Help Center</Link></li>
                            <li><Link href="/company/locations">Fidelity Locations</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/support/privacy">Privacy</Link></li>
                            <li><Link href="/company/security">Security</Link></li>
                            <li><Link href="/support/disclosures">Disclosures</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Account Types</h4>
                        <ul>
                            <li><Link href="/accounts/retirement">Retirement</Link></li>
                            <li><Link href="/accounts/brokerage">Brokerage</Link></li>
                            <li><Link href="/accounts/health-savings">Health Savings</Link></li>
                            <li><Link href="/accounts/small-business">Small Business</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Tools & Calculators</h4>
                        <ul>
                            <li><Link href="/tools/retirement-planner">Retirement Planner</Link></li>
                            <li><Link href="/tools/portfolio-analysis">Portfolio Analysis</Link></li>
                            <li><Link href="/tools/college-savings">College Savings</Link></li>
                            <li><Link href="/tools/tax-calculator">Tax Calculator</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} FMR LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}