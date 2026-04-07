import { NEON_CYAN } from '@/lib/design-tokens';

// Pre-allocate geometry arguments outside the render loop
const BIKE_BOX_ARGS = Object.freeze([1.5, 1.0, 3.0]);

export function HeroGarage() {
  return (
    <group>
      {/* Position origin is default, no prop needed */}
      <mesh>
        <boxGeometry args={BIKE_BOX_ARGS} />
        <meshStandardMaterial color={NEON_CYAN} wireframe={true} />
      </mesh>
      
      <mesh>
        <boxGeometry args={BIKE_BOX_ARGS} />
        <meshStandardMaterial color={NEON_CYAN} transparent={true} opacity={0.04} />
      </mesh>

      <pointLight position={[0, 3, 3]} intensity={50} />
      <pointLight position={[0, -2, -3]} color={NEON_CYAN} intensity={20} />
    </group>
  );
}