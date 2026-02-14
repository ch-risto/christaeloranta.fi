// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 1. Lue muuttujat turvallisesti
// const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseUrl = "https://bujrlkqhszxfjxdcrfkh.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

// 2. DEBUG: Tulosta nämä HETI. Tämä näkyy konsolissa ennen kuin sovellus kaatuu.
console.log('--- SUPABASE INIT START ---');
console.log('URL:', supabaseUrl ? 'Found' : 'MISSING/UNDEFINED');
console.log('KEY:', supabaseAnonKey ? 'Found' : 'MISSING/UNDEFINED');
console.log('Full ENV object:', import.meta.env); // Tulostaa kaikki (paitsi salaiset)
console.log('--- SUPABASE INIT END ---');

// 3. Luo client vain jos arvot ovat olemassa
// Jos arvot puuttuvat, emme heitä virhettä heti, vaan palautamme "null" tai feikin,
// jotta näet debug-logit selaimessa.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('CRITICAL: Supabase keys missing. Check Vercel Environment Variables.');
}

// "Non-null assertion" (!) on vaarallinen jos arvot puuttuvat, mutta tässä vaiheessa
// haluamme nähdä logit.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
