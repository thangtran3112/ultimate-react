import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://umlmagmcloufogficbgv.supabase.co";
const viteSuppabaseKey = import.meta.env.VITE_SUPABASE_KEY;

//if .env file does not exist with VITE_SUPABASE_KEY, use process.env from Node
const supabaseKey = viteSuppabaseKey
  ? viteSuppabaseKey
  : process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
