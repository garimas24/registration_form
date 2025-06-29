import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelDisplay from './ModelDisplay';

const SceneCanvas = ({ activeModel }) => {
  const modelPath = activeModel === 'A'
    ? '/models/ModelA.glb'
    : '/models/ModelB.glb';

  return (
    <div style={{ width: '80%', height: '600px' }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}> 
        <ambientLight intensity={0.5} /> 
        <directionalLight position={[5, 5, 5]} intensity={1} />
         {/* <Suspense fallback={<span>Loading model...</span>}>
          <ModelDisplay model={modelPath} />
        </Suspense> */}

                <Suspense fallback={null}>
  <ModelDisplay model={modelPath} />
</Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
       </Canvas>


      {/* <Canvas>
  <span>Oops</span>
  <ModelDisplay />
</Canvas> */}



    </div>
  );
};

export default SceneCanvas;
