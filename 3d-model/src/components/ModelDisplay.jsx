import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

const ModelDisplay = ({ model }) => {
  const { scene } = useGLTF(model);

  return <primitive object={scene} scale={0.5} />
};

export default ModelDisplay;
