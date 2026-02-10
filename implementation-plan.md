# Next.js Migration Plan - Fidelity-Style Financial Services App

## Executive Summary

This document provides a comprehensive migration plan for converting ~100 HTML mockup files into a modern Next.js application with clean URLs, using the App Router architecture. The migration will preserve existing design fidelity while enabling modern development patterns, improved performance, and better maintainability.

---

## 1. Next.js Project Structure

### 1.1 Recommended Directory Structure

```
nextjs-app/
├── app/                              # App Router directory
│   ├── layout.tsx                   # Root layout with providers
│   ├── page.tsx                      # Home page
│   ├── not-found.tsx                # 404 page
│   ├── loading.tsx                  # Global loading state
│   ├── error.tsx                    # Global error boundary
│   │
│   ├── (auth)/                      # Authentication route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── open-account/
│   │   │   └── page.tsx
│   │   └── layout.tsx              # Auth-specific layout
│   │
│   ├── accounts/                   # Accounts & Trade section
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── positions/
│   │   │   └── page.tsx
│   │   ├── trade/
│   │   │   └── page.tsx
│   │   ├── transfers/
│   │   │   └── page.tsx
│   │   └── layout.tsx              # Shared accounts layout
│   │
│   ├── planning/                   # Planning & Advice section
│   │   ├── retirement/
│   │   │   └── page.tsx
│   │   ├── goals/
│   │   │   └── page.tsx
│   │   ├── financial-basics/
│   │   │   └── page.tsx
│   │   └── layout.tsx              # Shared planning layout
│   │
│   ├── research/                   # News & Research section
│   │   ├── news/
│   │   │   └── page.tsx
│   │   ├── markets/
│   │   │   └── page.tsx
│   │   └── layout.tsx              # Shared research layout
│   │
│   ├── company/                    # Company pages
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   └── support/                    # Support pages
│       ├── customer-service/
│       │   └── page.tsx
│       ├── help-center/
│       │   └── page.tsx
│       └── layout.tsx
│
├── components/                     # Shared components
│   ├── ui/                         # Primitive UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── Card.module.css
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.module.css
│   │   └── index.ts
│   │
│   ├── layout/                     # Layout components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   ├── TopBar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── sections/                   # Page section components
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.css
│   │   │   └── index.ts
│   │   ├── FeatureGrid/
│   │   │   ├── FeatureGrid.tsx
│   │   │   └── index.ts
│   │   ├── CTASection/
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   └── index.ts
│
├── styles/                         # Global styles
│   ├── globals.css                # Global CSS with CSS variables
│   ├── variables.css              # CSS custom properties
│   └── utils.css                  # Utility classes
│
├── lib/                           # Utility functions and helpers
│   ├── navigation.ts              # Navigation configuration
│   ├── routes.ts                  # Route definitions
│   ├── utils.ts                   # Utility functions
│   └── constants.ts               # App constants
│
├── public/                        # Static assets (legacy HTML moved here)
│   ├── legacy/
│   │   └── pages/                 # Original HTML files for reference
│   └── images/                    # Optimized images
│       ├── img/
│       └── favicon.ico
│
├── hooks/                         # Custom React hooks
│   ├── useNavigation.ts
│   ├── useScroll.ts
│   └── index.ts
│
├── types/                         # TypeScript type definitions
│   ├── navigation.ts
│   ├── page.ts
│   └── index.ts
│
├── config/                        # App configuration
│   ├── navigation.ts              # Navigation menu config
│   └── site.ts                    # Site metadata
│
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts             # Tailwind configuration (if using)
└── package.json
```

### 1.2 Route Grouping Strategy

The app uses Next.js route groups `(groupName)` to organize routes logically:

| Route Group | Purpose | Shared Layout Features |
|-------------|---------|------------------------|
| `(auth)` | Login, open account pages | Simplified header (no dropdowns) |
| `(accounts)` | Authenticated account features | Full header with user context |
| `(planning)` | Planning and advice content | Educational-focused layout |
| `(research)` | Market research and news | Research-specific sidebar |
| `(company)` | Company information pages | Corporate branding |
| `(support)` | Help and customer service | Support-focused navigation |

---

## 2. Migration Strategy

### 2.1 Phased Migration Approach

#### Phase 1: Foundation Setup (Week 1)
1. **Initialize Next.js project**
   ```bash
   npx create-next-app@latest nextjs-app --typescript --tailwind --eslint
   ```
   
2. **Configure core dependencies**
   - Set up TypeScript configuration
   - Configure ESLint and Prettier
   - Set up CSS Modules or Tailwind CSS
   - Install required icon library (Font Awesome or React Icons)

3. **Create base layout structure**
   - Root layout with metadata providers
   - Global styles integration
   - Font configuration

#### Phase 2: Component Extraction (Weeks 2-3)
1. **Extract layout components**
   - Header with TopBar and Navigation
   - Footer
   - Shared UI components (Button, Card, etc.)

2. **Create navigation system**
   - Define navigation configuration in `config/navigation.ts`
   - Build dynamic Navigation component
   - Implement dropdown menus with proper ARIA

3. **Build section components**
   - Hero section
   - Feature grid
   - CTA sections
   - Content blocks

#### Phase 3: Page Migration (Weeks 4-8)
1. **Migrate public pages** (non-authenticated)
   - Company pages (about, careers, contact)
   - Product pages (investing, trading, retirement)
   - Educational content

2. **Migrate authenticated pages**
   - Portfolio and positions
   - Trading interfaces
   - Account management

3. **Migrate support pages**
   - Customer service
   - Help center
   - Contact forms

#### Phase 4: Polish & Optimization (Week 9)
1. **Performance optimization**
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategies

2. **SEO improvements**
   - Metadata configuration
   - Sitemap generation
   - robots.txt

3. **Testing and QA**
   - Cross-browser testing
   - Accessibility audit
   - Performance testing

### 2.2 Component Extraction Patterns

#### Pattern 1: Header Component Extraction

**Original HTML (repeated in every file):**
```html
<header class="site-header">
  <div class="header-green">
    <div class="container header-green-inner">
      <a class="brand" href="../index.html">
        <img class="brand-logo" src="..." alt="Fidelity">
      </a>
      <div class="header-links">
        <a class="header-link" href="customer-service.html">Customer Service</a>
        <a class="header-btn header-btn--light" href="open-account.html">Open an account</a>
        <a class="header-btn header-btn--outline" href="login.html">Log in</a>
      </div>
    </div>
  </div>
  <div class="header-white">
    <div class="container header-white-inner">
      <nav class="nav-links">...</nav>
    </div>
  </div>
</header>
```

**Next.js Component:**
```tsx
// components/layout/Header/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <Image src="/fidelity-logo.svg" alt="Fidelity" width={120} height={28} />
          </Link>
          <div className={styles.topLinks}>
            <Link href="/support/customer-service" className={styles.topLink}>
              Customer Service
            </Link>
            <Link href="/auth/login" className={styles.btnPrimary}>
              Log in
            </Link>
            <Link href="/auth/open-account" className={styles.btnSecondary}>
              Open an account
            </Link>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
```

#### Pattern 2: Navigation with Dropdowns

**Configuration-Driven Approach:**
```ts
// config/navigation.ts
export const navigationConfig = {
  accounts: {
    label: 'Accounts & Trade',
    items: [
      { label: 'Portfolio', href: '/accounts/portfolio', authenticated: true },
      { label: 'Account Positions', href: '/accounts/positions', authenticated: true },
      { label: 'Trade', href: '/accounts/trade', authenticated: true },
      { label: 'Transfers', href: '/accounts/transfers', authenticated: false },
    ],
  },
  planning: {
    label: 'Planning & Advice',
    items: [
      { label: 'What We Offer', href: '/planning/what-we-offer' },
      { label: 'Retirement', href: '/planning/retirement' },
      { label: 'Financial Basics', href: '/planning/financial-basics' },
    ],
  },
  research: {
    label: 'News & Research',
    items: [
      { label: 'News', href: '/research/news' },
      { label: 'Markets', href: '/research/markets' },
      { label: 'Learn', href: '/research/learn' },
    ],
  },
};
```

### 2.3 Shared Layout and Navigation Strategy

**Navigation Component Architecture:**
```
Navigation
├── NavBar
│   ├── NavItem (Accounts)
│   │   └── Dropdown
│   │       ├── NavLink items
│   │       └── SubDropdown (if applicable)
│   ├── NavItem (Planning)
│   │   └── Dropdown
│   └── NavItem (Research)
│       └── Dropdown
├── SearchBar
└── MobileMenu
```

### 2.4 Styling Approach

**Recommended: CSS Modules with CSS Custom Properties**

The existing `style.css` already uses CSS variables extensively. Migration strategy:

1. **Copy existing CSS variables to global styles:**
   ```css
   /* styles/variables.css */
   :root {
     --fidelity-green: #00a94f;
     --fidelity-dark-green: #007a3e;
     --fidelity-blue: #1f5a8b;
     --fidelity-dark-blue: #0f3b5f;
     --fidelity-dark-gray: #333333;
     --fidelity-medium-gray: #666666;
     --fidelity-light-gray: #cccccc;
     --fidelity-orange: #f68d2e;
     --fidelity-red: #e31c3d;
     /* spacing, border-radius, box-shadow, transitions */
   }
   ```

2. **Migrate component-specific styles to CSS Modules**

---

## 3. Page Mapping

### 3.1 URL Mapping Table

| Original File | New Route | Route Group | Priority |
|--------------|-----------|-------------|----------|
| `index.html` | `/` | (public) | High |
| `login.html` | `/auth/login` | (auth) | High |
| `open-account.html` | `/auth/open-account` | (auth) | High |
| `about-fidelity.html` | `/company/about` | (company) | Medium |
| `portfolio.html` | `/accounts/portfolio` | (accounts) | High |
| `account-positions.html` | `/accounts/positions` | (accounts) | High |
| `trade.html` | `/accounts/trade` | (accounts) | High |
| `retirement.html` | `/planning/retirement` | (planning) | High |
| `news.html` | `/research/news` | (research) | High |
| `customer-service.html` | `/support/customer-service` | (support) | High |
| `investing-trading.html` | `/products/investing` | (public) | High |
| `pricing.html` | `/products/pricing` | (public) | Medium |
| `security.html` | `/security` | (public) | Medium |
| `profile.html` | `/accounts/profile` | (accounts) | Medium |
| `research.html` | `/research/markets` | (research) | High |
| `stocks-etfs-crypto.html` | `/research/stocks` | (research) | High |
| `mutual-funds.html` | `/research/mutual-funds` | (research) | High |
| `etfs.html` | `/products/etfs` | (public) | High |
| `retirement-iras.html` | `/products/iras` | (public) | High |
| `trading.html` | `/products/trading` | (public) | High |
| `plan-for-retirement.html` | `/planning/retirement/guide` | (planning) | Medium |
| `what-we-offer.html` | `/planning/what-we-offer` | (planning) | Medium |
| `build-your-free-plan.html` | `/planning/build-plan` | (planning) | Medium |
| `financial-basics.html` | `/planning/basics` | (planning) | Medium |
| `building-savings.html` | `/planning/savings` | (planning) | Medium |
| `life-events.html` | `/planning/life-events` | (planning) | Medium |
| `saving-investing-for-a-child.html` | `/planning/child-investing` | (planning) | Medium |
| `charitable-giving.html` | `/planning/charitable` | (planning) | Low |
| `long-term-care-planning.html` | `/planning/long-term-care` | (planning) | Low |
| `wealth-management.html` | `/planning/wealth-management` | (planning) | Medium |
| `find-an-advisor.html` | `/planning/advisor` | (planning) | Medium |
| `robo-investing-plus-advice.html` | `/planning/robo-advice` | (planning) | Low |
| `watchlist.html` | `/research/watchlist` | (research) | Medium |
| `alerts.html` | `/research/alerts` | (research) | Medium |
| `fixed-income-bonds-cds.html` | `/research/fixed-income` | (research) | Medium |
| `options.html` | `/research/options` | (research) | Medium |
| `ipos.html` | `/research/ipos` | (research) | Low |
| `annuities.html` | `/research/annuities` | (research) | Medium |
| `learn.html` | `/research/learn` | (research) | Medium |
| `viewpoints.html` | `/research/viewpoints` | (research) | Low |
| `insights-tools.html` | `/research/insights` | (research) | Low |
| `wealth-management-insights.html` | `/research/wealth-insights` | (research) | Low |
| `help-center.html` | `/support/help-center` | (support) | High |
| `fidelity-assistant.html` | `/support/assistant` | (support) | Medium |
| `fidelity-locations.html` | `/support/locations` | (support) | Low |
| `careers.html` | `/company/careers` | (company) | Medium |
| `contact-us.html` | `/company/contact` | (company) | Medium |
| `privacy.html` | `/company/privacy` | (company) | Low |
| `disclosures.html` | `/company/disclosures` | (company) | Low |
| `transfers.html` | `/accounts/transfers` | (accounts) | Medium |
| `cash-management.html` | `/accounts/cash-management` | (accounts) | Medium |
| `bill-pay.html` | `/accounts/bill-pay` | (accounts) | Low |
| `full-view.html` | `/accounts/full-view` | (accounts) | Low |
| `documents.html` | `/accounts/documents` | (accounts) | Medium |
| `security-settings.html` | `/accounts/security` | (accounts) | Medium |
| `account-features.html` | `/accounts/features` | (accounts) | Low |
| `retirement-distributions.html` | `/accounts/retirement/distributions` | (accounts) | Low |
| `refer-a-friend.html` | `/accounts/refer` | (accounts) | Low |
| `my-goals.html` | `/planning/goals` | (planning) | Medium |
| `crypto.html` | `/products/crypto` | (public) | Medium |
| `life-insurance.html` | `/products/insurance` | (public) | Medium |
| `health-savings-accounts.html` | `/products/hsa` | (public) | Medium |
| `529-college-savings.html` | `/products/college-savings` | (public) | Medium |
| `fidelity-trader-plus.html` | `/accounts/trader-plus` | (accounts) | Medium |
| `fidelity-trader-plus-web.html` | `/accounts/trader-plus/web` | (accounts) | Medium |
| `managed-accounts.html` | `/products/managed-accounts` | (public) | Medium |
| `direct-indexing.html` | `/products/direct-indexing` | (public) | Low |
| `marketplace-solutions.html` | `/products/marketplace` | (public) | Low |
| `straightforward-pricing.html` | `/products/pricing/details` | (public) | Low |
| `see-how-to-invest.html` | `/products/how-to-invest` | (public) | Medium |
| `start-trading.html` | `/products/start-trading` | (public) | Medium |
| `spending-saving.html` | `/planning/spending-saving` | (planning) | Low |
| `sustainable-investing.html` | `/planning/sustainable` | (planning) | Low |
| `security-protection.html` | `/security/protection` | (public) | Medium |
| `fdic-sipc-coverage.html` | `/security/coverage` | (public) | Low |
| `tax-forms-information.html` | `/accounts/tax-forms` | (accounts) | Medium |
| `learn-more.html` | `/learn` | (public) | Low |
| `planning.html` | `/planning` | (planning) | Medium |
| `fidelity-advantage.html` | `/products/fidelity-advantage` | (public) | Low |

### 3.2 Dynamic Route Patterns

For pages with similar structures, use dynamic routes:

```tsx
// app/(public)/products/[category]/page.tsx
interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return [
    { category: 'investing' },
    { category: 'trading' },
    { category: 'etfs' },
    { category: 'crypto' },
    { category: 'annuities' },
  ];
}

export default function ProductCategoryPage({ params }: PageProps) {
  const { category } = params;
  // Render category-specific content
}
```

---

## 4. Placeholder Content Strategy

### 4.1 Placeholder Structure

```
placeholders/
├── metadata/                    # Page-level placeholders
│   ├── page-metadata.ts        # Metadata interfaces and defaults
│   ├── auth-pages.ts           # Auth page metadata
│   ├── accounts-pages.ts       # Accounts page metadata
│   └── public-pages.ts         # Public page metadata
│
├── components/                  # Component-level placeholders
│   ├── Skeleton.tsx            # Generic skeleton loader
│   ├── TableSkeleton.tsx       # Data table skeleton
│   ├── CardSkeleton.tsx        # Card component skeleton
│   └── ChartSkeleton.tsx       # Chart visualization skeleton
│
└── data/                       # Mock data for development
    ├── user.ts                 # User profile mock data
    ├── accounts.ts             # Account data
    ├── portfolio.ts            # Portfolio holdings
    ├── transactions.ts         # Transaction history
    └── market-data.ts          # Market data
```

### 4.2 Metadata Placeholder Requirements

**Required Metadata Properties:**
```ts
// types/metadata.ts
interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}
```

### 4.3 Component-Level Placeholders

**Skeleton Loading Components:**
```tsx
// components/ui/Skeleton/Skeleton.tsx
interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}

export function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className,
}: SkeletonProps) {
  return (
    <div
      className={`skkeleton ${className || ''}`}
      style={{ width, height, borderRadius }}
    />
  );
}
```

---

## 5. Technical Recommendations

### 5.1 Next.js Version and Configuration

**Recommended: Next.js 14+ with App Router**

**next.config.js Configuration:**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fidelity.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

### 5.2 Styling Solution

**Recommendation: Tailwind CSS with CSS Modules Hybrid**

**Rationale:**
- Tailwind for utility-first styling (fast development)
- CSS Modules for component-scoped styles (maintain existing CSS)
- Preserve existing CSS custom properties for design consistency

### 5.3 Image Optimization Strategy

**Next.js Image Component Usage:**
```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/fidelity-logo.svg"
        alt="Fidelity Logo"
        width={120}
        height={28}
        priority
      />
    </div>
  );
}
```

### 5.4 Performance Considerations

**Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

**Optimization Strategies:**
1. Code splitting (automatic with Next.js App Router)
2. Static generation with ISR for marketing pages
3. Dynamic rendering for authenticated pages
4. Font optimization with `next/font`
5. Image optimization with `next/image`

---

## 6. Implementation Checklist

### 6.1 Pre-Migration
- [ ] Review all HTML files for common patterns
- [ ] Document existing navigation structure
- [ ] Create detailed URL mapping spreadsheet
- [ ] Set up development environment

### 6.2 Foundation Phase
- [ ] Initialize Next.js project
- [ ] Configure TypeScript
- [ ] Integrate existing CSS
- [ ] Create base layout components
- [ ] Build navigation system

### 6.3 Component Development
- [ ] Develop UI component library
- [ ] Build Header with dropdowns
- [ ] Build Footer
- [ ] Create Hero components
- [ ] Build section components

### 6.4 Page Migration
- [ ] Migrate homepage
- [ ] Migrate authentication pages
- [ ] Migrate public pages
- [ ] Migrate authenticated dashboard pages
- [ ] Migrate support pages

### 6.5 Testing & Deployment
- [ ] Run accessibility audit
- [ ] Test responsive layouts
- [ ] Verify all links work
- [ ] Test performance metrics
- [ ] Deploy to production

---

## 7. Rollback Plan

1. **Keep legacy HTML files accessible** in `public/legacy/` folder
2. **Configure web server redirects** to legacy files if needed
3. **Database backup** before any data migration
4. **Feature flags** for gradual rollout

---

This migration plan provides a comprehensive roadmap for converting the Fidelity-style financial services application from static HTML to a modern Next.js application with clean URLs, improved performance, and maintainable code architecture.