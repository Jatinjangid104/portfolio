import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  scrollProgress: 0,
  activeScene: 'hero',
  overlayContent: null,
  isOverlayOpen: false,
  mouseX: 0,
  mouseY: 0,
  isLoaded: true,
  activeNarrativeSide: null,
  progressionLevel: 1,

  setScrollProgress: (v) => {
    let activeScene;
    if (v < 0.15) {
      activeScene = 'hero';
    } else if (v < 0.35) {
      activeScene = 'garage';
    } else if (v < 0.55) {
      activeScene = 'crossroads';
    } else if (v < 0.80) {
      activeScene = 'progression';
    } else {
      activeScene = 'finale';
    }
    set({ scrollProgress: v, activeScene });
  },

  setActiveScene: (v) => set({ activeScene: v }),
  setOverlayContent: (v) => set({ overlayContent: v }),
  setIsOverlayOpen: (v) => set({ isOverlayOpen: v }),
  setMouseX: (v) => set({ mouseX: v }),
  setMouseY: (v) => set({ mouseY: v }),
  setIsLoaded: (v) => set({ isLoaded: v }),
  setActiveNarrativeSide: (v) => set({ activeNarrativeSide: v }),
  setProgressionLevel: (v) => set({ progressionLevel: v }),
}));
