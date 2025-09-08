export const useAuth = () => {
  const supabase = useSupabase()
  const user = useState('user', () => null)

  const initUser = async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data.user
  }


 /*  const register = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) throw error
    user.value = data.user
    return data
  } */
  
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
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

    

    // Actualizar datos de usuario: teléfono, contraseña y display_name
    const updateUser = async (updates: { phone?: string; password?: string; display_name?: string }) => {
      if (!user.value) throw new Error('Usuario no logueado')
      const { data, error } = await supabase.auth.updateUser({
        password: updates.password,
        data: {
          phone: updates.phone,
          display_name: updates.display_name
        }
      })
      if (error) throw error
  
      // actualizar estado local
      user.value = { ...user.value, ...data.user } as User
      return data
    }

  const createUser = async (email: string, password: string, display_name: string) => {
    try {
      const res = await $fetch('/api/admin/register', {
        method: 'POST',
        body: { email, password, display_name }
      })

      return { message: '✅ Usuario creado correctamente', user: res.user }
    } catch (error: any) {
      throw new Error(error?.data?.statusMessage || '❌ Error creando usuario')
    }
  }

  return {
    user,
    initUser,
    //register,
    login,
    logout,
    getUser,
    updateUser,
    createUser,
  }
}
