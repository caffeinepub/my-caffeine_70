# Specification

## Summary
**Goal:** Add a Light/Dark theme toggle with a saved user preference and sensible default behavior.

**Planned changes:**
- Implement a theme system using Tailwind’s class-based dark mode by toggling the `dark` class on the root document element to switch between `:root` and `.dark` CSS variables in `frontend/src/index.css`.
- Add a theme toggle control in the header near the existing language selector, using existing UI components and an icon.
- Persist the user’s theme choice locally and restore it on subsequent visits; if no preference is saved, default to the OS `prefers-color-scheme` setting.
- Add any new user-facing toggle label/tooltip strings to the existing i18n dictionaries (English and Japanese) and reference them via the existing i18n layer.

**User-visible outcome:** Users can switch between Light and Dark mode from the header without reloading the page, and their choice is remembered across refreshes and future visits.
