import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/galvanic_cell.glb');
  const { actions, names } = useAnimations(animations, group);
  //   console.log(names);
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='e-_0' position={[2.951, -0.157, 0.182]} scale={0}>
                <mesh
                  name='Object_4'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Green_bright}
                />
              </group>
              <group name='Cu2+_1' position={[-2.089, -0.173, -0.317]}>
                <mesh
                  name='Object_6'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
              </group>
              <group name='Cu_2' position={[-2.995, -0.644, 0.248]}>
                <mesh
                  name='Object_8'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Lamp_off}
                />
              </group>
              <group
                name='Light_ON_3'
                position={[0.015, 5.455, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.487}
              >
                <mesh
                  name='Object_10'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Yellow_shine}
                />
                <mesh
                  name='Object_11'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.METAL_2}
                />
              </group>
              <group
                name='Zn_4'
                position={[3.084, -0.702, 0.188]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name='Object_13'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Lamp_off}
                />
              </group>
              <group
                name='Zn2+_5'
                position={[3.38, -0.732, 0.188]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0}
              >
                <mesh
                  name='Object_15'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name='Text001_6'
                position={[-1.029, -0.125, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.928}
              >
                <mesh
                  name='Object_17'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.Green_bright}
                />
              </group>
              <group
                name='sulphate_anion_7'
                position={[0.371, 2.808, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.643}
              >
                <mesh
                  name='Object_19'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Green_bright}
                />
              </group>
              <group
                name='Na+_8'
                position={[-0.265, 2.798, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.766}
              >
                <mesh
                  name='Object_21'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name='Sodium_cation_9'
                position={[-0.929, 2.798, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.766}
              >
                <mesh
                  name='Object_23'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name='e-001_10'
                position={[2.951, -0.157, 0.182]}
                scale={0}
              >
                <mesh
                  name='Object_25'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Green_bright}
                />
              </group>
              <group
                name='Oxidation_11'
                position={[2.408, -2.129, 2.079]}
                scale={0}
              >
                <mesh
                  name='Object_27'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials['black.001']}
                />
              </group>
              <group
                name='Reduction_12'
                position={[-2.09, -2.163, 2.079]}
                scale={0}
              >
                <mesh
                  name='Object_29'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials['black.001']}
                />
              </group>
              <group name='Galvanic_cell_23' position={[0.043, 8.168, 0]}>
                <group
                  name='_Light_Off_13'
                  position={[0.17, -2.955, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.515}
                >
                  <mesh
                    name='Object_32'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.METAL_2}
                  />
                  <mesh
                    name='Object_33'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.light_bottom}
                  />
                  <mesh
                    name='Object_34'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Lamp_off}
                  />
                </group>
                <group
                  name='Anode_14'
                  position={[3.06, -7.134, 0.129]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.317, 1, 2.081]}
                >
                  <mesh
                    name='Object_36'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials.Grey_metalic}
                  />
                </group>
                <group
                  name='Beaker_anode_15'
                  position={[2.066, -7.901, 0]}
                  scale={[1.714, 1.96, 1.714]}
                >
                  <mesh
                    name='Object_38'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.White__blueT}
                  />
                </group>
                <group
                  name='Beaker_cathode_16'
                  position={[-2.181, -7.901, 0]}
                  scale={[1.714, 1.96, 1.714]}
                >
                  <mesh
                    name='Object_40'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials.White__blueT}
                  />
                </group>
                <group
                  name='Cathode_17'
                  position={[-3.024, -7.134, 0.129]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.317, 1, 2.081]}
                >
                  <mesh
                    name='Object_42'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.Copper_metal}
                  />
                </group>
                <group
                  name='Lamp_holder_18'
                  position={[-0.03, -3.305, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={0.207}
                >
                  <mesh
                    name='Object_44'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials.light_bottom}
                  />
                </group>
                <group
                  name='Liquid_anode_side_19'
                  position={[2.066, -8.168, 0]}
                  scale={1.647}
                >
                  <mesh
                    name='Object_46'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.Green_grey_T}
                  />
                </group>
                <group
                  name='Liquid_cathode_side_20'
                  position={[-2.166, -8.168, 0]}
                  scale={1.647}
                >
                  <mesh
                    name='Object_48'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.Blue_T}
                  />
                </group>
                <group
                  name='Salt_bridge_21'
                  position={[-0.043, -8.168, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name='Object_50'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials.White__blueT}
                  />
                </group>
                <group
                  name='Wires_22'
                  position={[-0.043, -4.184, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name='Object_52'
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials.black}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galvanic_cell.glb');
