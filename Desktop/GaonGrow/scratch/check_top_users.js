const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function checkTopUsers() {
  console.log('--- Listing Top 5 Users ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/admin_users?select=user_id,name,role_id,status&order=user_id.asc&limit=5`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });
  const users = await res.json();
  console.log('Users:', JSON.stringify(users, null, 2));
}

checkTopUsers()
