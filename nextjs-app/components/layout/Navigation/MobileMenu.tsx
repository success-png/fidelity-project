/**
 * MobileMenu Component
 * Renders a mobile-friendly navigation menu toggle
 * Uses legacy CSS classes for exact UI replication
 */

'use client';

import React from 'react';
import type { NavSection } from '@/types/navigation';

export interface MobileMenuProps {
    /** Navigation sections to display */
    sections: NavSection[];
    /** Whether the menu is open */
    isOpen: boolean;
    /** Callback when menu state changes */
    onToggle: () => void;
}

/**
 * MobileMenu Component
 * The mobile menu logic is largely handled by CSS media queries on the main .nav-links
 * This component primarily renders the toggle button and manages the open state class
 */
export function MobileMenu({
    isOpen,
    onToggle
}: MobileMenuProps): React.ReactElement {
    
    // Effect to add/remove 'is-open' class to nav-links when state changes
    // This bridges the React state with the legacy CSS class-based toggle
    React.useEffect(() => {
        const navLinks = document.getElementById('mainNav');
        if (navLinks) {
            if (isOpen) {
                navLinks.classList.add('is-open');
            } else {
                navLinks.classList.remove('is-open');
            }
        }
    }, [isOpen]);

    return (
        <button 
            className="nav-toggle" 
            type="button" 
            aria-label="Toggle menu" 
            aria-controls="mainNav" 
            aria-expanded={isOpen}
            onClick={onToggle}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}