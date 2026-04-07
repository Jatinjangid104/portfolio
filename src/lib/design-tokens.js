// src/lib/design-tokens.js

// Standalone specific constants (Legacy / Direct mapping)
export const VOID = '#04040a';
export const OBSIDIAN = '#0a0a0c';
export const NEON_CYAN = '#00f0e0';
export const NEON_MAGENTA = '#ff0080';
export const ELECTRIC_ORANGE = '#ff3d00';
export const CHROME = '#c8c8d0';
export const FOG_COLOR = '#0a0a0c';

export const FOG_DENSITY = 0.08;

// Unified exports for both direct R3F and DOM component injection
export const COLORS = {
  void: VOID,
  obsidian: OBSIDIAN,
  neon_cyan: NEON_CYAN,
  neon_magenta: NEON_MAGENTA,
  electric_orange: ELECTRIC_ORANGE,
  chrome: CHROME,
  fog_color: FOG_COLOR,
  fog: FOG_COLOR, // Included to preserve the secondary 'fog' mapping
};