/**
 * Header Component
 * Main header with green top bar and white navigation bar
 * Contains Navigation component (placeholder until implemented)
 */

import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import { TopBar } from './TopBar';
import styles from './Header.module.css';

export interface HeaderProps {
    /** Optional additional CSS class */
    className?: string;
    /** Whether user is authenticated */
    isAuthenticated?: boolean;
    /** Whether to show the navigation bar */
    showNavigation?: boolean;
}

export function Header({
    className = '',
    isAuthenticated = false,
    showNavigation = true,
}: HeaderProps): React.ReactElement {
    return (
        <header className={`${styles.header} ${className}`}>
            {/* Green Top Bar */}
            <TopBar isAuthenticated={isAuthenticated} />

            {/* White Navigation Bar - Placeholder for Navigation component */}
            {showNavigation && (
                <div className={styles.whiteBar}>
                    <Container className={styles.whiteBarInner}>
                        {/* Navigation will be rendered here in the Navigation component task */}
                        <nav aria-label="Main navigation">
                            {/* Placeholder - Navigation component will be added in separate task */}
                            <div style={{ width: '100%' }}>
                                {/* Navigation component placeholder */}
                            </div>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
}
