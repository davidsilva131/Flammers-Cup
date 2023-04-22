import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import PrincipalScene from './scenes/PrincipalScene'

const Content = () => {
  return (
    <section
      id='inicio'
      className='w-full flex h-screen bg-black flex-col items-center justify-between '
    >
      <Canvas className='w-full'>
        <ambientLight intensity={1} />
        <PrincipalScene />
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor='black'
          />
        </GizmoHelper>
      </Canvas>
    </section>
  )
}

export default Content
