export const useAuth = () => {
    const supabase = useSupabase()
    const user = useState('user', () => null)
  
    const register = async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
      user.value = data.user
      return data
    }
  
    const login = async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      user.value = data.user
      return data
    }
  
    const logout = async () => {
      await supabase.auth.signOut()
      user.value = null
    }
  
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      user.value = data.user
      return data.user
    }
  
    return {
      user,
      register,
      login,
      logout,
      getUser
    }
  }
  