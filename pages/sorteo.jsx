import { useState, useEffect } from 'react'
import Participacion from '@/components/Participacion'
import { addUser, supabase, getUserSession } from '@/utils/supabaseAuth'
import ButtonSignUpTwitch from '@/components/ButtonSignUpTwitch'
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
        <ButtonSignUpTwitch />
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
