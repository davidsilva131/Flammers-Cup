import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SUPABASE_URL
    : process.env.SUPABASE_URL,
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SUPABASE_KEY
    : process.env.SUPABASE_KEY
)
export const getUserSession = () => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    return session
  })
}

export const addUser = async userName => {
  let { data, error } = await supabase
    .from('users')
    .select('userName')
    .eq('userName', userName)

  if (data.length > 0) {
    return error
  } else {
    const { data, error } = await supabase
      .from('users')
      .insert({ userName: userName })
    return data
  }
}
