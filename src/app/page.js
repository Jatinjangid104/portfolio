"use client";

import { Canvas } from '@react-three/fiber';
import { LoadingScreen } from '@/components/dom/LoadingScreen';
import { SceneOrchestrator } from '@/components/canvas/SceneOrchestrator';

export default function PortfolioPage() {
  return (
    <main>
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
      >
        <color attach="background" args={['#04040a']} />
        {/* Mount the 3D World Here */}
        <SceneOrchestrator />
      </Canvas>

      <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
        {/* We will build the HTML HUD here in Sprint 3 */}
      </div>

      <LoadingScreen />
    </main>
  );
}