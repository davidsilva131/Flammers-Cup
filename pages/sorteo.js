import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Participacion from '@/components/Participacion'
import { addUser, supabase, getUserSession } from '@/utils/supabaseAuth'

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
      <Auth
        onlyThirdPartyProviders
        providers={['twitch']}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme='dark'
        redirectTo='http://localhost:3000/sorteo'
      />
    )
  } else {
    const userName = session.user.identities[0].identity_data.nickname
    const avatar = session.user.identities[0].identity_data.avatar_url
    console.log(userName)

    const data = addUser(userName)
    return <Participacion userPhoto={avatar} userName={userName} />
  }
}

export default sorteo
