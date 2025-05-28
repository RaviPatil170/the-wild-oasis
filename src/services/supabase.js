import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wyaxmpxalslgtxuinbfs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YXhtcHhhbHNsZ3R4dWluYmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NzQ2ODIsImV4cCI6MjA1ODU1MDY4Mn0.7mzZUZQbK4y9t-jiX1sLQC4ZtkXxaRusvDQa8K0ltMc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
