import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Tokyo2 } from './Tokyo2.jsx'
import Particles from './Particles'
import { useRef, useEffect } from 'react'

// added: component that invalidates on interval so "demand" mode still animates slowly
const SlowInvalidate = () => {
  const { invalidate } = useThree();
  const lastRef = useRef(0);

  useFrame(({ clock }) => {
    // invalidate at ~20fps for slow ambient motion
    if (clock.elapsedTime - lastRef.current > 0.05) {
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

  return (
    <div
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

      <Canvas
        camera={{position: [0, 0, 13], fov: 40}}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        dpr={Math.min(window.devicePixelRatio || 1, 1.5)}
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

        <Particles count={50}/>
        <group
          scale={isMobile ? 0.72 : 0.95}
          position={[0, 3.6, 0]}
          rotation={[0, -Math.PI / 40, 0.0]}
        >
          <Tokyo2/>
        </group>
      </Canvas>
    </div>
  )
}

export default HeroExperience