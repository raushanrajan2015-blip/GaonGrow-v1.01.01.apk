const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function checkRolesAndAddAdmin() {
  console.log('--- Checking Roles ---')
  const resR = await fetch(`${supabaseUrl}/rest/v1/roles?select=*`, {
    headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
  });
  const roles = await resR.json();
  console.log('Roles:', JSON.stringify(roles, null, 2));

  console.log('\n--- Attempting to Insert GMPL0001 ---')
  const resI = await fetch(`${supabaseUrl}/rest/v1/admin_users`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      user_id: 'GMPL0001',
      name: 'Super Admin',
      password: 'Admin', // As requested by user
      role_id: 'SUPER_ADMIN',
      status: 'active',
      must_change_password: false
    })
  });
  
  const result = await resI.json();
  console.log('Insert Result:', JSON.stringify(result, null, 2));
}

checkRolesAndAddAdmin()
