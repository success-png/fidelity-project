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
├── 03_config_files.task.md ──────────┤
                                        │
Phase 2: Components                    │
├── 04_ui_components.task.md ──────────┤
├── 05_header_component.task.md ──────┤
├── 06_navigation.task.md ─────────────┤
└── 06_footer.task.md ────────────────┤
                                        │
Phase 3: Pages                          │
├── 07_homepage_auth_pages.task.md ─────┤
├── 08_public_pages.task.md ───────────┤
├── 09_accounts_pages.task.md ──────────┤
├── 10_planning_research_pages.task.md ─┤
└── 11_support_company_pages.task.md ──┘
                                        │
Phase 4: Polish                         │
└── 12_testing_static_assets.task.md ──┘
```

## Tasks

| # | Task File | Status | Assigned To | Priority |
|---|-----------|--------|-------------|----------|
| 1 | 01_scaffold_project.task.md | Completed | vibe-code | P0 |
| 2 | 02_css_setup.task.md | Completed | vibe-code | P0 |
| 3 | 03_config_files.task.md | Completed | vibe-code | P0 |
| 4 | 04_ui_components.task.md | Completed | vibe-code | P1 |
| 5 | 05_header_component.task.md | Completed | vibe-code | P1 |
| 6 | 06_navigation.task.md | Completed | vibe-code | P1 |
| 7 | 06_footer.task.md | Completed | vibe-code | P1 |
| 8 | 07_homepage_auth_pages.task.md | In Progress | vibe-code | P0 |
| 9 | 08_public_pages.task.md | Pending | vibe-code | P1 |
| 10 | 09_accounts_pages.task.md | Pending | vibe-code | P0 |
| 11 | 10_planning_research_pages.task.md | Pending | vibe-code | P1 |
| 12 | 11_support_company_pages.task.md | Pending | vibe-code | P1 |
| 13 | 12_testing_static_assets.task.md | Pending | vibe-review | P0 |

## Progress

- [x] Phase 1: Planning (Migration Plan Document)
- [x] Phase 2: Foundation Setup
- [x] Phase 3: Component Development
- [-] Phase 4: Page Migration
- [ ] Phase 5: Testing & Polish

## Notes

- All HTML files should be moved to `public/legacy/pages/` for reference
- CSS variables from existing `style.css` should be preserved
- Clean URL routing: `pages/login.html` → `/auth/login`
- Route groups: `(auth)`, `(accounts)`, `(planning)`, `(research)`, `(company)`, `(support)`

## Session Path

`docs/tasks/orchestrator-sessions/orch-20260206-120000/`
