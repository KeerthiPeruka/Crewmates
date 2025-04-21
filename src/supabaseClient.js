import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdcnzjblvcrmvzbikjek.supabase.co'; 

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkY256amJsdmNybXZ6YmlramVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMDgxODcsImV4cCI6MjA2MDc4NDE4N30.dxdFjCC7qac8DrurmTF2LqIjmco9HQoynuWY1rg6VkY'; 

export const supabase = createClient(supabaseUrl, supabaseKey);