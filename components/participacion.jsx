import Image from 'next/image'
const Participacion = ({ userPhoto, userName }) => {
  return (
    <div>
      <Image src={userPhoto} alt={`${userName} photo`} width={50} height={50} />
      <span>{userName} ya estás participando del torneo!!!</span>
    </div>
  )
}

export default Participacion
