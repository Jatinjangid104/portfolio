import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from '@/lib/gsap-config';
import { usePortfolioStore } from '@/store';

// Pre-allocate Vectors in global memory
const vPos = new THREE.Vector3();
const vLookAtTarget = new THREE.Vector3();

// Split arrays so GSAP mathematically interpolates pure numbers
const CAM_X = [0, 3, -3];
const CAM_Y = [2, 1, 3];
const CAM_Z = [8, 4, 2];

const LOOK_X = [0, 0, 0];
const LOOK_Y = [0, 0.5, 1];
const LOOK_Z = [0, 0, -2];

export function CameraRig() {
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera }) => {
    // Read scroll state
    const scroll = usePortfolioStore.getState().scrollProgress;

    // Interpolate axes individually to prevent NaN crashes
    const tx = gsap.utils.interpolate(CAM_X, scroll);
    const ty = gsap.utils.interpolate(CAM_Y, scroll);
    const tz = gsap.utils.interpolate(CAM_Z, scroll);

    const lx = gsap.utils.interpolate(LOOK_X, scroll);
    const ly = gsap.utils.interpolate(LOOK_Y, scroll);
    const lz = gsap.utils.interpolate(LOOK_Z, scroll);

    // Apply to vectors
    vPos.set(tx, ty, tz);
    vLookAtTarget.set(lx, ly, lz);

    // Smooth movement
    camera.position.lerp(vPos, 0.05);
    currentLookAt.current.lerp(vLookAtTarget, 0.05);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}