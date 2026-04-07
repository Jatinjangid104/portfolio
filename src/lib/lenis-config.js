import Lenis from 'lenis';
import { gsap } from './gsap-config';

const LERP = 0.1;
const DURATION = 1.2;
const SMOOTH_WHEEL = true;

const lenis = new Lenis({
  lerp: LERP,
  duration: DURATION,
  smoothWheel: SMOOTH_WHEEL,
  autoRaf: false,
});

const tickerCallback = (time) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(tickerCallback);

const destroyLenis = () => {
  gsap.ticker.remove(tickerCallback);
  lenis.destroy();
};

export { lenis, destroyLenis };
