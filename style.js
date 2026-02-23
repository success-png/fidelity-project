document.addEventListener('DOMContentLoaded', function () {
    /* ==========================================================================
       MOBILE HAMBURGER MENU FUNCTIONALITY
       ========================================================================== */

    const mobileHamburger = document.querySelector('.mobile-hamburger');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;

    // Only run if mobile hamburger exists
    if (mobileHamburger && mobileMenuOverlay) {
        // Toggle menu on hamburger click
        mobileHamburger.addEventListener('click', function () {
            const isOpen = mobileMenuOverlay.classList.toggle('is-open');
            mobileHamburger.classList.toggle('is-active', isOpen);
            mobileHamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            // Prevent body scroll when menu is open
            if (isOpen) {
                body.classList.add('mobile-menu-open');
            } else {
                body.classList.remove('mobile-menu-open');
            }
        });

        // Close menu on close button click
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function () {
                mobileMenuOverlay.classList.remove('is-open');
                mobileHamburger.classList.remove('is-active');
                mobileHamburger.setAttribute('aria-expanded', 'false');
                body.classList.remove('mobile-menu-open');
            });
        }

        // Close menu on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('is-open')) {
                mobileMenuOverlay.classList.remove('is-open');
                mobileHamburger.classList.remove('is-active');
                mobileHamburger.setAttribute('aria-expanded', 'false');
                body.classList.remove('mobile-menu-open');
            }
        });

        // Close menu when clicking outside (on the overlay)
        mobileMenuOverlay.addEventListener('click', function (e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('is-open');
                mobileHamburger.classList.remove('is-active');
                mobileHamburger.setAttribute('aria-expanded', 'false');
                body.classList.remove('mobile-menu-open');
            }
        });

        // Handle navigation link clicks - close menu after navigation
        const mobileMenuLinks = mobileMenuOverlay.querySelectorAll('.mobile-nav-link, .mobile-submenu-link');
        mobileMenuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                // Small delay to allow navigation
                setTimeout(function () {
                    mobileMenuOverlay.classList.remove('is-open');
                    mobileHamburger.classList.remove('is-active');
                    mobileHamburger.setAttribute('aria-expanded', 'false');
                    body.classList.remove('mobile-menu-open');
                }, 100);
            });
        });

        // Mobile submenu toggles
        const mobileNavTriggers = mobileMenuOverlay.querySelectorAll('.mobile-nav-trigger');
        mobileNavTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                const submenu = trigger.nextElementSibling;
                const isOpen = submenu.classList.contains('is-open');

                // Close all other submenus
                mobileNavTriggers.forEach(function (otherTrigger) {
                    if (otherTrigger !== trigger) {
                        otherTrigger.classList.remove('is-open');
                        const otherSubmenu = otherTrigger.nextElementSibling;
                        if (otherSubmenu && otherSubmenu.classList.contains('mobile-submenu')) {
                            otherSubmenu.classList.remove('is-open');
                        }
                    }
                });

                // Toggle current submenu
                trigger.classList.toggle('is-open', !isOpen);
                submenu.classList.toggle('is-open', !isOpen);
            });
        });

        // Close menu on window resize to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 769) {
                mobileMenuOverlay.classList.remove('is-open');
                mobileHamburger.classList.remove('is-active');
                mobileHamburger.setAttribute('aria-expanded', 'false');
                body.classList.remove('mobile-menu-open');
            }
        });
    }

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#mainNav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-active', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    const triggers = nav.querySelectorAll('.nav-trigger');

    function closeAllDropdowns(exceptItem) {
        nav.querySelectorAll('.nav-item.is-open').forEach(function (item) {
            if (exceptItem && item === exceptItem) return;
            item.classList.remove('is-open');
            const t = item.querySelector('.nav-trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
        });
    }

    triggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');

        trigger.addEventListener('click', function (e) {
            // Only handle clicks on mobile (tablet and below)
            if (window.innerWidth > 768) return;

            e.preventDefault();
            const item = trigger.closest('.nav-item');
            if (!item) return;

            const willOpen = !item.classList.contains('is-open');
            closeAllDropdowns(item);

            item.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth > 768) return;
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(e.target) || toggle.contains(e.target)) return;
        closeAllDropdowns();
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
    });

    // Close menu on window resize to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('is-open');
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
            nav.querySelectorAll('.is-open').forEach(function (item) {
                item.classList.remove('is-open');
            });
        }
    });

    const subTriggers = nav.querySelectorAll('.dropdown-subtrigger');

    function closeAllSubmenus(exceptItem) {
        nav.querySelectorAll('.dropdown-item--submenu.is-open').forEach(function (item) {
            if (exceptItem && item === exceptItem) return;
            item.classList.remove('is-open');
            const t = item.querySelector('.dropdown-subtrigger');
            if (t) t.setAttribute('aria-expanded', 'false');
        });
    }

    subTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');

        trigger.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return;

            e.preventDefault();
            const item = trigger.closest('.dropdown-item--submenu');
            if (!item) return;

            const willOpen = !item.classList.contains('is-open');
            closeAllSubmenus(item);
            item.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    // Slideshow functionality
    const slideshowBtns = document.querySelectorAll('.slideshow-btn');
    const slides = document.querySelectorAll('.slide');

    function showSlide(slideIndex) {
        // Hide all slides
        slides.forEach(function (slide) {
            slide.classList.remove('active');
        });

        // Remove active class from all buttons
        slideshowBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Show selected slide
        const targetSlide = document.querySelector('.slide[data-slide="' + slideIndex + '"]');
        const targetBtn = document.querySelector('.slideshow-btn[data-slide="' + slideIndex + '"]');
        
        if (targetSlide) {
            targetSlide.classList.add('active');
        }
        
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    // Add click handlers to slideshow buttons
    slideshowBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const slideIndex = btn.getAttribute('data-slide');
            showSlide(slideIndex);
        });
    });
});
