const SUPABASE_URL = "https://qyvsgnpbtcztnikccfar.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VHKLHhTzd0vWm9IxLPypeg_rS7zojU7";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);