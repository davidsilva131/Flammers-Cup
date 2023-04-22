import Link from 'next/link'

const Octahedron = () => {
  const redirectTo = () => {
    window.open('https://www.twitch.tv/ldasein', '_blank')
  }
  return (
    <>
      <mesh onClick={redirectTo} position={[0, 0, 0]}>
        <octahedronGeometry computeVertexNormals />
        <meshBasicMaterial color='yellow' />
      </mesh>
    </>
  )
}

export default Octahedron
