import { Canvas } from "@react-three/fiber";

export default Build = () => {
  return (
    <>
      <h3>Build Page</h3>;
      <Canvas camera={{ position: [0, 3, 5] }}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      ;
    </>
  );
};
