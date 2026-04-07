import { NEON_CYAN } from '@/lib/design-tokens';

export function HeroGarage() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.0, 3.0]} />
        <meshStandardMaterial color={NEON_CYAN} wireframe={true} />
      </mesh>
      
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.0, 3.0]} />
        <meshStandardMaterial color={NEON_CYAN} transparent={true} opacity={0.04} />
      </mesh>

      <pointLight position={[0, 3, 3]} intensity={50} />
      <pointLight position={[0, -2, -3]} color={NEON_CYAN} intensity={20} />
    </group>
  );
}
