import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { DirectionalLight, MeshStandardMaterial } from 'three'
import {useMediaQuery} from 'react-responsive'
import { Room } from './Room.jsx'
import { Tokyo } from './Tokyo.jsx'
import { Tokyo2 } from './Tokyo2.jsx'
import { Test} from './Test.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45}}>
        <ambientLight intensity ={0.2} color="#1a1a40"/>
        <directionalLight position={[5, 5, 5]} intensity={10}/>

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        {/* <Room /> */}
        <group
        scale={isMobile? 0.7 : 1} position={[0, 3.8, 0]} rotation={[0, -Math.PI / 40, 0.0]}>
          <Tokyo2/>
        </group>
    </Canvas>
  )
}

export default HeroExperience