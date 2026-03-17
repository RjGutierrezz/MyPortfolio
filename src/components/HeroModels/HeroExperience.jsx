import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Tokyo2 } from './Tokyo2.jsx'
import Particles from './Particles'
import { useRef, useEffect, useState } from 'react'

// changed: invalidate at ~12fps instead of ~20fps
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

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const squareSize = isMobile ? "min(90vw, 420px)" : isTablet ? "500px" : "600px";

    // added: only mount Canvas when visible
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
        { threshold: 0, rootMargin: '200px' }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto rounded-2xl glass-card--static overflow-hidden"
      style={{
        width: squareSize,
        aspectRatio: "1 / 1",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        aria-hidden="true"
      />

      {isVisible && (
        <Canvas
          camera={{position: [0, 0, 13], fov: 40}}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          dpr={1}
          frameloop="demand"
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <SlowInvalidate />
          <OrbitControls
              enablePan={false}
              enableZoom={!isTablet}
              maxDistance={20}
              minDistance={5}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2}
          />

          <Particles count={30}/>
          <group
            scale={isMobile ? 0.72 : 0.95}
            position={[0, 3.6, 0]}
            rotation={[0, -Math.PI / 40, 0.0]}
          >
            <Tokyo2/>
          </group>
        </Canvas>
      )}
    </div>
  )
}

export default HeroExperience