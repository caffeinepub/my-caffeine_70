# Specification

## Summary
**Goal:** Fix the production all-browser white screen by ensuring `ThemeProvider` wraps any component using `useTheme`, and add a minimal global runtime fallback UI for unexpected render errors.

**Planned changes:**
- Update the frontend app composition (without editing immutable files) so `ThemeProvider` is mounted above any `useTheme` consumers (e.g., `ThemeToggle`) to prevent the `useTheme must be used within a ThemeProvider` runtime error.
- Add a top-level error boundary (or equivalent global render-time error handling) that displays an English fallback message instead of a blank page and logs the underlying error to the browser console.

**User-visible outcome:** The app renders normally in production across browsers, the theme toggle works (light/dark updates the UI), and if an unexpected render error occurs users see an English fallback message instead of a blank white screen.
