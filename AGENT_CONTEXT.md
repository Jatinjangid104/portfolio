# AGENT CONTEXT — Jatin Jangid Portfolio

## Pinned package versions (use these exactly, no upgrades)
- three: 0.167.1
- @react-three/fiber: 8.17.10
- @react-three/drei: 9.113.0
- @react-three/postprocessing: 2.16.2
- gsap: 3.12.5
- @studio-freight/lenis: 1.1.14
- zustand: 4.5.4
- framer-motion: 11.3.24
- next: 14.2.5

## Architecture invariants (breaking these breaks everything)
1. Canvas is position:fixed, inset:0, z-index:1
2. DOM overlays are position:fixed, inset:0, z-index:10, pointer-events:none
3. Individual clickable DOM elements get pointer-events:auto explicitly
4. Global state lives in Zustand only — no prop drilling, no Context for 3D state
5. Animation state uses useRef + useFrame, never useState
6. GSAP is initialized once in src/lib/gsap-config.js and imported from there
7. Lenis is initialized once in src/lib/lenis-config.js and imported from there
8. Never import directly from 'gsap/ScrollTrigger' — import from src/lib/gsap-config.js

## File structure (never create files outside this structure)
src/
  app/
    layout.js          ← root layout, Lenis + GSAP init here
    page.js            ← empty shell, just <SceneOrchestrator />
  components/
    canvas/
      SceneOrchestrator.jsx
      CameraRig.jsx
      PostProcessing.jsx
      scenes/
        HeroScene.jsx
        GarageScene.jsx
        CrossroadsScene.jsx
        ProgressionScene.jsx
        FinaleScene.jsx
      models/
        Bike.jsx        ← gltfjsx generated, do not hand-write
        Garage.jsx
      shared/
        InteractiveMesh.jsx
        ReflectorFloor.jsx
        NeonLight.jsx
    dom/
      GlobalHUD.jsx
      OverlayManager.jsx
      ProjectCard.jsx
      LoreWindow.jsx
      LoadingScreen.jsx
      CustomCursor.jsx
  lib/
    gsap-config.js
    lenis-config.js
    design-tokens.js
  store/
    index.js           ← single Zustand store

## Zustand store shape (do not alter this schema)
{
  scrollProgress: number,        // 0.0–1.0
  activeScene: string,           // 'hero'|'garage'|'crossroads'|'progression'|'finale'
  overlayContent: string|null,   // 'aureus-core'|'nexus'|'enterprise'|null
  isOverlayOpen: boolean,
  mouseX: number,                // -1.0 to 1.0 normalized
  mouseY: number,
  isLoaded: boolean,
  activeNarrativeSide: string,   // 'enterprise'|'personal'|null (Crossroads choice)
  progressionLevel: number,      // 1|2|3 (for Phase 4 evolution)
}

## Design tokens (always import from src/lib/design-tokens.js, never hardcode)
VOID: '#04040a'
OBSIDIAN: '#0a0a0c'
NEON_CYAN: '#00f0e0'
NEON_MAGENTA: '#ff0080'
ELECTRIC_ORANGE: '#ff3d00'
CHROME: '#c8c8d0'
FOG_COLOR: '#0a0a0c'
FOG_DENSITY: 0.08

## Hard rules for this session
- Output one file only unless I explicitly list multiple files
- No comments in output code
- No PropTypes
- No default export + named export on same component
- No CSS modules — use Tailwind utility classes for DOM layer only
- No inline styles on 3D components — use material properties
- If you are uncertain about a Three.js API, say so instead of guessing