const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function listBranches() {
  console.log('--- Listing All Branches ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/branches?select=*`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });
  const branches = await res.json();
  console.log('Total Branches:', branches.length);
  console.log('First 20 branches:', JSON.stringify(branches.slice(0, 20), null, 2));
}

listBranches()
