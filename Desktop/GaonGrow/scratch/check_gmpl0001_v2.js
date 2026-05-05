const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function checkGMPL0001() {
  console.log('--- Searching for GMPL0001 ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/admin_users?user_id=ilike.GMPL0001&select=*`, {
    headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
  });
  const users = await res.json();
  console.log('Users found:', JSON.stringify(users, null, 2));
}

checkGMPL0001()
