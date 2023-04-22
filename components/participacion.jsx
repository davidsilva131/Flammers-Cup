import Image from 'next/image'
const Participacion = ({ userPhoto, userName }) => {
  return (
    <main className='w-full bg-black flex flex-col h-screen justify-center items-center'>
      <div>
        <Image
          src={userPhoto}
          alt={`${userName} photo`}
          width={50}
          height={50}
        />
      </div>
      <span>{userName} ya estás participando del torneo!!!</span>
    </main>
  )
}

export default Participacion
