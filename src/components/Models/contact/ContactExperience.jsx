import { Center, OrbitControls } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

import { Island } from "./Island";

const SlowInvalidate = () => {
  const { invalidate } = useThree();
  const lastRef = useRef(0);

  useFrame(({ clock }) => {
    if (clock.elapsedTime - lastRef.current > 0.083) {
      lastRef.current = clock.elapsedTime;
      invalidate();
    }
  });

  return null;
};

const ContactExperience = () => {
  // added: lazy-mount canvas
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0, rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <Canvas
          shadows
          camera={{ position: [-5, 6, 16], fov: 35 }}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          dpr={1}
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
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white-50/40 text-sm">
          Loading 3D...
        </div>
      )}
    </div>
  );
};

export default ContactExperience;