// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_DB_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase configuration. Please ensure VITE_SUPABASE_DB_URL and VITE_SUPABASE_KEY environment variables are set.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
