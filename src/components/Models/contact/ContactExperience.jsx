import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Island } from "./Island";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-5, 6, 16], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => {
        // transparent clear so parent container/background shows through
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.8} color="#fff4e6" />

      <directionalLight position={[5, 9, 3]} intensity={5} color="#fff4e6" />

      <OrbitControls
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
      </group>

      <Center>
        <Island/>
      </Center>

    </Canvas>
  );
};

export default ContactExperience;