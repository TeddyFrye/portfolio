import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yoxbpthhqpumdxcymnvh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveGJwdGhocXB1bWR4Y3ltbnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNjAwMjQsImV4cCI6MjAzOTkzNjAyNH0.uvaG-_2vW2IiWd3hmw2p743YSgiuJHBafneNGFqx5EY";

export const supabase = createClient(supabaseUrl, supabaseKey);
