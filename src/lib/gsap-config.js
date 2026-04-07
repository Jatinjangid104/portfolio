import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// SSR Guard: Only register plugin if in the browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
