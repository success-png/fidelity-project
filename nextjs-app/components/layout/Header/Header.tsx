/**
 * Header Component
 * Main header with green top bar and white navigation bar
 * Uses legacy CSS classes for exact UI replication
 */

import React from 'react';
import { TopBar } from './TopBar';
import { Navigation } from '../Navigation/Navigation';

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
        <header className={`site-header ${className}`}>
            {/* Green Top Bar */}
            <TopBar isAuthenticated={isAuthenticated} />

            {/* White Navigation Bar */}
            {showNavigation && (
                <div className="header-white">
                    <div className="container header-white-inner">
                        <Navigation />
                    </div>
                </div>
            )}
        </header>
    );
}