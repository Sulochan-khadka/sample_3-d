import logo from './logo.svg';
import './App.css';
import { Model } from './components/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={2} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

export default App;
