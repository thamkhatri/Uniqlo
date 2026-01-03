// lib/supabase/client.ts
import { createClient } from "@supabase/supabase-js";

// These env vars must exist in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ✅ Named export is best practice
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
