# Architecture

## Purpose

`learn-sign-lang` is a client-side trainer for the Russian dactyl alphabet. A
learner selects a phrase set, grants camera access, and signs the next character.
The app advances when the recognizer reports an accepted gesture.

## Runtime flow

1. `App` loads settings from `localStorage` and selects a phrase collection.
2. `Trainer` starts the recognizer when the training view mounts.
3. `gesturesRecognizer` sends webcam frames to MediaPipe Hands.
4. MediaPipe returns 21 hand landmarks; they are converted to coordinate arrays.
5. `fingerpose` scores the gesture definitions exported from
   `src/utils/dactyl-gestures/index.js`.
6. The highest-scoring gesture is sent back to `Trainer`, which advances the
   phrase and eventually switches the app to its success state.

## Dependency boundaries

```text
App
├── phrases
└── Trainer
    ├── helpers (pure text conversion)
    └── gesturesRecognizer (browser/DOM boundary)
        ├── MediaPipe globals from public/index.html
        └── dactyl-gestures
            └── fingerpose
```

MediaPipe packages are currently loaded from jsDelivr rather than bundled.
Accordingly, training requires network access as well as webcam permission.
Tests that render only the menu do not require those globals; tests that cross
the recognizer boundary must mock it.

## State and persistence

- `App` owns the mode (`menu`, `training`, or `success`), settings, and remaining
  phrase.
- Settings are stored under the `localStorage` key `settings`.
- `Trainer` owns recognizer initialization and the last displayed gesture.
- There is no server-side state or user account.

## Gesture model

Each file in `src/utils/dactyl-gestures/russian/` describes one gesture for
`fingerpose`. Only definitions included in `RussianDactylGestures` participate
in recognition. Some Russian letters are intentionally disabled because they
need motion detection or better pose separation. `Щ` is inferred from vertical
movement after a recognized `Ш`; the training flow also contains temporary
aliases for difficult `Л` and `Т` poses.

Changes to gesture definitions require a real-camera check under representative
lighting. Keep confidence thresholds and any aliases explicit because they
directly affect false positives.

## Known lifecycle seam

The recognizer starts a MediaPipe camera session, but the current implementation
does not expose a cleanup handle. Any work that changes navigation, remounting,
or recognizer initialization should first introduce an idempotent teardown and
cover repeated mount/unmount behavior.
