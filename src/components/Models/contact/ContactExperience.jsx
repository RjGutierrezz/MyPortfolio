import { Center, OrbitControls } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Island } from "./Island";

// added: slow invalidation for demand mode
const SlowInvalidate = () => {
  const { invalidate } = useThree();
  const lastRef = useRef(0);

  useFrame(({ clock }) => {
    if (clock.elapsedTime - lastRef.current > 0.05) {
      lastRef.current = clock.elapsedTime;
      invalidate();
    }
  });

  return null;
};

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-5, 6, 16], fov: 35 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      dpr={Math.min(window.devicePixelRatio || 1, 1.5)}
      frameloop="demand"
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <SlowInvalidate />
      <ambientLight intensity={0.8} color="#fff4e6" />
      <directionalLight position={[5, 9, 3]} intensity={5} color="#fff4e6" />

      <OrbitControls
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]} />

      <Center>
        <Island />
      </Center>
    </Canvas>
  );
};

export default ContactExperience;