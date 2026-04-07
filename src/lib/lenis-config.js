import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap-config';
import { usePortfolioStore } from '@/store';

// SSR Guard: Only instantiate if in the browser
export const lenis = typeof window !== 'undefined' ? new Lenis({
  lerp: 0.1,
  smoothWheel: true,
}) : null;

if (typeof window !== 'undefined') {
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll', ScrollTrigger.update);
  lenis.on('scroll', (e) => {
    usePortfolioStore.getState().setScrollProgress(e.progress);
  });
}

export const destroyLenis = () => {
  if (lenis) {
    lenis.destroy();
    gsap.ticker.remove(lenis?.raf);
  }
};
