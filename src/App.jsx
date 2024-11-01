import {OrbitControls, Sparkles} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {useRef} from "react";

/**
 * A rotating cube with sparkles.
 *
 * @return {JSX.Element} The rotating cube element.
 */
/**
 * A rotating mesh component that represents a cube with sparkles.
 * The mesh rotates continuously on its x, y, and z axes.
 * It uses a cylinder geometry with specified dimensions and a Lambert material.
 * Sparkles are added to enhance the visual effect.
 *
 * @component
 * @example
 * return (
 *   <RotatingCube />
 * )
 *
 * @returns {JSX.Element} The rotating cube mesh with sparkles.
 */
const RotatingCube = () => {
    
    const meshRef =  useRef();

    useFrame(() => {
         if(meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
    });
    return (
        <mesh
        ref = {meshRef}
        >
            <cylinderGeometry
                args={[1, 1, 1]}
            />
            <meshLambertMaterial
                color = {0x468585}
                emissive = {0x468585}
            />

            <Sparkles
            count = {100}
            size = {6}
            scale = {[1, 1, 1]}
            speed = {0.002}
            noise = {0.2}
            color = "orange"
            />
        </mesh>
    );
};
/**
 * The main app component.
 *
 * This component renders a Canvas with a rotating cube inside.
 * The cube is rendered with a rotating animation.
 * The Canvas is styled to fit the full window.
 * The OrbitControls component is used to allow zooming, panning, and rotating the cube.
 * A directional light source is added to illuminate the cube.
 * The background color is set to a light gray.
 *
 * @return {JSX.Element} The app component element.
 */
const App =() => {
    return (
        <Canvas
        style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
            />
            <directionalLight
                position={[1, 1, 1]}
                intensity={10}
                color= {0x9CDBA6}
            />
            <color
            attach = "background"
            args = {[0xF0F0F0]}
            />

            <RotatingCube

            />
        </Canvas>
    )
}

export default App;