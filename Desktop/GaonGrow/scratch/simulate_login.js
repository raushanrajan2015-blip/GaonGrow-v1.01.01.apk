const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function simulateLogin() {
  const userId = 'GMPL0001';
  const password = 'Admin';
  
  console.log(`--- Simulating Login for ${userId} ---`);
  const res = await fetch(`${supabaseUrl}/rest/v1/admin_users?user_id=ilike.${userId}&password=eq.${password}&select=*,roles(role_name,permissions)`, {
    headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
  });
  const data = await res.json();
  console.log('Result:', JSON.stringify(data, null, 2));
}

simulateLogin()
