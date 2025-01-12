import React from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { section } from 'motion/react-client'


const Test3d = () => {
    return (
        <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Canvas>
                <mesh>
                    {/* <boxGeometry args={[2,2,2]}/> */}
                    <Sphere args={[1, 100, 200]} scale={3}>
                        <MeshDistortMaterial color="white" attach="material" distort={0.5} speed={2} />
                    </Sphere>
                    {/* <meshStandardMaterial/> */}
                    <ambientLight intensity={1} />
                    <directionalLight  position={[1, 2, 3]} />
                    <OrbitControls enableZoom={false} />
                </mesh>

            </Canvas>

        </section>
    )
}

export default Test3d
