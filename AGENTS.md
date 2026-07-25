# Agent guide

## Project snapshot

- This is a browser-only Russian sign-language trainer built with React 17 and
  Create React App 4.
- There is no backend. The training screen reads the webcam, MediaPipe Hands
  landmarks, and `fingerpose` gesture estimators in the browser.
- The supported production route is `/learn-sign-lang/`; keep `homepage` and
  asset paths compatible with that base path.

## Bootstrap

1. Use Node 14.21.1 and npm 6.14.x (`nvm use` reads `.nvmrc`).
2. Install exactly from the npm lockfile with `npm ci`.
3. Use npm as the canonical package manager. `yarn.lock` is legacy compatibility
   data; do not update both lockfiles or migrate package managers incidentally.
4. Never commit `node_modules/`, `build/`, coverage, local environment files, or
   browser/OS metadata.

Do not run `npm install` with a newer npm merely to refresh the lockfile. A
runtime or dependency upgrade is a separate migration and must update the
documentation, CI, and lockfile together.

## Architecture boundaries

- `src/App/App.js`: menu, persisted settings, and top-level application modes.
- `src/App/Trainer/`: webcam training UI and phrase progression.
- `src/utils/gesturesRecognizer.js`: MediaPipe camera/landmark integration.
- `src/utils/dactyl-gestures/`: `fingerpose` definitions and the supported
  Russian dactyl alphabet.
- `src/App/phrases.js`: selectable training material.
- `public/index.html`: CDN scripts that expose MediaPipe globals on `window`.

Keep pure text/gesture transformations separate from camera and DOM access so
they remain testable. If camera lifecycle code changes, stop streams and
callbacks during React cleanup. Do not silently relax gesture confidence or
change letter aliases without a focused test or a documented manual check.

The gesture filenames contain Cyrillic Unicode and may appear in composed or
decomposed form on different filesystems. Address them by the exact path
reported by Git and avoid bulk normalization or renaming.

## Canonical checks

- `npm run test:ci` — non-interactive Jest suite.
- `npm run build` — production compilation and CRA lint checks.
- `npm run verify` — required local release gate; runs both commands.

For camera or recognizer changes, also run the app with `npm start` in a browser,
allow webcam access, and manually verify the affected letters. Automated tests
do not emulate MediaPipe or a real camera.

## Change workflow

- Inspect `git status` before and after work; stage only task-owned paths.
- Add or update tests for deterministic UI and helper behavior.
- Keep CDN/runtime assumptions in `docs/architecture.md` synchronized with code.
- Do not run `react-scripts eject`.
- Avoid unrelated formatting and dependency churn in feature changes.
