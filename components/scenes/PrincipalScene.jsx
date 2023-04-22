import Octahedron from '@/models/Octahedron'
import HomeCamera from '../cameras/HomeCamera'
import { OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'

// const { DEG2RAD } = THREE.MathUtils

const PrincipalScene = () => {
  return (
    <group>
      <HomeCamera>
        <Octahedron />
      </HomeCamera>
      <OrbitControls
        enableZoom={false}
        autoRotate
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </group>
  )
}
export default PrincipalScene
