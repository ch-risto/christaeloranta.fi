// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_DB_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

console.log('ENV CHECK:', { 
  urlFound: !!supabaseUrl, 
  urlMatch: supabaseUrl === 'https://bujrlkqhszxfjxdcrfkh.supabase.co'
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('CRITICAL: Supabase keys missing. Check Vercel Environment Variables.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
