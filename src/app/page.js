"use client";

import { Canvas } from '@react-three/fiber';
import { SceneOrchestrator } from '@/components/canvas/SceneOrchestrator';
import { ScrollDebug } from '@/components/dom/ScrollDebug';
import { HeroOverlay } from '@/components/dom/HeroOverlay';

export default function PortfolioPage() {
  return (
    <main>
      {/* 1. THE 3D WEBGL LAYER (z-index 1) */}
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
      >
        <color attach="background" args={['#04040a']} />
        <SceneOrchestrator />
      </Canvas>

      {/* 2. THE 2D UI LAYER (z-index 10) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
        <ScrollDebug />
        {/* The HeroOverlay will now appear and fade based on scrollProgress */}
        <HeroOverlay /> 
      </div>
    </main>
  );
}