"use client";
import { usePortfolioStore } from '@/store';

export function ScrollDebug() {
  const p = usePortfolioStore(s => s.scrollProgress);
  const s = usePortfolioStore(s => s.activeScene);
  return (
    <div style={{ position:'fixed', top:8, right:8, zIndex:999, color:'#00f0e0', fontFamily:'monospace', fontSize:12, pointerEvents:'none' }}>
      scroll: {p.toFixed(3)} | scene: {s}
    </div>
  );
}
