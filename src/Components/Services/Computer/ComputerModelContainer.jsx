import React from 'react'
import { Canvas } from '@react-three/fiber'
import  {ComputerModel} from "./ComputerModel"
import { OrbitControls } from '@react-three/drei'
import { Stage, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
// import { PerspectiveCamera } from 'three'
// import { Model as ComputerModel } from "./ComputerModel";



const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
          <Stage environment="night" intensity={0.5}>
          <ComputerModel scale={[3,3,3]} />
          </Stage>
            <OrbitControls enableZoom={false}/>
            <PerspectiveCamera position={[-2, 1,4]}/>
        </Suspense>

    </Canvas>
  )
}

export default ComputerModelContainer
