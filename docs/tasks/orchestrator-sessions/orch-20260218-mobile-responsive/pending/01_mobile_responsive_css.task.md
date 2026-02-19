# Task: Mobile Responsive CSS Implementation

**Session ID:** org-20260218-mobile-responsive
**Source:** Orchestrator
**Context:** Make the Fidelity app perfectly responsive for mobile while preserving desktop view
**Priority:** P0
**Dependencies:** None
**Created At:** 2026-02-18

---

## 📋 Objective
Implement comprehensive mobile responsive CSS for the Fidelity app homepage and all sections. The desktop view must remain EXACTLY as it is - only mobile-specific styles should be added or modified.

## 🎯 Scope

**In Scope:**
- Add mobile responsive styles to `nextjs-app/styles/legacy.css`
- Move inline styles from `nextjs-app/app/page.tsx` to CSS where needed for responsive control
- Ensure all sections stack properly on mobile
- Optimize typography for mobile screens
- Ensure touch targets are at least 44px
- Handle background images for mobile
- Make slideshow section fully responsive
- Make quick links section stack properly on mobile

**Out of Scope:**
- Changing any desktop styles
- Adding new features
- Modifying JavaScript/React logic (unless absolutely necessary for mobile menu)

---

## 📚 Context

### Files to Modify:
1. `nextjs-app/styles/legacy.css` - Add comprehensive mobile styles
2. `nextjs-app/app/page.tsx` - Move inline styles to CSS classes

### Sections Requiring Mobile Responsiveness:

#### 1. Hero Section (lines 20-40 in page.tsx)
- Background image should cover properly on mobile
- Hero card should be full-width on mobile
- Typography should scale down
- Buttons should stack vertically

#### 2. Slideshow Section (lines 42-103 in page.tsx)
- Tab buttons should wrap or scroll horizontally
- Slide images should fit screen width
- Remove `width: 100vw` negative margin hack for mobile

#### 3. Checking Section (lines 105-124 in page.tsx)
- Two-column flex layout should stack vertically
- Image should be full-width on mobile
- Text content should have proper padding

#### 4. Cards Section (lines 147-195 in page.tsx)
- 3-column flex should become single column
- Cards should maintain proper spacing

#### 5. Investing Section (lines 197-217 in page.tsx)
- Two-column layout should stack
- Image should be full-width

#### 6. Retirement Section (lines 219-235 in page.tsx)
- Two-column layout should stack
- Image should be full-width

#### 7. Quick Links Section (lines 237-459 in page.tsx)
- 4-column layout should become 2-column then single column
- Social media grid should adjust
- Footer links should wrap properly

#### 8. Footer Disclaimer Section (lines 461-546 in page.tsx)
- Typography should be readable on mobile
- Proper padding and spacing

### Current Mobile Styles Location:
The file `nextjs-app/styles/legacy.css` already has some mobile styles starting at line 1493. You should ADD to and IMPROVE these existing styles, not replace them.

### Key CSS Patterns to Use:
```css
/* Mobile breakpoint */
@media (max-width: 768px) {
  /* Stack flex layouts */
  .some-flex-container {
    flex-direction: column;
  }
  
  /* Full width on mobile */
  .some-item {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Adjust typography */
  .some-title {
    font-size: 24px !important;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  /* Further adjustments */
}
```

---

## ✅ Definition of Done
- [ ] Hero section is fully responsive on mobile
- [ ] Slideshow section tabs are usable on mobile
- [ ] All two-column sections stack vertically on mobile
- [ ] Cards section becomes single column on mobile
- [ ] Quick links section stacks properly on mobile
- [ ] All typography is readable on mobile
- [ ] Touch targets are at least 44px
- [ ] No horizontal scrolling on mobile
- [ ] Desktop view is UNCHANGED
- [ ] Tested at 375px, 390px, 414px, and 768px widths

---

## 📁 Expected Artifacts
| File | Purpose |
|------|---------|
| `nextjs-app/styles/legacy.css` | Updated with comprehensive mobile styles |
| `nextjs-app/app/page.tsx` | Inline styles moved to CSS where needed |

---

## 🚫 Constraints
- **CRITICAL:** Do NOT change any desktop styles
- Only add styles within `@media (max-width: 768px)` blocks
- Use `!important` only when necessary to override inline styles
- Do not modify React component logic
- Signal completion using `attempt_completion` tool
- Create `01_mobile_responsive_css.result.md` file with summary when complete

---

## 🔍 Specific Issues to Fix

### Issue 1: Slideshow Content Overflow
The `.slideshow-content` has:
```css
.slideshow-content {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}
```
This causes horizontal scroll on mobile. Fix with:
```css
@media (max-width: 768px) {
    .slideshow-content {
        width: 100%;
        margin-left: 0;
    }
    .slide-image img {
        width: 100%;
        max-width: 100%;
        height: auto;
    }
}
```

### Issue 2: Checking/Investing/Retirement Sections
These use inline styles like `flex: 0 0 65%` that need to be overridden:
```css
@media (max-width: 768px) {
    .checking-content,
    .investing-content,
    .retirement-content {
        flex-direction: column !important;
    }
    .checking-image,
    .investing-image,
    .retirement-image {
        flex: none !important;
        width: 100% !important;
    }
}
```

### Issue 3: Quick Links Section
Has inline styles with 4 columns. Need to make responsive:
```css
@media (max-width: 768px) {
    .quick-links-content {
        flex-direction: column !important;
    }
    .quick-links-column {
        width: 100% !important;
        padding: 16px 0 !important;
    }
}
```

### Issue 4: Social Media Grid
Currently 4 columns, should be 2 columns on mobile:
```css
@media (max-width: 768px) {
    .social-media-links {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
```

---

*Generated by vibe-orchestrator mode*
