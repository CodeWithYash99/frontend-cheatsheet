<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Frontend Cheatsheet — Copilot Instructions

This repository is a small Create React App (CRA) project used as a frontend cheatsheet. Keep suggestions precise and tied to the actual files and patterns in this repo.

Key facts (quick):
- Project type: Create React App (see `package.json` and `react-scripts`).
- Entry point: `src/index.js` -> `src/App.js`.
- Empty scaffolding: `src/components/` and `src/pages/` exist but are currently empty — prefer adding new components there.
- Tests: Jest + React Testing Library (see `src/App.test.js`).

What to do when editing code:
- Keep changes minimal and idiomatic to CRA (don't introduce custom webpack/babel configs unless user asks to `eject`).
- Add new UI components under `src/components/` and pages under `src/pages/`.
- Use functional components and hooks (the project already uses React 19). Keep imports relative and match existing style.

Developer workflows / commands (exact):
- Start dev server: `npm start` (runs `react-scripts start`).
- Run tests: `npm test` (watch mode by default). See `src/App.test.js` for examples.
- Build for production: `npm run build`.

Project-specific conventions discovered:
- Styling: plain CSS files live alongside components (`src/App.css`, `src/index.css`). No CSS-in-JS or Tailwind classes are used in source files yet (although Tailwind is present in devDependencies). If adding Tailwind, update project config and build pipeline explicitly.
- Files/folders: create components in `src/components/` and routes/pages in `src/pages/`.
- Tests: use React Testing Library patterns (see `render`, `screen`, `getByText`). Prefer queries that reflect user behavior (getByRole/getByText).

Integration points / external deps:
- react-router-dom is installed (v7). If you add routing, wire it in `src/index.js` or `src/App.js` and reference `react-router-dom` docs for v7 API.
- No backend or API clients present. When adding API calls, prefer fetch/axios and keep client code in a new `src/api/` module.

Examples to follow (explicit):
- Small component example: add `src/components/ExampleButton.jsx` exporting a default functional component and import it in `src/App.js`.
- Test example: add `src/components/__tests__/ExampleButton.test.js` using React Testing Library's `render` and `screen`.

When proposing changes:
- Reference exact files you modify (e.g., "edit `src/App.js` to import `ExampleButton` and render it").
- If adding dependencies, update `package.json` and explain why; do not run `eject`.
- Avoid large refactors. Suggest incremental improvements and provide small, runnable diffs.

Limitations and things not to assume:
- No CI, linting, or formatting configs are present beyond CRA defaults — do not add global tooling without user approval.
- The `components/` and `pages/` folders are empty; infer structure from CRA only.

If you need clarification, ask the user only about:
- Whether to add new build/tooling (Tailwind setup, ESLint rules, CI),
- Whether to introduce global state (Context/Redux) or keep local state and hooks.

End of instructions.
