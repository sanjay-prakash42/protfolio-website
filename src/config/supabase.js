import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Initialize the client only if env vars are present, otherwise export a dummy to not crash the app immediately
export const supabase = (supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL') && (supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY')
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
