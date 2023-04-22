import { useState } from 'react'
import { CameraContext } from './CameraContext'

export const CameraProvider = ({ children }) => {
  const [cameraOptions, setCameraOptions] = useState({
    position: [0, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    zoom: 5
  })
  return (
    <CameraContext.Provider value={{ cameraOptions, setCameraOptions }}>
      {children}
    </CameraContext.Provider>
  )
}
