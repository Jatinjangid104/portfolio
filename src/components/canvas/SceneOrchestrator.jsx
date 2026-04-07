import { CameraRig } from '@/components/canvas/CameraRig';
import { HeroGarage } from '@/components/canvas/HeroGarage';
import { FOG_COLOR, FOG_DENSITY } from '@/lib/design-tokens';

export function SceneOrchestrator() {
  return (
    <>
      <fogExp2 attach="fog" color={FOG_COLOR} density={FOG_DENSITY} />
      <ambientLight intensity={0.15} />
      <CameraRig />
      <HeroGarage />
    </>
  );
}
