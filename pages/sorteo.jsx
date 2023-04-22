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
      <main className='w-full bg-black h-screen flex justify-center items-center'>
        <Auth
          onlyThirdPartyProviders
          providers={['twitch']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          localization={{
            variables: {
              sign_in: {
                social_provider_text: 'Inicia sesion con {{provider}}'
              }
            }
          }}
          theme='dark'
          redirectTo='http://localhost:3000/sorteo'
        />
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
