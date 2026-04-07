import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  isLoaded: true, // Forced true so we bypass the loading screen
  scrollProgress: 0, // MUST BE 0 to prevent NaN crashes
  activeScene: 'hero',
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveScene: (scene) => set({ activeScene: scene })
}));
