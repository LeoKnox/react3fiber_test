import { Canvas } from "@react-three/fiber";

export default Build = () => {
  return (
    <>
      <h3>Build Page</h3>;
      <Canvas camera={{ position: [3, 3, 1] }}>
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
          <mesh position={[0, -3, 0]}>
            <planeGeometry attach="geometry" args={[25, 8]} />
            <meshStandardMaterial color = "red" />
          </mesh>
        </group>
      </Canvas>
      ;
    </>
  );
};
