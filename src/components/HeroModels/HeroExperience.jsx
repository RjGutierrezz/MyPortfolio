import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { DirectionalLight, MeshStandardMaterial } from 'three'
import {useMediaQuery} from 'react-responsive'
import { Tokyo2 } from './Tokyo2.jsx'
import Particles from './Particles'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    // changed: tiny bit smaller than previous
    const squareSize = isMobile ? "min(90vw, 420px)" : isTablet ? "500px" : "600px";

  return (
    <div
      // changed: make card background translucent instead of solid
      className="relative mx-auto rounded-2xl border border-[#3d5a80] bg-[#1b263b]/35 backdrop-blur-[10px] overflow-hidden"
      style={{
        width: squareSize,
        aspectRatio: "1 / 1",
      }}
    >
      {/* added: inset shadow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        aria-hidden="true"
      />

      <Canvas
        camera={{position: [0, 0, 13], fov: 40}}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          // transparent clear so parent "glass" background shows through
          gl.setClearColor(0x000000, 0);
        }}
      >
        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        <Particles count={100}/>
        <group
          // changed: tiny scale reduction to match the slightly smaller card
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