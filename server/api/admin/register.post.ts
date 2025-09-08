import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // clave segura (nunca en frontend)
)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, display_name } = body

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Email y contraseña requeridos' })
  }
  console.log('Creando usuario:', email, display_name);
  
  // Crear usuario en Supabase con la Service Role Key
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { display_name },
  })

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message })
  }

  return { user: data.user }
})
