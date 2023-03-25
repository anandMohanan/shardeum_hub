import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cjagyuzlbjtilkvavpgy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYWd5dXpsYmp0aWxrdmF2cGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3ODgwMTEsImV4cCI6MTk5MjM2NDAxMX0.xgXcFbOjKqOsUFArLCUuSpvAoB7gGCvsN7ePRFr4Mos"
);
