import { CameraContext } from '@/context/CameraContext'
import { OrthographicCamera } from '@react-three/drei'
import { useContext, useEffect } from 'react'

const HomeCamera = ({ children }) => {
  const { cameraOptions, setCameraOptions } = useContext(CameraContext)
  useEffect(() => {
    console.log(cameraOptions)
    console.log(setCameraOptions)
  }, [])

  return (
    <>
      <OrthographicCamera
        rotation={cameraOptions.rotation}
        position={cameraOptions.position}
      >
        {children}
      </OrthographicCamera>
    </>
  )
}

export default HomeCamera
