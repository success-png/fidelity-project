# Master Plan: Fidelity Next.js Migration

**Session ID:** orch-20260206-120000
**Created:** 2026-02-06T12:00:00Z
**Status:** In Progress

## Overview

This orchestrator session coordinates the migration of ~100 HTML mockup files from the `pages/` directory to a modern Next.js application with clean URLs. The project includes:

- **Migration Source:** ~100 HTML files in `pages/` directory
- **Assets:** Design mockups in `img/` folder
- **Styles:** Existing `style.css` with Fidelity branding
- **Target:** Next.js 14+ with App Router
- **Goal:** Clean URL routing, component-based architecture, improved performance

## Task Dependencies

```
Phase 1: Foundation
├── 01_scaffold_project.task.md ──────┐
├── 02_css_setup.task.md ─────────────┤
└── 03_config_files.task.md ──────────┤
                                        │
Phase 2: Components                    │
├── 04_ui_components.task.md ──────────┤
├── 05_header_component.task.md ──────┤
├── 06_footer_component.task.md ──────┤
└── 07_navigation.task.md ────────────┤
                                        │
Phase 3: Pages                         │
├── 08_homepage.task.md ───────────────┤
├── 09_auth_pages.task.md ────────────┤
├── 10_public_pages.task.md ──────────┤
├── 11_accounts_pages.task.md ────────┤
├── 12_planning_pages.task.md ────────┤
├── 13_research_pages.task.md ────────┤
├── 14_support_pages.task.md ─────────┤
└── 15_company_pages.task.md ──────────┘
                                        │
Phase 4: Polish                         │
├── 16_static_assets.task.md ──────────┤
└── 17_testing.task.md ───────────────┘
```

## Tasks

| # | Task File | Status | Assigned To | Priority |
|---|-----------|--------|-------------|----------|
| 1 | 01_scaffold_project.task.md | Pending | vibe-code | P0 |
| 2 | 02_css_setup.task.md | Pending | vibe-code | P0 |
| 3 | 03_config_files.task.md | Pending | vibe-code | P0 |
| 4 | 04_ui_components.task.md | Pending | vibe-code | P1 |
| 5 | 05_header_component.task.md | Pending | vibe-code | P1 |
| 6 | 06_footer_component.task.md | Pending | vibe-code | P1 |
| 7 | 07_navigation.task.md | Pending | vibe-code | P1 |
| 8 | 08_homepage.task.md | Pending | vibe-code | P1 |
| 9 | 09_auth_pages.task.md | Pending | vibe-code | P1 |
| 10 | 10_public_pages.task.md | Pending | vibe-code | P2 |
| 11 | 11_accounts_pages.task.md | Pending | vibe-code | P2 |
| 12 | 12_planning_pages.task.md | Pending | vibe-code | P2 |
| 13 | 13_research_pages.task.md | Pending | vibe-code | P2 |
| 14 | 14_support_pages.task.md | Pending | vibe-code | P2 |
| 15 | 15_company_pages.task.md | Pending | vibe-code | P2 |
| 16 | 16_static_assets.task.md | Pending | vibe-code | P2 |
| 17 | 17_testing.task.md | Pending | vibe-review | P2 |

## Progress

- [x] Phase 1: Planning (Migration Plan Document)
- [ ] Phase 2: Foundation Setup
- [ ] Phase 3: Component Development
- [ ] Phase 4: Page Migration
- [ ] Phase 5: Testing & Polish

## Notes

- All HTML files should be moved to `public/legacy/pages/` for reference
- CSS variables from existing `style.css` should be preserved
- Clean URL routing: `pages/login.html` → `/auth/login`
- Route groups: `(auth)`, `(accounts)`, `(planning)`, `(research)`, `(company)`, `(support)`

## Session Path

`docs/tasks/orchestrator-sessions/orch-20260206-120000/`
