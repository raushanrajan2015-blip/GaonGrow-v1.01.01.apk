const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function checkRoles() {
  console.log('--- Checking for SUPER_ADMIN role ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/roles?role_id=eq.SUPER_ADMIN&select=*`, {
    headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
  });
  const roles = await res.json();
  console.log('Roles found:', JSON.stringify(roles, null, 2));
}

checkRoles()
