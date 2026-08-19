"use client";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TokyoModel from "@/components/Model/TokyoModel";
// import { DirectionalLight } from "three";
// import { AmbientLight } from "three";
// import * as THREE from "three";

export default function Scene() {
    return (
        <div className="bg-rose-400 absolute top-0 left-0 right-0 bottom-0">
            <Canvas
                shadows
                // gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}
                // camera={{ position: [0, 2, 5], fov: 50 }}
            >
                {/* <color attach="background" args={["#141414"]} /> */}
                {/* Replicate Sketchfab Environment & Lights */}
                <Environment preset="sunset" background={false} />
                {/* <ambientLight intensity={0.7} /> */}
                {/* <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} /> */}
                <directionalLight position={[-5, 8, 0]} castShadow />
                <OrbitControls />
                <TokyoModel />
            </Canvas>
        </div>
    );
}
