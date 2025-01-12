import React from 'react'
import { Sphere } from '@react-three/drei'
import { MeshDistortMaterial } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

const Shape = () => {
    return (
        <>
            <Sphere args={[1, 100, 200]} scale={3}>
                <MeshDistortMaterial color="white" attach="material" distort={0.5} speed={2} />
            </Sphere>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 3]} />
            {/* <OrbitControls enableZoom={false} /> */}
        </>
    )
}

export default Shape
