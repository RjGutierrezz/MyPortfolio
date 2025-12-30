import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";
import { Island } from "./Island";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [-5, 6, 16], fov: 35 }}>
      <color attach="background" args={["#1E1B4B"]} />
      <ambientLight intensity={0.8} color="#fff4e6" />

      <directionalLight position={[5, 9, 3]} intensity={5} color="#fff4e6" />

      {/* <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      /> */}

      <OrbitControls
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
      </group>


      {/* <Computer /> */}
      <Center>
        <Island/>
      </Center>

    </Canvas>
  );
};

export default ContactExperience;