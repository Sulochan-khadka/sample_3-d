import './App.css';
import { Model } from './components/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

function App() {
  const cameraRef = useRef();
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        position={[0, 5, 20]} // Adjust the z-coordinate to move the camera closer or farther from the scene
      />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={2} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

export default App;
