import { Canvas } from "@react-three/fiber";

export default Build = () => {
  return (
    <>
      <h3>Build Page</h3>;
      <Canvas camera={{ position: [3, 3, 1] }}>
        <group>
        <mesh position={[1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <planeGeometry attach="geometry" args={[25, 15]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        </group>
      </Canvas>
      ;
    </>
  );
};
