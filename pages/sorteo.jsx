import { useState, useEffect } from 'react'
import Participacion from '@/components/Participacion'
import {
  addUser,
  supabase,
  getUserSession,
  signInWithTwitch
} from '@/utils/supabaseAuth'
const sorteo = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(getUserSession())

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <main className='w-full bg-black h-screen flex justify-center items-center'>
        <button
          onClick={signInWithTwitch}
          className='text-white bg-slate-700 hover:bg-slate-600 p-4 rounded'
        >
          <div className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 300 300'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                fill='#65459B'
                d='M215.2 260.8h-58.7L117.4 300H78.3v-39.2H6.6V52.2L26.1 0h267.3v182.6l-78.2 78.2zm52.2-91.2V26.1H52.2v189.1h58.7v39.1l39.1-39.1h71.7l45.7-45.6z'
              />
              <path
                fill='#65459B'
                d='M195.6 78.3v78.3h26.1V78.3h-26.1zm-71.7 78.2H150V78.3h-26.1v78.2z'
              />
            </svg>
            <span>Iniciar sesión con Twitch</span>
          </div>
        </button>
      </main>
    )
  } else {
    const userName = session.user.identities[0].identity_data.nickname
    const avatar = session.user.identities[0].identity_data.avatar_url

    const data = addUser(userName)
    return <Participacion userPhoto={avatar} userName={userName} />
  }
}

export default sorteo
