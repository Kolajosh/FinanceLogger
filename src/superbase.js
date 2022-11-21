import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vebrfhrtuefjfwmdmaid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYnJmaHJ0dWVmamZ3bWRtYWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1NDIyNDUsImV4cCI6MTk4NDExODI0NX0.fOH6pk3L5IA0QPfydNF-Kh_zNGdPnW9Hn376HBbdpUI";
export const supabase = createClient(supabaseUrl, supabaseKey);
