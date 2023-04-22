import Image from 'next/image'
const Participacion = ({ userPhoto, userName }) => {
  return (
    <main className='w-full bg-black flex flex-col h-screen justify-center items-center'>
      <div>
        <Image
          className='rounded-full'
          src={userPhoto}
          alt={`${userName} photo`}
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col gap-5 items-center mt-4'>
        <span className='text-white uppercase'>{userName}</span>
        <span className='text-white'>Ya estás participando del sorteo!!</span>
      </div>
    </main>
  )
}

export default Participacion
