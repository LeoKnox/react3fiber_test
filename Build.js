import { Canvas } from "@react-three/fiber";

export default Build = () => {
  return (
    <>
      <h3>Build Page</h3>;
      <Canvas camera={{ position: [3, 3, 1], rotation: [90, 0, 135] }}>
        <pointLight position={[2, 2, 2]} />
        <ambientLight />
        <group>
          <mesh position={[1, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh position={[-1, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <mesh position={[0, -3, 0]} rotation={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[25, 10, 30]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </group>
      </Canvas>
      ;
    </>
  );
};
