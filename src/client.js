import { createClient } from "@supabase/supabase-js";
const URL = "https://srnzgfmlzllexemwlnfg.supabase.co"; 
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybnpnZm1semxsZXhlbXdsbmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMDAxMTAsImV4cCI6MjAwMTc3NjExMH0.2LcGdCJG39EDZH16454pKe0k89VzcuXCKHHhpjFQoVE"; 
export const supabase = createClient(URL, API_KEY); 