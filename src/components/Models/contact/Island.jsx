import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Island(props) {
  const { nodes, materials } = useGLTF('/models/low_poly_floating_island.glb')
  return (
    <group
      {...props}
      scale={0.01}       
      position={[0, -25, 2]}
      rotation={[0, Math.PI/14, 0]}
      dispose={null}
    >
      <group position={[314.76, 386.481, 76.624]} rotation={[-Math.PI / 2, -0.095, -1.579]} scale={[51.63, 63.846, 31.972]}>
        <mesh geometry={nodes.Casa_Tejado_0.geometry} material={materials.Tejado} />
        <mesh geometry={nodes.Casa_Casa1_0.geometry} material={materials.Casa1} />
      </group>
      <group position={[321.599, 314.952, 76.624]} rotation={[-1.571, -0.097, -1.579]} scale={40.563}>
        <mesh geometry={nodes.Cube_maderaCasa_0.geometry} material={materials.maderaCasa} />
        <mesh geometry={nodes.Cube_Casa1_0.geometry} material={materials.Casa1} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes['Isla_Terreno_-_Verde_0'].geometry} material={materials['Terreno_-_Verde']} />
        <mesh geometry={nodes['Isla_Terreno-Base_0'].geometry} material={materials['Terreno-Base']} />
        <mesh geometry={nodes['Isla_Terreno-_Roca_0'].geometry} material={materials['Terreno-_Roca']} />
        <mesh geometry={nodes['Isla_Terreno-_Camino_0'].geometry} material={materials['Terreno-_Camino']} />
        <mesh geometry={nodes['Isla_Terreno-_Nieve_0'].geometry} material={materials['Terreno-_Nieve']} />
      </group>
      <group position={[0, 284.962, 77.939]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[8.576, 6.539, 6.684]}>
        <mesh geometry={nodes['Espada_Espada_-_Culo_0'].geometry} material={materials['Espada_-_Culo']} />
        <mesh geometry={nodes['Espada_Espada_-_Oro_0'].geometry} material={materials['Espada_-_Oro']} />
        <mesh geometry={nodes['Espada_Espada_-_Mango_0'].geometry} material={materials['Espada_-_Mango']} />
        <mesh geometry={nodes['Espada_Espada_-_Metal_0'].geometry} material={materials['Espada_-_Metal']} />
        <mesh geometry={nodes['Espada_Espada_-_Pa��uelo_0'].geometry} material={materials['Espada_-_Pauelo']} />
      </group>
      <group position={[0, 261.456, 79.584]} rotation={[-Math.PI / 2, 0, 0]} scale={14.932}>
        <mesh geometry={nodes['Torii_Torii-Gris_0'].geometry} material={materials['Torii-Gris']} />
        <mesh geometry={nodes['Torii_Torii-_Negro_0'].geometry} material={materials['Torii-_Negro']} />
        <mesh geometry={nodes['Torii_Torii-_Rojo_0'].geometry} material={materials['Torii-_Rojo']} />
      </group>
      <group position={[-74.082, 288.709, -272.128]} rotation={[-Math.PI / 2, 0, 0.464]} scale={100}>
        <mesh geometry={nodes.Roca_Roca_0.geometry} material={materials.Roca} />
        <mesh geometry={nodes.Roca_Roca2_0.geometry} material={materials.Roca2} />
      </group>
      <group position={[-354.424, 281.857, 226.041]} rotation={[-Math.PI / 2, 0, 1.622]} scale={43.492}>
        <mesh geometry={nodes.Roca001_Roca2_0.geometry} material={materials.Roca2} />
        <mesh geometry={nodes.Roca001_Roca_0.geometry} material={materials.Roca} />
      </group>
      <group position={[339.227, 284.694, -56.046]} rotation={[-1.192, 0.329, 2.11]} scale={43.492}>
        <mesh geometry={nodes.Roca002_Roca_0.geometry} material={materials.Roca} />
        <mesh geometry={nodes.Roca002_Roca2_0.geometry} material={materials.Roca2} />
      </group>
      <group position={[193.003, 263.949, 293.755]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes['Tronco2_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
        <mesh geometry={nodes['Tronco2_Arbol-_Tronco2_0'].geometry} material={materials['Arbol-_Tronco2']} />
      </group>
      <group position={[12.395, 232.294, 132.229]} rotation={[-Math.PI / 2, 0, 0]} scale={58.285}>
        <mesh geometry={nodes['Tronco001_Arbol-_Tronco2_0'].geometry} material={materials['Arbol-_Tronco2']} />
        <mesh geometry={nodes['Tronco001_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
      </group>
      <group position={[-244.993, 237.393, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={57.442}>
        <mesh geometry={nodes['Tronco_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
        <mesh geometry={nodes['Tronco_Arbol-_Tronco2_0'].geometry} material={materials['Arbol-_Tronco2']} />
      </group>
      <group position={[-179.804, 255.266, 364.22]} rotation={[-Math.PI / 2, 0, 1.363]} scale={38.087}>
        <mesh geometry={nodes['Tronco003_Arbol-_Tronco2_0'].geometry} material={materials['Arbol-_Tronco2']} />
        <mesh geometry={nodes['Tronco003_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
      </group>
      <group position={[213.525, 263.652, -186.3]} rotation={[-Math.PI / 2, 0, 1.09]} scale={40.628}>
        <mesh geometry={nodes['Tronco002_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
        <mesh geometry={nodes['Tronco002_Arbol-_Tronco2_0'].geometry} material={materials['Arbol-_Tronco2']} />
      </group>
      <group position={[124.812, 396.052, 292.278]} rotation={[-Math.PI / 2, 0, 0]} scale={27.439}>
        <mesh geometry={nodes['Hojas001_Arbol_-_Hoja1_0'].geometry} material={materials['Arbol_-_Hoja1']} />
        <mesh geometry={nodes['Hojas001_Arbol_-_Hoja2_0'].geometry} material={materials['Arbol_-_Hoja2']} />
        <mesh geometry={nodes['Hojas001_Arbol_-_Hoja3_0'].geometry} material={materials['Arbol_-_Hoja3']} />
      </group>
      <group position={[124.812, 396.052, 293.755]} rotation={[-Math.PI / 2, 0, 0]} scale={27.439}>
        <mesh geometry={nodes['Hojas_Arbol_-_Hoja2_0'].geometry} material={materials['Arbol_-_Hoja2']} />
        <mesh geometry={nodes['Hojas_Arbol_-_Hoja1_0'].geometry} material={materials['Arbol_-_Hoja1']} />
        <mesh geometry={nodes['Hojas_Arbol_-_Hoja3_0'].geometry} material={materials['Arbol_-_Hoja3']} />
      </group>
      <group position={[256.979, 275.705, 185.451]} rotation={[-Math.PI / 2, 0, 0.325]} scale={100}>
        <mesh geometry={nodes['Cylinder001_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
        <mesh geometry={nodes['Cylinder001_Arbol-_Tronco3_0'].geometry} material={materials['Arbol-_Tronco3']} />
      </group>
      <group position={[257.307, 284.44, 171.704]} rotation={[-Math.PI / 2, 0, 0]} scale={14.435}>
        <mesh geometry={nodes['Cylinder_Arbol-_Tronco1_0'].geometry} material={materials['Arbol-_Tronco1']} />
        <mesh geometry={nodes['Cylinder_Arbol-_Tronco3_0'].geometry} material={materials['Arbol-_Tronco3']} />
      </group>
      <group position={[247.197, 299.368, 165.859]} rotation={[-0.225, -0.22, -0.523]} scale={11.427}>
        <mesh geometry={nodes['Hacha_Hacha-_Madera_0'].geometry} material={materials['Hacha-_Madera']} />
        <mesh geometry={nodes['Hacha_Hacha-_metal_0'].geometry} material={materials['Hacha-_metal']} />
      </group>
      <mesh geometry={nodes.Cube001_maderaCasa_0.geometry} material={materials.maderaCasa} position={[320.753, 324.611, 67.102]} rotation={[-Math.PI / 2, -0.095, -1.579]} scale={40.563} />
      <mesh geometry={nodes.Tablero_Puente_0.geometry} material={materials.Puente} position={[0, 253.408, -71.912]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Agua_Agua_0.geometry} material={materials.Agua} position={[-8.484, 256.139, 10.726]} rotation={[-Math.PI / 2, 0, 2.863]} scale={493.222} />
      <mesh geometry={nodes['Adorno_Adorno-_Roca_0'].geometry} material={materials['Adorno-_Roca']} position={[35.634, 250.951, -41.017]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes['Adorno001_Adorno-_Roca_0'].geometry} material={materials['Adorno-_Roca']} position={[-30.202, 250.951, -41.017]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane003_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-218.549, 220.028, -9.299]} rotation={[0.885, -0.614, -2.165]} scale={29.397} />
      <mesh geometry={nodes.Plane004_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[272.039, 204.035, -154.609]} rotation={[1.078, 0.507, 2.729]} scale={33.824} />
      <mesh geometry={nodes.Plane005_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-174.223, 232.725, -7.926]} rotation={[-2.895, -1.148, 3.062]} scale={34.178} />
      <mesh geometry={nodes.Plane006_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[175.984, 293.322, 133.551]} rotation={[1.945, 0.551, -2.013]} scale={31.558} />
      <mesh geometry={nodes.Plane007_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-86.923, 219.904, 374.804]} rotation={[0.94, -0.438, 1.225]} scale={34.266} />
      <mesh geometry={nodes.Plane008_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[64.674, 214.668, 150.28]} rotation={[-1.738, -0.615, -2.835]} scale={32.106} />
      <mesh geometry={nodes.Plane009_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-148.596, 211.838, 26.447]} rotation={[-0.139, -0.103, 0.812]} scale={31.656} />
      <mesh geometry={nodes.Plane010_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[241.956, 242.684, 349.114]} rotation={[-2.252, 0.118, -2.92]} scale={32.008} />
      <mesh geometry={nodes.Plane011_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[110.316, 253.44, 118.997]} rotation={[0.527, 0.271, -0.231]} scale={31.662} />
      <mesh geometry={nodes.Plane012_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[196.475, 252.794, 120.161]} rotation={[2.581, -0.902, 0.821]} scale={31.945} />
      <mesh geometry={nodes.Plane013_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[194.649, 287.837, 92.122]} rotation={[-1.906, -0.362, -0.377]} scale={32.689} />
      <mesh geometry={nodes.Plane014_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[247.229, 235.344, 317.428]} rotation={[-0.398, 1.028, 1.992]} scale={34.346} />
      <mesh geometry={nodes.Plane015_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-95.126, 210.902, 391.362]} rotation={[0.692, -0.03, -0.824]} scale={31.766} />
      <mesh geometry={nodes.Plane016_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[233.855, 234.801, 300.43]} rotation={[2.313, -0.024, 2.677]} scale={32.894} />
      <mesh geometry={nodes.Plane017_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-61.959, 249.911, 326.998]} rotation={[-0.94, 0.449, 2.19]} scale={33.351} />
      <mesh geometry={nodes.Plane018_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-97.393, 189.906, 386.244]} rotation={[-1.179, 0.047, -1.881]} scale={31.102} />
      <mesh geometry={nodes.Plane019_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[302.931, 282.848, 281.37]} rotation={[1.698, 0.931, -1.98]} scale={30.5} />
      <mesh geometry={nodes.Plane020_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-164.48, 215.184, 32.703]} rotation={[1.169, 0.011, 0.56]} scale={31.68} />
      <mesh geometry={nodes.Plane021_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[158.258, 281.977, 146.523]} rotation={[2.339, -0.33, -0.574]} scale={30.45} />
      <mesh geometry={nodes.Plane022_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[56.738, 215.263, 107.294]} rotation={[-0.246, 0.963, -3.131]} scale={31.377} />
      <mesh geometry={nodes.Plane023_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[306.716, 285.77, 268.822]} rotation={[-2.552, -0.616, -2.67]} scale={33.469} />
      <mesh geometry={nodes.Plane024_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-89.26, 228.543, -25.404]} rotation={[-0.402, 0.699, 0.494]} scale={30.167} />
      <mesh geometry={nodes.Plane025_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[301.347, 286.997, 281.37]} rotation={[2.924, -0.776, 1.48]} scale={31.461} />
      <mesh geometry={nodes.Plane026_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-82.483, 259.267, 309.483]} rotation={[-0.502, 1.151, -0.652]} scale={33.982} />
      <mesh geometry={nodes.Plane027_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[189.176, 304.097, 108.641]} rotation={[-2.797, -0.544, -2.247]} scale={34.998} />
      <mesh geometry={nodes.Plane028_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[55.495, 220.254, 157.829]} rotation={[-2.857, 0.507, -2.371]} scale={29.899} />
      <mesh geometry={nodes.Plane029_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[202.178, 270.419, 278.444]} rotation={[0.522, 0.074, 1.012]} scale={32.116} />
      <mesh geometry={nodes.Plane030_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[205.794, 253.973, 281.607]} rotation={[-0.615, -0.996, -2.663]} scale={31.963} />
      <mesh geometry={nodes.Plane031_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[73.481, 237.212, 194.515]} rotation={[1.59, 0.475, -2.608]} scale={34.628} />
      <mesh geometry={nodes.Plane032_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-89.48, 238.204, 14.54]} rotation={[0.768, 1.068, 1.894]} scale={31.683} />
      <mesh geometry={nodes.Plane033_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[156.922, 310.038, 128.606]} rotation={[0.305, -0.089, -1.497]} scale={32.89} />
      <mesh geometry={nodes.Plane034_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[37.673, 281.582, 169.929]} rotation={[1.395, 0.395, 3.083]} scale={34.683} />
      <mesh geometry={nodes.Plane035_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[117.742, 269.735, 108.231]} rotation={[-0.187, 0.785, 2.35]} scale={33.383} />
      <mesh geometry={nodes.Plane036_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[225.654, 284.883, 328.105]} rotation={[1.597, -0.543, -1.626]} scale={30.435} />
      <mesh geometry={nodes.Plane037_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-116.62, 263.225, -2.765]} rotation={[-2.815, 0.932, -0.504]} scale={34.029} />
      <mesh geometry={nodes.Plane038_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[195.019, 286.869, 287.714]} rotation={[-0.258, -0.783, -0.812]} scale={31.799} />
      <mesh geometry={nodes.Plane039_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-222.152, 251.252, -20.149]} rotation={[2.32, 0.331, 2.897]} scale={34.392} />
      <mesh geometry={nodes.Plane040_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[322.546, 292.213, 247.786]} rotation={[2.434, 0.379, -1.407]} scale={33.919} />
      <mesh geometry={nodes.Plane041_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[297.424, 256.942, -177.361]} rotation={[1.092, -1.288, 1.037]} scale={29.418} />
      <mesh geometry={nodes.Plane042_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[72.525, 234.651, 168.445]} rotation={[3.031, 0.705, 2.897]} scale={31.877} />
      <mesh geometry={nodes.Plane043_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-219.267, 222.159, -18.751]} rotation={[1.549, -0.948, -1.337]} scale={32.631} />
      <mesh geometry={nodes.Plane044_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-87.715, 255.253, 380.386]} rotation={[1.831, -0.599, 2.111]} scale={32.083} />
      <mesh geometry={nodes.Plane045_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[79.129, 276.866, 160.662]} rotation={[-1.342, 0.173, -2.983]} scale={30.59} />
      <mesh geometry={nodes.Plane046_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[62.509, 230.875, 93.224]} rotation={[-0.98, -0.452, 0.029]} scale={34.477} />
      <mesh geometry={nodes.Plane047_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-80.772, 243.398, 313.107]} rotation={[-1.505, -0.648, 1.888]} scale={33.596} />
      <mesh geometry={nodes.Plane048_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[58.497, 258.364, 114.955]} rotation={[0.49, 0.896, -2.596]} scale={32.003} />
      <mesh geometry={nodes.Plane049_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[272.234, 241.944, -157.158]} rotation={[0.102, 0.182, -2.467]} scale={34.679} />
      <mesh geometry={nodes.Plane050_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-150.861, 279.74, 10.887]} rotation={[-2.31, -0.227, -1.251]} scale={32.504} />
      <mesh geometry={nodes.Plane051_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[66.775, 265.327, 136.725]} rotation={[-0.397, 0.244, 0.551]} scale={32.55} />
      <mesh geometry={nodes.Plane052_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[193.075, 291.679, 298.839]} rotation={[-2.452, -1.157, -3.14]} scale={34.66} />
      <mesh geometry={nodes.Plane053_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[173.282, 281.338, 138.128]} rotation={[-1.669, -0.692, 0.872]} scale={31.429} />
      <mesh geometry={nodes.Plane054_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[300.323, 271.705, 267.489]} rotation={[0.223, -0.793, -3.049]} scale={34.775} />
      <mesh geometry={nodes.Plane055_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[110.755, 278.365, 113.663]} rotation={[1.201, 0.762, 2.515]} scale={31.656} />
      <mesh geometry={nodes.Plane056_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-214.028, 255.871, -28.709]} rotation={[0.739, 0.189, -2.646]} scale={31.157} />
      <mesh geometry={nodes.Plane057_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-85.781, 241.194, 396.667]} rotation={[-1.566, 1.036, -1.578]} scale={34.553} />
      <mesh geometry={nodes.Plane058_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[119.103, 207.62, 152.457]} rotation={[0.379, -0.797, -0.626]} scale={31.407} />
      <mesh geometry={nodes.Plane059_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-97.297, 253.347, -4.26]} rotation={[-2.148, -0.481, 0.461]} scale={29.881} />
      <mesh geometry={nodes.Plane060_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[45.942, 293.807, 205.45]} rotation={[-1.134, 0.831, -3.137]} scale={33.171} />
      <mesh geometry={nodes.Plane061_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[216.023, 258.813, 290.254]} rotation={[-1.386, -0.833, -0.375]} scale={30.596} />
      <mesh geometry={nodes.Plane062_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-88.464, 253.704, 348.612]} rotation={[-1.064, -0.4, 1.951]} scale={29.472} />
      <mesh geometry={nodes.Plane063_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-90.633, 283.013, 317.952]} rotation={[-0.494, 0.295, -2.313]} scale={33.832} />
      <mesh geometry={nodes.Plane064_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[293.635, 272.686, 224.594]} rotation={[2.786, 1.267, 1.758]} scale={34.785} />
      <mesh geometry={nodes.Plane065_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[53.825, 309.988, 184.175]} rotation={[1.709, 0.404, 2.438]} scale={33.76} />
      <mesh geometry={nodes.Plane066_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-202.001, 260.536, 25.947]} rotation={[0.097, 0.538, 2.662]} scale={32.899} />
      <mesh geometry={nodes.Plane067_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[65.277, 256.629, 192.723]} rotation={[1.152, 0.43, -2.64]} scale={34.299} />
      <mesh geometry={nodes.Plane068_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[333.13, 264.238, -194.969]} rotation={[0.339, 0.805, 2.916]} scale={29.81} />
      <mesh geometry={nodes.Plane069_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[169.819, 334.229, 116.38]} rotation={[-1.748, 0.242, -1.812]} scale={31.55} />
      <mesh geometry={nodes.Plane070_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[293.095, 279.752, -172.179]} rotation={[0.923, 0.604, -1.53]} scale={34.183} />
      <mesh geometry={nodes.Plane071_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-234.383, 243.487, -14.93]} rotation={[3.027, -0.32, 0.206]} scale={33.946} />
      <mesh geometry={nodes.Plane072_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-94.365, 264.775, 370.421]} rotation={[2.073, 0.297, 0.609]} scale={34.535} />
      <mesh geometry={nodes.Plane073_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[324.488, 273.948, -177.692]} rotation={[-2.71, -0.345, 1.636]} scale={33.065} />
      <mesh geometry={nodes.Plane074_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[240.882, 303.404, 302.916]} rotation={[0.57, 0.039, 2.689]} scale={34.711} />
      <mesh geometry={nodes.Plane075_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-126.1, 263.947, 12.909]} rotation={[-1.215, 0.985, 3.037]} scale={32.222} />
      <mesh geometry={nodes.Plane076_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[218.735, 311.9, 343.339]} rotation={[-0.589, -0.157, 3.02]} scale={31.594} />
      <mesh geometry={nodes.Plane077_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[216.68, 322.393, 272.133]} rotation={[0.282, 1.023, 3.071]} scale={30.156} />
      <mesh geometry={nodes.Plane078_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[208.385, 274.805, 279.53]} rotation={[-1.936, 1.053, -0.578]} scale={33.045} />
      <mesh geometry={nodes.Plane079_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[219.945, 328.908, 281.53]} rotation={[-0.942, 0.165, 0.519]} scale={34.869} />
      <mesh geometry={nodes.Plane080_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[294.052, 310.167, 254.626]} rotation={[2.719, -0.067, -3.134]} scale={34.301} />
      <mesh geometry={nodes.Plane081_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-105.213, 291.797, 332.954]} rotation={[-0.927, -0.396, 0.167]} scale={32.619} />
      <mesh geometry={nodes.Plane082_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-59.978, 245.231, 395.687]} rotation={[-2.059, -0.407, -3.125]} scale={32.881} />
      <mesh geometry={nodes.Plane083_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-51.949, 259.106, 402.786]} rotation={[-1.22, -0.439, 0.402]} scale={34.05} />
      <mesh geometry={nodes.Plane084_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[131.35, 305.406, 105.569]} rotation={[-0.533, -0.961, 2.722]} scale={32.794} />
      <mesh geometry={nodes.Plane085_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[176.343, 340.511, 98.141]} rotation={[-0.39, 0.807, -2.61]} scale={33.739} />
      <mesh geometry={nodes.Plane086_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[67.987, 268.547, 173.226]} rotation={[-0.926, 0.74, -1.353]} scale={34.188} />
      <mesh geometry={nodes.Plane087_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[119.863, 227.24, 141.096]} rotation={[-2.855, 0.537, 0.904]} scale={30.994} />
      <mesh geometry={nodes.Plane088_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[302.883, 298.419, 217.385]} rotation={[2.451, -0.409, 2.756]} scale={32.935} />
      <mesh geometry={nodes.Plane089_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-75.696, 230.836, 354.404]} rotation={[-0.882, 1.198, 2.61]} scale={31.258} />
      <mesh geometry={nodes.Plane090_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-171.293, 274.467, 48.034]} rotation={[1.531, -1.189, 1.987]} scale={31.837} />
      <mesh geometry={nodes.Plane091_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[33.793, 277.588, 208.606]} rotation={[-0.48, 0.668, 0.841]} scale={31.926} />
      <mesh geometry={nodes.Plane092_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-101.566, 271.564, 2.21]} rotation={[-0.341, -0.447, -2.635]} scale={29.991} />
      <mesh geometry={nodes.Plane093_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[205.498, 296.165, 350.835]} rotation={[-2.194, 0.019, -0.317]} scale={30.194} />
      <mesh geometry={nodes.Plane094_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-98.397, 255.659, 402.986]} rotation={[-1.269, 1.123, 1.492]} scale={29.416} />
      <mesh geometry={nodes.Plane095_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[302.126, 287.414, -183.185]} rotation={[2.942, -1.326, 2.821]} scale={30.721} />
      <mesh geometry={nodes.Plane096_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-81.774, 249.481, 411.701]} rotation={[0.327, 1.051, -0.44]} scale={32.975} />
      <mesh geometry={nodes.Plane097_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-132.456, 299.825, -2.765]} rotation={[-1.691, -0.173, 2.117]} scale={34.552} />
      <mesh geometry={nodes.Plane098_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[226.01, 313.991, 323.017]} rotation={[1.216, 0.162, 2.199]} scale={31.043} />
      <mesh geometry={nodes.Plane099_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-174.63, 266.997, 25.982]} rotation={[-2.112, 0.007, -1.167]} scale={29.874} />
      <mesh geometry={nodes.Plane100_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-111.209, 282.985, 380.098]} rotation={[-0.649, 1.084, 0.555]} scale={33.834} />
      <mesh geometry={nodes.Plane101_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[312.802, 248.152, 299.721]} rotation={[2.971, -0.794, 1.887]} scale={34.42} />
      <mesh geometry={nodes.Plane102_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[28.383, 269.923, 173.355]} rotation={[-2.328, -0.242, 0.761]} scale={34.72} />
      <mesh geometry={nodes.Plane103_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[182.196, 325.494, 276.338]} rotation={[2.685, -0.744, 3.016]} scale={33.563} />
      <mesh geometry={nodes.Plane104_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[65.918, 282.548, 207.871]} rotation={[-0.885, 0.796, 1.4]} scale={32.314} />
      <mesh geometry={nodes.Plane105_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[66.707, 283.331, 195.738]} rotation={[0.65, -0.435, -2.069]} scale={31.993} />
      <mesh geometry={nodes.Plane106_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[270.207, 325.114, 288.884]} rotation={[1.361, 0.808, 1.733]} scale={34.097} />
      <mesh geometry={nodes.Plane107_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-92.715, 266.896, 2.673]} rotation={[-0.386, 1.016, -2.663]} scale={34.12} />
      <mesh geometry={nodes.Plane108_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[292.547, 303.668, 261.635]} rotation={[1.372, 0.7, 2.859]} scale={29.729} />
      <mesh geometry={nodes.Plane109_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-208.286, 320.319, 12.419]} rotation={[-2.402, 1.112, -1.019]} scale={29.736} />
      <mesh geometry={nodes.Plane110_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[140.426, 356.353, 131.569]} rotation={[-0.195, -0.898, -0.164]} scale={31.283} />
      <mesh geometry={nodes.Plane111_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-122.363, 281.139, -13.591]} rotation={[-1.522, -0.482, 1.194]} scale={34.642} />
      <mesh geometry={nodes.Plane112_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[86.493, 301.04, 141.866]} rotation={[-1.975, -0.232, -2.25]} scale={34.006} />
      <mesh geometry={nodes.Plane113_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[111.291, 236.212, 155.497]} rotation={[-0.898, 0.116, 0.821]} scale={30.334} />
      <mesh geometry={nodes.Plane114_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-223.048, 310.096, 11.43]} rotation={[-2.084, -0.401, 2.651]} scale={30.884} />
      <mesh geometry={nodes.Plane115_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-94.869, 236.218, 349.506]} rotation={[-2.54, 0.607, -0.006]} scale={29.737} />
      <mesh geometry={nodes.Plane116_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[125.953, 243.235, 156.027]} rotation={[1.561, 0.213, 2.697]} scale={29.651} />
      <mesh geometry={nodes.Plane117_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[308.613, 257.633, -231.983]} rotation={[2.452, 0.935, -1.171]} scale={34.65} />
      <mesh geometry={nodes.Plane118_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[170.18, 315.315, 284.932]} rotation={[0.753, -0.489, -1.558]} scale={33.462} />
      <mesh geometry={nodes.Plane119_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[319.289, 280.371, -197.133]} rotation={[1.65, -0.278, -0.021]} scale={31.562} />
      <mesh geometry={nodes.Plane120_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-194.2, 290.796, 46.988]} rotation={[0.634, -0.798, -3.088]} scale={30.908} />
      <mesh geometry={nodes.Plane121_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-90.128, 285.662, 421.369]} rotation={[2.964, 0.565, -1.167]} scale={34.249} />
      <mesh geometry={nodes.Plane122_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-214.506, 318.252, 3.647]} rotation={[-0.354, 0.413, -0.816]} scale={32.644} />
      <mesh geometry={nodes.Plane123_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-127.604, 323.931, 25.895]} rotation={[1.989, 0.788, 1.8]} scale={33.809} />
      <mesh geometry={nodes.Plane124_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[298.287, 268.578, 297.301]} rotation={[1.229, -0.907, 2.983]} scale={33.969} />
      <mesh geometry={nodes.Plane125_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-179.328, 291.148, 41.099]} rotation={[1.434, 0.98, -0.128]} scale={32.593} />
      <mesh geometry={nodes.Plane126_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[190.273, 344.293, 267.669]} rotation={[-1.389, -0.354, 2.91]} scale={34.176} />
      <mesh geometry={nodes.Plane127_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[200.239, 300.605, 323.597]} rotation={[-2.244, 1.409, -0.761]} scale={33.104} />
      <mesh geometry={nodes.Plane128_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[6.745, 310.668, 174.355]} rotation={[-1.463, 0.284, -0.257]} scale={30.924} />
      <mesh geometry={nodes.Plane129_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-133.143, 323.706, 37.808]} rotation={[1.736, 1.174, 3.026]} scale={30.137} />
      <mesh geometry={nodes.Plane130_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-174.363, 302.43, 1.919]} rotation={[0.729, 0.168, 1.241]} scale={33.555} />
      <mesh geometry={nodes.Plane131_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[280.047, 315.728, 280.939]} rotation={[-1.417, 0.154, -3.058]} scale={34.181} />
      <mesh geometry={nodes.Plane132_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[98.322, 350.812, 143.629]} rotation={[-1.721, 0.063, -0.29]} scale={32.978} />
      <mesh geometry={nodes.Plane133_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[286.198, 314.894, 223.484]} rotation={[-1.688, 0.6, 1.713]} scale={31.381} />
      <mesh geometry={nodes.Plane134_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[161.7, 324.664, 123.29]} rotation={[-2.277, -0.638, -1.788]} scale={34.823} />
      <mesh geometry={nodes.Plane135_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[300.444, 297.325, -196.71]} rotation={[1.119, 0.261, -2.415]} scale={31.622} />
      <mesh geometry={nodes.Plane136_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-84.396, 305.125, 412.334]} rotation={[-1.816, -1.344, 1.355]} scale={33.295} />
      <mesh geometry={nodes.Plane137_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[307.81, 290.501, -196.855]} rotation={[0.51, 0.107, 0.871]} scale={31.83} />
      <mesh geometry={nodes.Plane138_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-91.863, 260.876, 347.345]} rotation={[2.819, -1.479, 2.93]} scale={34.901} />
      <mesh geometry={nodes.Plane139_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-212.592, 337.444, 35.661]} rotation={[2.55, 1.086, 2.849]} scale={32.01} />
      <mesh geometry={nodes.Plane140_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[153.07, 371.885, 111.717]} rotation={[1.075, -0.519, -0.355]} scale={31.903} />
      <mesh geometry={nodes.Plane141_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-117.168, 304.082, -10.052]} rotation={[1.813, -1.022, 1.029]} scale={33.919} />
      <mesh geometry={nodes.Plane142_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-195.65, 349.347, 14.881]} rotation={[-1.049, 0.258, 1.976]} scale={30.185} />
      <mesh geometry={nodes.Plane143_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[297.074, 304.903, -217.225]} rotation={[-1.728, 0.254, -1.94]} scale={29.997} />
      <mesh geometry={nodes.Plane144_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-217.468, 334.175, 8.492]} rotation={[1.957, 0.097, 2.724]} scale={29.875} />
      <mesh geometry={nodes.Plane145_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[69.806, 334.7, 122.874]} rotation={[1.406, 1.451, 0.695]} scale={31.215} />
      <mesh geometry={nodes.Plane146_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[249.309, 276.883, -150.208]} rotation={[0.778, -1.303, 1.23]} scale={33.09} />
      <mesh geometry={nodes.Plane147_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-126.549, 327.817, 306.733]} rotation={[-1.381, -0.022, 1.14]} scale={31.47} />
      <mesh geometry={nodes.Plane148_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-133.359, 268.087, 379.737]} rotation={[-1.928, -0.773, -2.478]} scale={29.939} />
      <mesh geometry={nodes.Plane149_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-142.734, 332.651, 29.649]} rotation={[-1.631, 0.044, 0.942]} scale={31.618} />
      <mesh geometry={nodes.Plane150_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-117.844, 325.095, 357.249]} rotation={[-1.656, -0.548, 2.598]} scale={33.437} />
      <mesh geometry={nodes.Plane151_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-129.648, 324.383, 338.665]} rotation={[-2.681, 0.619, -0.73]} scale={34.082} />
      <mesh geometry={nodes.Plane152_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[35.22, 314.251, 102.531]} rotation={[2.337, 0.289, 2.286]} scale={30.409} />
      <mesh geometry={nodes.Plane153_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[289.171, 326.226, -160.51]} rotation={[1.642, 0.984, 0.508]} scale={33.466} />
      <mesh geometry={nodes.Plane154_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-122.961, 303.787, 309.778]} rotation={[-1.76, -0.403, -1.617]} scale={30.063} />
      <mesh geometry={nodes.Plane155_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[178.973, 324.901, 270.729]} rotation={[-3.085, 0.494, 1.573]} scale={29.99} />
      <mesh geometry={nodes.Plane156_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[302.363, 341.413, 236.747]} rotation={[2.173, 0.781, 0.645]} scale={33.99} />
      <mesh geometry={nodes.Plane157_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[250.264, 338.104, 278.746]} rotation={[1.64, -1.107, 2.667]} scale={31.53} />
      <mesh geometry={nodes.Plane158_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-155.826, 329.67, 18.004]} rotation={[2.358, 1.182, -2.373]} scale={31.907} />
      <mesh geometry={nodes.Plane159_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[103.187, 283.714, 155.335]} rotation={[0.75, -1.117, -0.643]} scale={32.955} />
      <mesh geometry={nodes.Plane160_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[271.758, 354.361, 213.4]} rotation={[2.252, -0.061, 1.121]} scale={33.376} />
      <mesh geometry={nodes.Plane161_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-112.269, 294.756, 383.953]} rotation={[3.079, -1.41, -1.477]} scale={31.911} />
      <mesh geometry={nodes.Plane162_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[293.05, 288.092, -239.217]} rotation={[1.795, -0.05, -3.074]} scale={34.011} />
      <mesh geometry={nodes.Plane163_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[70.319, 325.758, 151.478]} rotation={[2.159, -0.333, -2.018]} scale={34.486} />
      <mesh geometry={nodes.Plane164_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[206.024, 352.356, 328.818]} rotation={[-0.42, 0.489, 1.183]} scale={30.819} />
      <mesh geometry={nodes.Plane165_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[251.897, 354.156, 286.248]} rotation={[-0.517, 0.032, -2.548]} scale={29.631} />
      <mesh geometry={nodes.Plane166_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[235.041, 327.606, 314.587]} rotation={[2.087, 0.873, 0.882]} scale={33.231} />
      <mesh geometry={nodes.Plane167_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[315.605, 306.016, -200.535]} rotation={[2.632, 1.43, 0.609]} scale={33.78} />
      <mesh geometry={nodes.Plane168_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[239.631, 287.851, -136.664]} rotation={[-2.115, 0.031, -0.557]} scale={34.146} />
      <mesh geometry={nodes.Plane169_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[265.515, 319.552, -148.316]} rotation={[-1.517, -0.052, 0.723]} scale={31.662} />
      <mesh geometry={nodes.Plane170_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[278.386, 302.017, -224.28]} rotation={[-1.764, -0.709, -3.062]} scale={34.076} />
      <mesh geometry={nodes.Plane171_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-198.593, 360.788, 18.476]} rotation={[-0.18, 0.049, 0.966]} scale={34.421} />
      <mesh geometry={nodes.Plane172_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[265.342, 370.127, 248.596]} rotation={[2.492, -0.302, 2.854]} scale={31.529} />
      <mesh geometry={nodes.Plane173_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-224.392, 313.527, 7.529]} rotation={[-1.395, 0.004, 0.498]} scale={32.681} />
      <mesh geometry={nodes.Plane174_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[268.842, 367.706, 260.82]} rotation={[1.635, 0.103, 1.774]} scale={34.035} />
      <mesh geometry={nodes.Plane175_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[16.355, 299.869, 107.294]} rotation={[1.316, -0.027, -2.835]} scale={29.866} />
      <mesh geometry={nodes.Plane176_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[173.05, 327.599, 305.627]} rotation={[1.314, 0.387, -0.627]} scale={31.856} />
      <mesh geometry={nodes.Plane177_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[27.678, 317.43, 206.419]} rotation={[-0.357, -0.007, -1.638]} scale={32.032} />
      <mesh geometry={nodes.Plane178_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-115.674, 318.493, -11.41]} rotation={[-1.166, 0.036, 1.439]} scale={31.24} />
      <mesh geometry={nodes.Plane179_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[29.636, 299.44, 121.723]} rotation={[2.943, -0.394, -2.813]} scale={32.7} />
      <mesh geometry={nodes.Plane180_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[275.467, 301.914, -236.876]} rotation={[0.907, -0.008, -2.289]} scale={30.494} />
      <mesh geometry={nodes.Plane181_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-192.244, 355.672, 8.846]} rotation={[1.023, 0.478, -1.15]} scale={34.346} />
      <mesh geometry={nodes.Plane182_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[276.989, 374.307, 249.628]} rotation={[0.934, -0.125, -2.194]} scale={34.14} />
      <mesh geometry={nodes.Plane183_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[288.567, 299.798, 307.604]} rotation={[0.309, 0.66, 0.792]} scale={34.154} />
      <mesh geometry={nodes.Plane184_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[171.748, 347.867, 326.218]} rotation={[0.256, 0.713, -3.023]} scale={33.605} />
      <mesh geometry={nodes.Plane185_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[16.768, 321.062, 209.163]} rotation={[2.999, 1.198, -0.357]} scale={34.098} />
      <mesh geometry={nodes.Plane186_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[25.043, 332.029, 114.971]} rotation={[-2.428, 0.245, -0.62]} scale={32.295} />
      <mesh geometry={nodes.Plane187_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-236.874, 309.634, -23.058]} rotation={[-2.247, 0.988, 0.396]} scale={30.429} />
      <mesh geometry={nodes.Plane188_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[263.693, 337.153, -161.698]} rotation={[1.775, -1.267, -0.71]} scale={32.237} />
      <mesh geometry={nodes.Plane189_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[189.903, 330.85, 302.406]} rotation={[2.676, -0.209, -2.573]} scale={34.881} />
      <mesh geometry={nodes.Plane190_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[311.185, 313.443, -203.471]} rotation={[1.73, 1.476, -0.588]} scale={31.721} />
      <mesh geometry={nodes.Plane191_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[293.854, 298.237, 278.139]} rotation={[0.901, -0.343, 1.686]} scale={30.411} />
      <mesh geometry={nodes.Plane192_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[213.981, 360.544, 301.898]} rotation={[1.871, 1.263, -1.782]} scale={34.434} />
      <mesh geometry={nodes.Plane193_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[35.092, 316.149, 185.573]} rotation={[-0.757, -0.043, -2.53]} scale={30.248} />
      <mesh geometry={nodes.Plane194_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[269.826, 302.221, -230.671]} rotation={[-1.789, -0.535, 0.04]} scale={31.139} />
      <mesh geometry={nodes.Plane195_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-166.474, 335.852, 15.226]} rotation={[2.85, 0.357, 1.855]} scale={31.654} />
      <mesh geometry={nodes.Plane196_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[3.548, 343.131, 150.534]} rotation={[2.364, -1.17, 0.1]} scale={34.89} />
      <mesh geometry={nodes.Plane197_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[276.595, 348.791, 252.668]} rotation={[-1.326, -0.533, 2.458]} scale={30.173} />
      <mesh geometry={nodes.Plane198_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[120.912, 346.742, 105.358]} rotation={[2.993, 0.559, -1.631]} scale={34.01} />
      <mesh geometry={nodes.Plane199_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-4.731, 342.598, 195.98]} rotation={[-1.808, -0.077, -2.22]} scale={31.288} />
      <mesh geometry={nodes.Plane200_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-132.134, 297.952, -22.7]} rotation={[-2.243, 0.274, -0.853]} scale={34.621} />
      <mesh geometry={nodes.Plane201_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[6.303, 323.607, 145.737]} rotation={[-2.682, 0.719, -0.15]} scale={33.885} />
      <mesh geometry={nodes.Plane202_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[280.492, 317.505, -146.365]} rotation={[-2.292, 0.202, -0.068]} scale={34.772} />
      <mesh geometry={nodes.Plane203_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[155.094, 368.557, 287.97]} rotation={[1.334, 0.208, 1.583]} scale={34.768} />
      <mesh geometry={nodes.Plane204_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[127.054, 367.793, 151.673]} rotation={[-0.594, -0.627, 1.722]} scale={32.177} />
      <mesh geometry={nodes.Plane205_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-122.171, 345.739, 343.715]} rotation={[0.466, 0.251, -2.929]} scale={32.497} />
      <mesh geometry={nodes.Plane206_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[206.042, 366.479, 302.916]} rotation={[1.129, 0.835, -0.469]} scale={30.896} />
      <mesh geometry={nodes.Plane207_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[270.245, 290.346, 313.885]} rotation={[0.042, -1.233, -0.325]} scale={33.421} />
      <mesh geometry={nodes.Plane208_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[288.853, 343.686, -163.074]} rotation={[2.327, -0.108, 1.183]} scale={34.996} />
      <mesh geometry={nodes.Plane209_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[259.35, 353.942, 287.737]} rotation={[-1.164, -1.1, 2.117]} scale={30.041} />
      <mesh geometry={nodes.Plane210_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[74.369, 348.739, 123.603]} rotation={[1.173, -0.119, -2.88]} scale={29.339} />
      <mesh geometry={nodes.Plane211_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-162.546, 351.41, -2.765]} rotation={[1.484, -0.238, -1.197]} scale={29.409} />
      <mesh geometry={nodes.Plane212_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[106.291, 395.779, 98.428]} rotation={[-0.956, -0.41, -2.814]} scale={33.825} />
      <mesh geometry={nodes.Plane213_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[282.188, 298.132, 279.189]} rotation={[2.32, 1.042, -0.778]} scale={31.299} />
      <mesh geometry={nodes.Plane214_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-166.246, 340.208, 34.9]} rotation={[-1.226, -0.254, 0.792]} scale={32.761} />
      <mesh geometry={nodes.Plane215_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-200.456, 366.082, 19.651]} rotation={[-1.894, -0.879, -3.018]} scale={29.934} />
      <mesh geometry={nodes.Plane216_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[270.429, 364.801, 255.516]} rotation={[-1.074, -0.205, -2.346]} scale={29.499} />
      <mesh geometry={nodes.Plane217_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[262.512, 351.037, 220.78]} rotation={[1.938, -0.2, -1.686]} scale={29.42} />
      <mesh geometry={nodes.Plane218_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[206.436, 343.074, 289.244]} rotation={[1.8, 0.25, 2.83]} scale={30.626} />
      <mesh geometry={nodes.Plane219_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-3.702, 332.858, 191.664]} rotation={[0.476, 1.126, -0.148]} scale={30.82} />
      <mesh geometry={nodes.Plane220_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[142.334, 401.479, 98.698]} rotation={[-1.067, -0.951, -1.83]} scale={31.642} />
      <mesh geometry={nodes.Plane221_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[168.608, 364.027, 318.656]} rotation={[2.38, -0.827, -0.602]} scale={29.741} />
      <mesh geometry={nodes.Plane222_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[38.236, 341.118, 123.186]} rotation={[2.022, -0.187, 2.064]} scale={34.465} />
      <mesh geometry={nodes.Plane223_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[247.752, 348.344, 274.666]} rotation={[1.138, 1.079, -0.598]} scale={29.624} />
      <mesh geometry={nodes.Plane224_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-8.916, 378.534, 171.876]} rotation={[-1.141, -0.349, -1.345]} scale={30.108} />
      <mesh geometry={nodes.Plane225_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[218.665, 358.881, 313.115]} rotation={[-2.801, 0.567, 0.183]} scale={32.351} />
      <mesh geometry={nodes.Plane226_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-148.403, 307.61, -9.086]} rotation={[1.276, -0.892, -1.768]} scale={30.959} />
      <mesh geometry={nodes.Plane227_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[146.274, 376.408, 301.252]} rotation={[0.055, 0.504, 2.684]} scale={34.001} />
      <mesh geometry={nodes.Plane228_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[36.652, 343.062, 123.186]} rotation={[0.955, -0.136, -2.913]} scale={[30.715, 30.714, 30.715]} />
      <mesh geometry={nodes.Plane229_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-155.754, 331.982, -22.499]} rotation={[-2.972, 1.4, 2.572]} scale={31.599} />
      <mesh geometry={nodes.Plane230_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[268.539, 322.084, 284.801]} rotation={[1.259, 0.475, 0.01]} scale={29.53} />
      <mesh geometry={nodes.Plane231_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[113.69, 401.577, 146.429]} rotation={[1.071, 0.315, 1.754]} scale={31.372} />
      <mesh geometry={nodes.Plane232_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-98.697, 312.131, 409.638]} rotation={[1.936, 0.747, -2.07]} scale={34.461} />
      <mesh geometry={nodes.Plane233_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[17.273, 322.084, 92.002]} rotation={[-1.488, -0.801, -2.165]} scale={32.448} />
      <mesh geometry={nodes.Plane234_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[182.431, 344.234, 278.81]} rotation={[1.887, 0.583, 0.008]} scale={34.7} />
      <mesh geometry={nodes.Plane235_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[73.201, 304.787, 151.548]} rotation={[-1.333, 0.314, 1.335]} scale={29.86} />
      <mesh geometry={nodes.Plane236_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[246.136, 393.034, 237.757]} rotation={[1.925, -0.786, 2.169]} scale={34.973} />
      <mesh geometry={nodes.Plane237_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-208.554, 339.401, 47.556]} rotation={[0.69, 0.158, -2.478]} scale={33.808} />
      <mesh geometry={nodes.Plane238_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[258.533, 354.908, -179.279]} rotation={[0.792, 0.211, -1.588]} scale={33.788} />
      <mesh geometry={nodes.Plane239_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-2.088, 381.014, 192.712]} rotation={[0.692, -0.32, -0.953]} scale={30.59} />
      <mesh geometry={nodes.Plane240_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[158.945, 348.086, 307.536]} rotation={[0.092, -0.565, -1.637]} scale={[34.054, 34.055, 34.055]} />
      <mesh geometry={nodes.Plane241_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-128.899, 310.773, 408.812]} rotation={[0.843, -0.84, -2.702]} scale={33.712} />
      <mesh geometry={nodes.Plane242_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-232.632, 384.373, 10.035]} rotation={[2.608, 1.009, -2.986]} scale={32.58} />
      <mesh geometry={nodes.Plane243_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-17.959, 382.676, 173.604]} rotation={[-0.212, -0.349, -0.039]} scale={32.864} />
      <mesh geometry={nodes.Plane244_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[10.366, 343.233, 96.419]} rotation={[2.536, -0.054, 1.459]} scale={30.744} />
      <mesh geometry={nodes.Plane245_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[276.616, 356.682, -157.185]} rotation={[-0.784, -0.177, -2.623]} scale={34.426} />
      <mesh geometry={nodes.Plane246_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[265.648, 310.893, -220.976]} rotation={[3.046, 0.862, -1.79]} scale={29.983} />
      <mesh geometry={nodes.Plane247_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-143.181, 335.714, 363.988]} rotation={[-2.199, 0.025, -1.629]} scale={32.074} />
      <mesh geometry={nodes.Plane248_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[252.005, 308.902, 310.432]} rotation={[-3.025, 0.038, -0.368]} scale={34.618} />
      <mesh geometry={nodes.Plane249_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[255.529, 354.918, -183.288]} rotation={[2.669, -0.658, 0.212]} scale={29.744} />
      <mesh geometry={nodes.Plane250_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-5.145, 344.517, 143.888]} rotation={[-1.052, -0.697, 2.909]} scale={30.13} />
      <mesh geometry={nodes.Plane251_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[95.997, 407.954, 98.428]} rotation={[-2.898, -0.294, -2.567]} scale={29.789} />
      <mesh geometry={nodes.Plane252_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[246.656, 392.874, 250.091]} rotation={[-0.686, 0.226, 1.622]} scale={30.83} />
      <mesh geometry={nodes.Plane253_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-20.591, 342.114, 161.469]} rotation={[2.588, 0.338, 3.084]} scale={34.872} />
      <mesh geometry={nodes.Plane254_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-147.417, 338.682, 369.371]} rotation={[-1.992, -0.477, -2.099]} scale={29.511} />
      <mesh geometry={nodes.Plane255_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[18.535, 329.173, 94.168]} rotation={[2.595, 0.778, -0.774]} scale={34.176} />
      <mesh geometry={nodes.Plane256_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-218.863, 346.052, 50.239]} rotation={[-2.094, -0.751, 0.678]} scale={31.477} />
      <mesh geometry={nodes.Plane257_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[124.013, 416.643, 110.41]} rotation={[2.385, -1.213, 1.399]} scale={32.172} />
      <mesh geometry={nodes.Plane258_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[182.589, 380.593, 314.859]} rotation={[-0.31, 0.268, -2.226]} scale={31.256} />
      <mesh geometry={nodes.Plane259_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-118.774, 349.184, 416.602]} rotation={[2.24, -0.409, -1.514]} scale={33.061} />
      <mesh geometry={nodes.Plane260_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-229.665, 382.497, 45.542]} rotation={[-1.64, -0.514, 0.712]} scale={32.606} />
      <mesh geometry={nodes.Plane261_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[194.089, 361.048, 322.193]} rotation={[1.682, 0.317, 1.342]} scale={31.71} />
      <mesh geometry={nodes.Plane262_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[9.943, 345.901, 219.713]} rotation={[1.246, 0.794, -2.902]} scale={32.23} />
      <mesh geometry={nodes.Plane263_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-264.376, 336.774, -10.211]} rotation={[0.868, 0.686, -2.48]} scale={31.343} />
      <mesh geometry={nodes.Plane264_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[256.927, 379.772, 259.957]} rotation={[2.067, 1.236, -1.527]} scale={31.09} />
      <mesh geometry={nodes.Plane265_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-224.635, 392.842, 18.923]} rotation={[0.467, -0.44, 1.032]} scale={31.314} />
      <mesh geometry={nodes.Plane266_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[181.813, 384.43, 325.69]} rotation={[-1.859, -0.243, 2.069]} scale={31.831} />
      <mesh geometry={nodes.Plane267_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-150.86, 355.37, 385.97]} rotation={[-2.073, -1.163, -1.817]} scale={32.324} />
      <mesh geometry={nodes.Plane268_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[250.178, 393.539, 257.108]} rotation={[-1.874, 0.48, 1.274]} scale={33.228} />
      <mesh geometry={nodes.Plane269_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[248.369, 351, -145.437]} rotation={[-0.507, -0.979, -0.578]} scale={33.232} />
      <mesh geometry={nodes.Plane270_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-150.784, 365.664, 13.64]} rotation={[1.178, 0.73, 2.05]} scale={30.256} />
      <mesh geometry={nodes.Plane271_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[125.187, 413.527, 133.711]} rotation={[2.398, 0.888, -1.678]} scale={30.319} />
      <mesh geometry={nodes.Plane272_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[136.766, 394.997, 302.387]} rotation={[-2.045, -0.537, -0.629]} scale={29.297} />
      <mesh geometry={nodes.Plane273_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-163.223, 332.318, 391.362]} rotation={[-2.984, 0.276, 0.402]} scale={30.252} />
      <mesh geometry={nodes.Plane274_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[266.291, 398.354, 222.038]} rotation={[-1.166, -0.996, 3.106]} scale={33.778} />
      <mesh geometry={nodes.Plane275_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-154.658, 362.106, 351.373]} rotation={[-2.762, 0.224, -2.969]} scale={32.018} />
      <mesh geometry={nodes.Plane276_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-146.501, 328.153, 375.137]} rotation={[-1.457, -0.709, 0.799]} scale={34.441} />
      <mesh geometry={nodes.Plane277_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[99.421, 372.158, 103.45]} rotation={[-1.69, -0.723, -3.009]} scale={33.042} />
      <mesh geometry={nodes.Plane278_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[113.896, 378.465, 138.128]} rotation={[-1.907, 0.547, -1.691]} scale={30.587} />
      <mesh geometry={nodes.Plane279_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[250.757, 364.251, -179.872]} rotation={[2.689, 0.706, -0.762]} scale={33.478} />
      <mesh geometry={nodes.Plane280_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[206.971, 344.766, -152.546]} rotation={[2.161, 0.444, -0.682]} scale={30.998} />
      <mesh geometry={nodes.Plane281_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[258.734, 339.625, -231.748]} rotation={[-2.685, 0.047, -0.811]} scale={33.599} />
      <mesh geometry={nodes.Plane282_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-207.492, 347.062, 21.725]} rotation={[-0.534, -0.965, 2.76]} scale={34.204} />
      <mesh geometry={nodes.Plane283_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-267.235, 373.828, 12.288]} rotation={[2.85, -0.178, 2.278]} scale={31.725} />
      <mesh geometry={nodes.Plane284_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[220.054, 388.208, 233.974]} rotation={[-0.239, 0.398, 0.079]} scale={29.427} />
      <mesh geometry={nodes.Plane285_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-288.983, 358.836, -19.954]} rotation={[1.878, 0.295, 0.873]} scale={32.33} />
      <mesh geometry={nodes.Plane286_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-213.078, 361.78, 44.229]} rotation={[2.821, 0.962, -2.532]} scale={33.785} />
      <mesh geometry={nodes.Plane287_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[168.239, 412.938, 302.301]} rotation={[-1.62, 0.454, -2.365]} scale={31.671} />
      <mesh geometry={nodes.Plane288_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[88.234, 415.941, 94.858]} rotation={[-0.911, -0.994, 1.768]} scale={34.318} />
      <mesh geometry={nodes.Plane289_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-20.866, 396.49, 182.976]} rotation={[2.349, 0.153, 1.878]} scale={34.179} />
      <mesh geometry={nodes.Plane290_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[107.236, 407.778, 155.833]} rotation={[-0.479, 0.311, 0.034]} scale={32.257} />
      <mesh geometry={nodes.Plane291_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-275.604, 354.025, -21.807]} rotation={[-0.044, -0.921, -0.688]} scale={32.644} />
      <mesh geometry={nodes.Plane292_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[19.984, 336.622, 106.781]} rotation={[-0.841, -0.468, 1.759]} scale={30.372} />
      <mesh geometry={nodes.Plane293_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-236.535, 337.48, 32.703]} rotation={[-1.63, 0.059, -2.779]} scale={31.222} />
      <mesh geometry={nodes.Plane294_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-142.75, 354.063, 399.988]} rotation={[-2.531, 0.84, -1.566]} scale={33.644} />
      <mesh geometry={nodes.Plane295_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-173.342, 348.021, 14.863]} rotation={[1.806, 0.968, -0.324]} scale={33.912} />
      <mesh geometry={nodes.Plane296_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[175.002, 366.126, 275.531]} rotation={[3.008, -0.043, -1.012]} scale={33.887} />
      <mesh geometry={nodes.Plane297_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[200.096, 379.919, 311.37]} rotation={[-1.775, -1.04, 1.272]} scale={34.09} />
      <mesh geometry={nodes.Plane298_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[158.741, 359.617, 323.682]} rotation={[-3.089, -0.249, 1.676]} scale={33.139} />
      <mesh geometry={nodes.Plane299_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[16.941, 389.788, 175.648]} rotation={[-0.801, -0.794, -0.685]} scale={34.246} />
      <mesh geometry={nodes.Plane300_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[19.069, 360.418, 125.859]} rotation={[-2.191, -0.058, 0.996]} scale={29.748} />
      <mesh geometry={nodes.Plane301_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[247.221, 376.369, -169.878]} rotation={[0.285, -0.032, 1.284]} scale={31.733} />
      <mesh geometry={nodes.Plane302_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-22.292, 352.003, 190.84]} rotation={[0.767, -0.003, 2.911]} scale={33.367} />
      <mesh geometry={nodes.Plane303_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[251.86, 336.242, 313.132]} rotation={[2.325, 0.812, 3.103]} scale={31.488} />
      <mesh geometry={nodes.Plane304_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[160.415, 400.912, 340.299]} rotation={[-0.703, -0.23, 0.296]} scale={29.766} />
      <mesh geometry={nodes.Plane305_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[159.775, 379.271, 307.034]} rotation={[1.896, -0.762, 0.668]} scale={29.697} />
      <mesh geometry={nodes.Plane306_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[108.862, 424.882, 101.661]} rotation={[-0.18, 0.131, -0.018]} scale={34.887} />
      <mesh geometry={nodes.Plane307_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[166.978, 417.388, 289.557]} rotation={[2.363, -0.957, 1.658]} scale={32.675} />
      <mesh geometry={nodes.Plane308_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[225.713, 346.576, -170.556]} rotation={[-0.733, 0.594, 1.413]} scale={31.111} />
      <mesh geometry={nodes.Plane309_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-280.394, 344.287, -12.625]} rotation={[-1.693, -0.152, -3.088]} scale={31.864} />
      <mesh geometry={nodes.Plane310_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-214.273, 383.458, 32.453]} rotation={[-0.337, -0.174, 1.983]} scale={34.125} />
      <mesh geometry={nodes.Plane311_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-250.844, 400.292, 10.035]} rotation={[2.162, -0.174, 1.832]} scale={34.569} />
      <mesh geometry={nodes.Plane312_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[53.202, 409.38, 143.399]} rotation={[-0.979, -0.64, -1.571]} scale={34.55} />
      <mesh geometry={nodes.Plane313_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-140.534, 343.731, 383.672]} rotation={[-0.851, -0.339, -2.84]} scale={34.482} />
      <mesh geometry={nodes.Plane314_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[204.989, 386.298, 263.805]} rotation={[-3.12, 0.195, 2.633]} scale={34.975} />
      <mesh geometry={nodes.Plane315_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-143.663, 376.93, 315.777]} rotation={[-0.943, 0.096, 0.907]} scale={30.958} />
      <mesh geometry={nodes.Plane316_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[166.369, 379.942, 313.922]} rotation={[0.805, -0.965, 0.613]} scale={30.403} />
      <mesh geometry={nodes.Plane317_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[157.743, 364.835, 336.047]} rotation={[-0.308, 1.312, -2.596]} scale={31.532} />
      <mesh geometry={nodes.Plane318_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[151.087, 375.809, 314.712]} rotation={[2.068, 0.031, -2.044]} scale={32.761} />
      <mesh geometry={nodes.Plane319_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[243.201, 372.01, 237.588]} rotation={[-0.658, -1.173, 1.882]} scale={29.708} />
      <mesh geometry={nodes.Plane320_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[260.139, 347.955, -171.148]} rotation={[1.993, 0.914, 1.002]} scale={34.876} />
      <mesh geometry={nodes.Plane321_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-155.461, 343.925, 396.667]} rotation={[-0.41, -0.216, -1.513]} scale={33.907} />
      <mesh geometry={nodes.Plane322_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-164.921, 323.179, -11.65]} rotation={[-1.767, 1.037, 1.618]} scale={31.34} />
      <mesh geometry={nodes.Plane323_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[113.791, 383.06, 298.544]} rotation={[-0.785, -1.097, 1.27]} scale={31.858} />
      <mesh geometry={nodes.Plane324_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-141.294, 379.472, 323.234]} rotation={[2.556, 0.285, 2.226]} scale={32.626} />
      <mesh geometry={nodes.Plane325_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-41.792, 389.493, 160.637]} rotation={[-0.658, -0.371, 1.314]} scale={32.531} />
      <mesh geometry={nodes.Plane326_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[109.578, 384.711, 104.746]} rotation={[1.511, -0.635, 1.391]} scale={31.524} />
      <mesh geometry={nodes.Plane327_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[77.94, 422.751, 94.858]} rotation={[-1.251, 1.326, 0.989]} scale={30.654} />
      <mesh geometry={nodes.Plane328_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[181.505, 388.026, 318.267]} rotation={[0.043, -0.682, 1.01]} scale={33.658} />
      <mesh geometry={nodes.Plane329_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[56.734, 309.056, 148.796]} rotation={[-2.521, 0.753, 0.173]} scale={31.893} />
      <mesh geometry={nodes.Plane330_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-155.149, 354.487, -18.139]} rotation={[-2.028, -1.282, -2.763]} scale={33.69} />
      <mesh geometry={nodes.Plane331_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[8.013, 402.862, 144.957]} rotation={[2.904, 0.286, -2.683]} scale={29.837} />
      <mesh geometry={nodes.Plane332_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-160.203, 346.564, 323.315]} rotation={[-0.836, -0.446, 1.26]} scale={30.905} />
      <mesh geometry={nodes.Plane333_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-180.812, 343.621, -4.162]} rotation={[1.216, 0.817, 0.471]} scale={33.743} />
      <mesh geometry={nodes.Plane334_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[244.951, 414.604, 237.375]} rotation={[0.84, 0.559, -2.372]} scale={31.815} />
      <mesh geometry={nodes.Plane335_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-178.434, 378.554, -1.833]} rotation={[-3.072, 0.557, 2.082]} scale={34.275} />
      <mesh geometry={nodes.Plane336_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[117.532, 424.127, 116.593]} rotation={[-1.079, -0.809, 0.284]} scale={34.627} />
      <mesh geometry={nodes.Plane337_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-313.983, 350.817, -29.697]} rotation={[1.388, 0.376, 0.577]} scale={30.016} />
      <mesh geometry={nodes.Plane338_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-184.61, 325.036, 393.233]} rotation={[-1.712, 1.377, 1.635]} scale={33.444} />
      <mesh geometry={nodes.Plane339_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-285.914, 350.528, -9.309]} rotation={[-2.999, -1.295, -1.722]} scale={30.773} />
      <mesh geometry={nodes.Plane340_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-14.012, 347.611, 162.41]} rotation={[0.728, -0.862, -1.862]} scale={30.229} />
      <mesh geometry={nodes.Plane341_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-170.162, 385.639, 306.047]} rotation={[2.171, 1.236, 0.052]} scale={33.866} />
      <mesh geometry={nodes.Plane342_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-132.931, 333.812, 407.561]} rotation={[-0.971, -0.349, -2.004]} scale={34.287} />
      <mesh geometry={nodes.Plane343_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[146.429, 368.484, 345.134]} rotation={[-2.479, 0.621, 2.251]} scale={29.908} />
      <mesh geometry={nodes.Plane344_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[194.699, 335.682, -142.736]} rotation={[-0.788, -1.265, 1.088]} scale={32.89} />
      <mesh geometry={nodes.Plane345_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[222.727, 350.435, -149.968]} rotation={[2.799, -0.121, 1.391]} scale={34.478} />
      <mesh geometry={nodes.Plane346_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[97.307, 423.666, 152.83]} rotation={[0.178, 0.304, 0.628]} scale={31.566} />
      <mesh geometry={nodes.Plane347_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-3.072, 376.094, 150.879]} rotation={[-2.89, -1.059, 2.306]} scale={32.335} />
      <mesh geometry={nodes.Plane348_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[50.514, 311.484, 166.023]} rotation={[-0.717, -0.859, 1.306]} scale={29.875} />
      <mesh geometry={nodes.Plane349_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-177.695, 348.109, 3.596]} rotation={[2.749, -0.135, 2.146]} scale={29.688} />
      <mesh geometry={nodes.Plane350_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-182.557, 356.988, 327.758]} rotation={[-0.599, -0.466, 1.254]} scale={32.334} />
      <mesh geometry={nodes.Plane351_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[236.911, 380.691, -160.51]} rotation={[2.081, -0.013, 0.848]} scale={29.457} />
      <mesh geometry={nodes.Plane352_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[197.146, 337.744, -142.569]} rotation={[0.423, -0.131, -0.214]} scale={33.694} />
      <mesh geometry={nodes.Plane353_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[237.942, 414.365, 245.799]} rotation={[-1.908, 0.888, 2.94]} scale={34.393} />
      <mesh geometry={nodes.Plane354_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-116.111, 338.869, 400.764]} rotation={[0.149, -0.081, 2.888]} scale={31.598} />
      <mesh geometry={nodes.Plane355_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-6.583, 363.297, 93.551]} rotation={[-3.1, 0.766, -0.359]} scale={33.531} />
      <mesh geometry={nodes.Plane356_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-166.893, 334.68, 2.387]} rotation={[0.102, 0.172, -1.295]} scale={33.94} />
      <mesh geometry={nodes.Plane357_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[65.475, 430.548, 107.909]} rotation={[2.816, 0.432, 0.621]} scale={33.667} />
      <mesh geometry={nodes.Plane358_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-168.211, 366.099, 344.022]} rotation={[-1.523, -0.404, -2.102]} scale={30.645} />
      <mesh geometry={nodes.Plane359_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-154.036, 306.92, 350.754]} rotation={[1.36, 0.096, -3.101]} scale={33.939} />
      <mesh geometry={nodes.Plane360_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[224.301, 375.888, -181.822]} rotation={[3.066, 0.498, -0.333]} scale={30.546} />
      <mesh geometry={nodes.Plane361_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[147.31, 405.41, 326.682]} rotation={[-0.155, 1.215, -0.132]} scale={29.3} />
      <mesh geometry={nodes.Plane362_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[181.975, 377.683, 299.823]} rotation={[3.097, 0.207, -1.902]} scale={33.18} />
      <mesh geometry={nodes.Plane363_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-167.206, 358.483, 309.808]} rotation={[1.878, -1.002, -1.817]} scale={33.683} />
      <mesh geometry={nodes.Plane364_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-123.339, 349.596, 389.982]} rotation={[-1.661, -0.809, 2.83]} scale={31.253} />
      <mesh geometry={nodes.Plane365_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[250.371, 370.231, -166.995]} rotation={[1.147, 0.124, 1.835]} scale={30.546} />
      <mesh geometry={nodes.Plane366_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-285.565, 364.653, -14.072]} rotation={[-2.39, 0.057, -0.22]} scale={33.447} />
      <mesh geometry={nodes.Plane367_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-181.781, 359.904, 372.844]} rotation={[0.65, -0.451, -0.578]} scale={34.102} />
      <mesh geometry={nodes.Plane368_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[202.028, 385.474, 253.809]} rotation={[-0.686, 0.913, 2.564]} scale={31.266} />
      <mesh geometry={nodes.Plane369_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[36.115, 416.27, 105.405]} rotation={[-1.636, -0.043, -2.749]} scale={32.043} />
      <mesh geometry={nodes.Plane370_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[66.865, 432.534, 108.019]} rotation={[-1.253, 0.553, -2.245]} scale={32.139} />
      <mesh geometry={nodes.Plane371_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[65.324, 410.65, 89.972]} rotation={[-3.068, 1.1, 1.95]} scale={29.496} />
      <mesh geometry={nodes.Plane372_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[233.125, 400.764, 268.311]} rotation={[-0.121, -0.769, 1.092]} scale={32.575} />
      <mesh geometry={nodes.Plane373_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[104.987, 410.578, 107.266]} rotation={[1.934, 0.563, -0.873]} scale={30.755} />
      <mesh geometry={nodes.Plane374_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[9.379, 402.185, 142.643]} rotation={[0.285, -1.058, -1.402]} scale={32.523} />
      <mesh geometry={nodes.Plane375_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[28.648, 428.038, 126.456]} rotation={[0.763, 0.847, 1.24]} scale={31.934} />
      <mesh geometry={nodes.Plane376_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-138.12, 341.179, 398.116]} rotation={[-1.201, -0.454, -1.757]} scale={34.269} />
      <mesh geometry={nodes.Plane377_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-180.837, 362.884, 372.258]} rotation={[-1.888, -0.514, -2.075]} scale={32.164} />
      <mesh geometry={nodes.Plane378_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-284.591, 377.055, 35.044]} rotation={[1.414, 0.708, -2.684]} scale={33.058} />
      <mesh geometry={nodes.Plane379_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[201.751, 414.517, 237.435]} rotation={[1.178, -1.275, 2.691]} scale={33.178} />
      <mesh geometry={nodes.Plane380_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[28.721, 387.927, 134.168]} rotation={[1.854, -0.16, -1.415]} scale={33.539} />
      <mesh geometry={nodes.Plane381_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[209.286, 379.157, -167.778]} rotation={[2.223, -0.905, -0.29]} scale={33.275} />
      <mesh geometry={nodes.Plane382_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[233.292, 327.134, 294.966]} rotation={[1.726, 0.992, -0.876]} scale={29.592} />
      <mesh geometry={nodes.Plane383_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-62.061, 388.454, 168.711]} rotation={[0.255, -0.473, -2.068]} scale={31.911} />
      <mesh geometry={nodes.Plane384_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[137.988, 391.06, 355.367]} rotation={[-3.03, -0.248, -1.352]} scale={31.599} />
      <mesh geometry={nodes.Plane385_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-139.836, 349.31, 393.176]} rotation={[1.739, 1.292, -2.344]} scale={32.422} />
      <mesh geometry={nodes.Plane386_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[38.103, 391.135, 118.664]} rotation={[0.969, -1.053, -1.573]} scale={30.754} />
      <mesh geometry={nodes.Plane387_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-262.345, 349.262, 15.844]} rotation={[1.839, 0.214, 1.449]} scale={34.337} />
      <mesh geometry={nodes.Plane388_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-250.466, 358.214, 2.868]} rotation={[-1.539, 0.28, 2.03]} scale={30.799} />
      <mesh geometry={nodes.Plane389_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-188.129, 328.815, 385.414]} rotation={[1.547, -0.477, 1.779]} scale={30.036} />
      <mesh geometry={nodes.Plane390_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-19.254, 409.171, 125.255]} rotation={[-1.474, 0.535, 0.882]} scale={31.331} />
      <mesh geometry={nodes.Plane391_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[122.945, 377.34, 340.23]} rotation={[1.906, 1.355, -0.823]} scale={30.743} />
      <mesh geometry={nodes.Plane392_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[44.212, 402.58, 132.527]} rotation={[2.24, 0.79, 2.495]} scale={33.105} />
      <mesh geometry={nodes.Plane393_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[130.562, 428.617, 292.607]} rotation={[-0.853, -0.347, 1.228]} scale={30.926} />
      <mesh geometry={nodes.Plane394_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[214.479, 348.222, -159.465]} rotation={[2.314, 0.193, -1.433]} scale={33.531} />
      <mesh geometry={nodes.Plane395_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-152.809, 364.622, 384.884]} rotation={[3.071, 0.933, 2.691]} scale={30.142} />
      <mesh geometry={nodes.Plane396_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[52.547, 387.958, 118.903]} rotation={[-1.397, -1.314, 2.544]} scale={29.321} />
      <mesh geometry={nodes.Plane397_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[88.233, 434.285, 120.319]} rotation={[1.069, 0.191, 1.147]} scale={29.585} />
      <mesh geometry={nodes.Plane398_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[11.169, 399.548, 138.34]} rotation={[-2.143, -0.199, 0.308]} scale={30.401} />
      <mesh geometry={nodes.Plane399_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-16.858, 368.309, 96.853]} rotation={[-0.873, -0.085, 0.545]} scale={31.971} />
      <mesh geometry={nodes.Plane400_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-289.584, 359.013, -15.795]} rotation={[-2.407, -0.046, 2.658]} scale={29.752} />
      <mesh geometry={nodes.Plane401_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-269.772, 402.846, 39.846]} rotation={[2.516, -0.216, -2.701]} scale={31.883} />
      <mesh geometry={nodes.Plane402_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-265.509, 404.63, 30.996]} rotation={[2.045, 0.808, -1.621]} scale={29.938} />
      <mesh geometry={nodes.Plane403_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-186.376, 387.834, 333.044]} rotation={[1.815, 1.242, -1.62]} scale={30.558} />
      <mesh geometry={nodes.Plane_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-68.805, 171.341, 327.999]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane001_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-101.284, 169.34, 337.577]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane002_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-72.719, 157.637, 344.125]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane404_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-56.409, 264.043, 69.169]} rotation={[2.346, 0.903, 1.311]} scale={32.553} />
      <mesh geometry={nodes.Plane405_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[71.769, 254.252, -7.783]} rotation={[0.556, -0.874, -1.199]} scale={31.534} />
      <mesh geometry={nodes.Plane406_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[40.958, 258.87, 37.699]} rotation={[-1.958, 0.034, 2.463]} scale={32.814} />
      <mesh geometry={nodes.Plane407_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-26.36, 267.169, 104.295]} rotation={[-2.07, -0.798, -1.019]} scale={34.608} />
      <mesh geometry={nodes.Plane408_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-47.362, 277.802, 85.721]} rotation={[3.066, 0.528, -0.395]} scale={33.714} />
      <mesh geometry={nodes.Plane409_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-27.658, 267.893, 113.764]} rotation={[1.089, 0.152, -2.034]} scale={31.394} />
      <mesh geometry={nodes.Plane410_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-32.491, 247.512, 51.635]} rotation={[2.493, 0.718, 2.641]} scale={34.378} />
      <mesh geometry={nodes.Plane411_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-65.677, 260.026, 70.016]} rotation={[-1.651, -0.452, -1.081]} scale={34.526} />
      <mesh geometry={nodes.Plane412_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-43.927, 282.102, 102.386]} rotation={[2.71, -1.06, -2.878]} scale={29.362} />
      <mesh geometry={nodes.Plane413_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-11.636, 232.291, 1.814]} rotation={[0.02, -0.955, 1.488]} scale={34.373} />
      <mesh geometry={nodes.Plane414_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[11.483, 291.844, 50.746]} rotation={[2.027, -0.335, -0.372]} scale={34.24} />
      <mesh geometry={nodes.Plane415_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[53.639, 273.283, 29.996]} rotation={[-0.072, -0.985, -1.843]} scale={33.012} />
      <mesh geometry={nodes.Plane416_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[49.974, 288.251, 10.117]} rotation={[-1.398, 0.81, -3.059]} scale={32.702} />
      <mesh geometry={nodes.Plane417_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-18.937, 263.316, 27.479]} rotation={[0.233, -0.213, 2.28]} scale={34.665} />
      <mesh geometry={nodes.Plane418_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[93.779, 291.427, 49.22]} rotation={[0.488, 0.117, 0.897]} scale={33.494} />
      <mesh geometry={nodes.Plane419_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[84.929, 282.607, 26.131]} rotation={[2.346, 0.477, -0.088]} scale={31.51} />
      <mesh geometry={nodes.Plane420_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[99.601, 326.978, 30.141]} rotation={[0.27, 0.149, -1.989]} scale={32.31} />
      <mesh geometry={nodes.Plane421_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-44.317, 261.351, 114.644]} rotation={[-1.18, 0.725, 2.403]} scale={30.177} />
      <mesh geometry={nodes.Plane422_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-27.585, 311.085, 84.548]} rotation={[-0.168, 0.69, 2.395]} scale={30.226} />
      <mesh geometry={nodes.Plane423_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-2.22, 283.342, 67.932]} rotation={[-1.146, -0.164, -0.255]} scale={32.802} />
      <mesh geometry={nodes.Plane424_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-24.468, 259.913, 9.759]} rotation={[-2.676, -1.263, -2.734]} scale={30.383} />
      <mesh geometry={nodes.Plane425_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-60.829, 282.963, 79.903]} rotation={[-2.059, -1.035, -0.162]} scale={34.062} />
      <mesh geometry={nodes.Plane426_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-20.242, 289.59, 64.039]} rotation={[0.195, -0.908, -3.038]} scale={33.529} />
      <mesh geometry={nodes.Plane427_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-4.225, 309.238, 38.056]} rotation={[0.288, 0.58, 1.82]} scale={31.886} />
      <mesh geometry={nodes.Plane428_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[43.093, 331.854, 46.354]} rotation={[-0.879, 0.385, -0.783]} scale={34.654} />
      <mesh geometry={nodes.Plane429_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[81.416, 355.086, 39.072]} rotation={[-2.629, 0.538, -2.813]} scale={29.428} />
      <mesh geometry={nodes.Plane430_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[51.232, 242.203, 71.885]} rotation={[0.347, 0.687, 1.874]} scale={34.416} />
      <mesh geometry={nodes.Plane431_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-46.916, 298.976, 135.011]} rotation={[-0.224, -0.131, 0.035]} scale={30.461} />
      <mesh geometry={nodes.Plane432_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[2.423, 325.142, 56.675]} rotation={[1.83, 1.034, -0.885]} scale={29.646} />
      <mesh geometry={nodes.Plane433_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-55.422, 309.871, 79.886]} rotation={[0.056, 0.064, -1.376]} scale={34.35} />
      <mesh geometry={nodes.Plane434_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[37.515, 255.538, 65.897]} rotation={[-2.32, -0.694, -0.97]} scale={31.888} />
      <mesh geometry={nodes.Plane435_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-49.066, 283.361, 104.062]} rotation={[0.676, 0.968, -1.382]} scale={34.111} />
      <mesh geometry={nodes.Plane436_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[85.598, 343.36, 22.163]} rotation={[-1.103, -1.263, -1.74]} scale={29.969} />
      <mesh geometry={nodes.Plane437_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-45.622, 341.316, 123.531]} rotation={[-3.045, -0.777, -1.787]} scale={29.493} />
      <mesh geometry={nodes.Plane438_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-19.297, 326.985, 82.697]} rotation={[0.997, -0.389, 1.769]} scale={32.922} />
      <mesh geometry={nodes.Plane439_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-11.267, 308.075, 91.547]} rotation={[-1.841, -1.165, 0.748]} scale={32.601} />
      <mesh geometry={nodes.Plane440_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[70.756, 326.573, 39.723]} rotation={[1.465, 0.693, 3.118]} scale={34.075} />
      <mesh geometry={nodes.Plane441_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[14.749, 361.036, 44.536]} rotation={[-0.375, 0.206, 2.401]} scale={30.183} />
      <mesh geometry={nodes.Plane442_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[92.151, 378.804, 51.252]} rotation={[1.883, -0.666, 0.404]} scale={34.785} />
      <mesh geometry={nodes.Plane443_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-32.054, 308.767, 145.904]} rotation={[-0.443, -0.609, 0.123]} scale={32.377} />
      <mesh geometry={nodes.Plane444_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-40.968, 304.469, 128.113]} rotation={[0.463, -0.536, 1.211]} scale={31.666} />
      <mesh geometry={nodes.Plane445_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[76.84, 355.902, 90.956]} rotation={[0.016, 0.153, 2.188]} scale={29.953} />
      <mesh geometry={nodes.Plane446_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-67.08, 326.425, 109.951]} rotation={[0.195, -1.163, -2.667]} scale={32.568} />
      <mesh geometry={nodes.Plane447_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-65.677, 337.863, 106.589]} rotation={[2.327, 0.641, 0.42]} scale={32.173} />
      <mesh geometry={nodes.Plane448_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-28.556, 335.39, 75.926]} rotation={[-1.754, 1.103, 1.703]} scale={[34.065, 34.066, 34.065]} />
      <mesh geometry={nodes.Plane449_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[95.935, 356.164, 75.515]} rotation={[-2.044, 0.809, -1.687]} scale={31.478} />
      <mesh geometry={nodes.Plane450_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[95.461, 389.759, 60.002]} rotation={[-2.03, 1.195, -0.806]} scale={30.476} />
      <mesh geometry={nodes.Plane451_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[69.671, 402.005, 62.162]} rotation={[-0.896, 0.494, 1.924]} scale={34.423} />
      <mesh geometry={nodes.Plane452_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-57.878, 363.71, 108.947]} rotation={[-1.513, -0.638, -1.235]} scale={33.663} />
      <mesh geometry={nodes.Plane453_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-19.363, 338.608, 76.007]} rotation={[0.688, -0.449, -2.736]} scale={29.743} />
      <mesh geometry={nodes.Plane454_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[89.034, 384.346, 42.122]} rotation={[-2.078, 1.197, 0.489]} scale={34.342} />
      <mesh geometry={nodes.Plane455_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[55.63, 394.859, 47.534]} rotation={[0.146, -0.655, -0.294]} scale={31.328} />
      <mesh geometry={nodes.Plane456_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-19.297, 356.518, 100.983]} rotation={[1.191, -0.886, -2.594]} scale={34.889} />
      <mesh geometry={nodes.Plane457_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[26.353, 383.374, 96.556]} rotation={[3.002, 0.452, 1.172]} scale={33.132} />
      <mesh geometry={nodes.Plane458_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-44.502, 322.903, 104.644]} rotation={[-1.221, -0.662, -2.94]} scale={32.543} />
      <mesh geometry={nodes.Plane459_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[66.904, 380.082, 38.173]} rotation={[-1.57, -0.934, -2.998]} scale={31.023} />
      <mesh geometry={nodes.Plane460_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[41.234, 377.55, 75.304]} rotation={[-2.949, 0.18, -2.102]} scale={34.332} />
      <mesh geometry={nodes.Plane461_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-39.036, 380.005, 117.077]} rotation={[2.599, 0.038, -1.227]} scale={29.54} />
      <mesh geometry={nodes.Plane462_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-30.893, 369.75, 83.827]} rotation={[-2.084, -0.544, 0.991]} scale={34.124} />
      <mesh geometry={nodes.Plane463_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[34.617, 290.775, 123.038]} rotation={[2.607, -0.468, -2.672]} scale={31.83} />
      <mesh geometry={nodes.Plane464_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[48.819, 405.317, 91.781]} rotation={[-0.903, 0.704, -0.196]} scale={29.429} />
      <mesh geometry={nodes.Plane465_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[38.725, 317.407, 110.46]} rotation={[-1.058, -1.226, -0.91]} scale={29.738} />
      <mesh geometry={nodes.Plane466_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-28.002, 383.024, 80.171]} rotation={[1.982, 0.843, -2.836]} scale={34.666} />
      <mesh geometry={nodes.Plane467_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-35.928, 332.49, 118.9]} rotation={[-2.07, -0.58, -0.125]} scale={33.419} />
      <mesh geometry={nodes.Plane468_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-10.595, 346.499, 142.149]} rotation={[-1.563, -0.698, 2.481]} scale={34.725} />
      <mesh geometry={nodes.Plane469_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[93.999, 408.816, 96.764]} rotation={[0.75, -0.298, -0.461]} scale={29.886} />
      <mesh geometry={nodes.Plane470_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[42.112, 399.443, 78.698]} rotation={[0.616, -0.071, 2.519]} scale={33.077} />
      <mesh geometry={nodes.Plane471_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[7.279, 362.472, 115.936]} rotation={[2.945, 0.802, 0.205]} scale={34.118} />
      <mesh geometry={nodes.Plane472_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[56.92, 420.666, 78.538]} rotation={[-0.718, 0.98, -3.073]} scale={31.049} />
      <mesh geometry={nodes.Plane473_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[39.31, 299.184, 127.335]} rotation={[0.614, -0.175, 1.385]} scale={34.408} />
      <mesh geometry={nodes.Plane474_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[27.178, 313.007, 130.119]} rotation={[1.464, 0.599, 2.892]} scale={33.705} />
      <mesh geometry={nodes.Plane475_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-28.471, 351.473, 122.688]} rotation={[-0.693, 0.647, -0.377]} scale={33.041} />
      <mesh geometry={nodes.Plane476_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-11.815, 352.171, 157.884]} rotation={[-2.846, -0.483, -2.492]} scale={32.495} />
      <mesh geometry={nodes.Plane477_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-20.763, 367.826, 118.287]} rotation={[-1.717, -0.309, 0.69]} scale={32.554} />
      <mesh geometry={nodes.Plane478_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-0.847, 388.431, 127.281]} rotation={[-2.911, -0.397, -2.97]} scale={31.152} />
      <mesh geometry={nodes.Plane479_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[2.568, 400.758, 104.077]} rotation={[-1.492, -0.704, 0.067]} scale={29.553} />
      <mesh geometry={nodes.Plane480_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-41.531, 343.509, 149.778]} rotation={[-2.554, 0.389, 2.051]} scale={32.63} />
      <mesh geometry={nodes.Plane481_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[50.967, 407.713, 101.994]} rotation={[2.786, -1.087, 3.13]} scale={34.671} />
      <mesh geometry={nodes.Plane482_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-17.285, 345.723, 149.358]} rotation={[-0.823, -1.007, 0.739]} scale={30.798} />
      <mesh geometry={nodes.Plane483_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-12.75, 374.779, 184.033]} rotation={[1.86, -0.214, -1.069]} scale={32.602} />
      <mesh geometry={nodes.Plane484_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-11.125, 392.806, 173.766]} rotation={[-0.316, -0.175, -2.553]} scale={34.577} />
      <mesh geometry={nodes.Plane485_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-50.468, 402.81, 151.459]} rotation={[1.921, -1.133, 2.119]} scale={34.269} />
      <mesh geometry={nodes.Plane486_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[94.145, 416.904, 95.774]} rotation={[-1.149, 0.55, 0.837]} scale={31.065} />
      <mesh geometry={nodes.Plane487_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[91.705, 430.317, 101.934]} rotation={[1.984, -1.219, 1.52]} scale={34.712} />
      <mesh geometry={nodes.Plane488_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[15.754, 381.171, 128.902]} rotation={[-0.653, -0.092, 0.188]} scale={31.819} />
      <mesh geometry={nodes.Plane489_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-15.747, 382.088, 192.317]} rotation={[2.069, -0.054, -0.906]} scale={33.71} />
      <mesh geometry={nodes.Plane490_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-22.243, 374.573, 93.427]} rotation={[0.449, -0.258, -2.236]} scale={30.362} />
      <mesh geometry={nodes.Plane491_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-23.94, 371.029, 195.907]} rotation={[1.486, 0.089, -0.653]} scale={32.908} />
      <mesh geometry={nodes.Plane492_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[66.169, 385.407, 88.428]} rotation={[-2.892, -0.812, -3.04]} scale={33.259} />
      <mesh geometry={nodes.Plane493_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-22.393, 355.974, 115.004]} rotation={[-1.084, 1.014, 2.659]} scale={31.824} />
      <mesh geometry={nodes.Plane494_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[15.946, 397.602, 130.941]} rotation={[-0.701, 1.199, -2.248]} scale={30.57} />
      <mesh geometry={nodes.Plane495_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[60.543, 434.636, 115.406]} rotation={[-2.949, 0.648, -0.766]} scale={32.476} />
      <mesh geometry={nodes.Plane496_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[8.911, 387.914, 118.3]} rotation={[-0.775, 0.076, -2.224]} scale={33.885} />
      <mesh geometry={nodes.Plane497_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[-27.044, 370.155, 213.644]} rotation={[1.845, 1.28, 1.382]} scale={33.303} />
      <mesh geometry={nodes.Plane498_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[91.629, 393.867, 130.344]} rotation={[-2.116, 0.314, 1.253]} scale={31.418} />
      <mesh geometry={nodes.Plane499_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[82.123, 421.31, 98.91]} rotation={[-0.196, -0.452, 1.198]} scale={29.808} />
      <mesh geometry={nodes.Plane500_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[87.887, 418.491, 101.889]} rotation={[2.674, -0.803, 1.127]} scale={30.126} />
      <mesh geometry={nodes.Plane501_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[38.771, 394.82, 135.973]} rotation={[-2.542, -0.963, -1.903]} scale={30.043} />
      <mesh geometry={nodes.Plane502_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[96.429, 394.779, 118.501]} rotation={[0.969, -0.6, -2.436]} scale={33.988} />
      <mesh geometry={nodes.Plane503_Hojas_Callendo_0.geometry} material={materials.Hojas_Callendo} position={[13.078, 398.942, 140.085]} rotation={[2.204, -0.593, 0.036]} scale={34.418} />
      <mesh geometry={nodes.Icosphere_Cloud_0.geometry} material={materials.Cloud} position={[-184.481, 724.259, -558.05]} rotation={[-Math.PI / 2, 0, 0.44]} scale={70.914} />
      <mesh geometry={nodes.Icosphere001__0.geometry} material={materials['Icosphere.001__0']} position={[-571.078, 772.15, 169.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Icosphere002__0.geometry} material={materials['Icosphere.001__0']} position={[529.643, 731.509, 80.783]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Icosphere003_Cloud_0.geometry} material={materials.Cloud} position={[449.016, 596.79, 513.505]} rotation={[-Math.PI / 2, 0, 0.44]} scale={53.707} />
    </group>
  )
}

useGLTF.preload('/models/low_poly_floating_island.glb')
