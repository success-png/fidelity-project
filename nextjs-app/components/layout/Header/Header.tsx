/**
 * Header Component
 * Main header with green top bar and white navigation bar
 * Uses legacy CSS classes for exact UI replication
 */
'use client';

import React, { useState, useEffect } from 'react';
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile/tablet view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <header className={`site-header ${className}`}>
            {/* Green Top Bar */}
            <TopBar 
                isAuthenticated={isAuthenticated} 
                isMobileMenuOpen={isMobileMenuOpen}
                onToggleMobileMenu={toggleMobileMenu}
            />

            {/* White Navigation Bar - Hidden on mobile/tablet */}
            {showNavigation && !isMobile && (
                <div className="header-white">
                    <div className="container header-white-inner">
                        <Navigation />
                    </div>
                </div>
            )}

            {/* Mobile Navigation Menu - Only shown on mobile/tablet */}
            {isMobile && (
                <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <Navigation />
                </div>
            )}
        </header>
    );
}