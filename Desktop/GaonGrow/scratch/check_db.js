const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function checkUser() {
  console.log('--- Checking User GMPL0011 ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/admin_users?user_id=ilike.GMPL0011&select=*`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });
  const users = await res.json();
  
  if (users.length === 0) {
    console.log('User GMPL0011 not found in admin_users');
  } else {
    const user = users[0];
    console.log('User found:', JSON.stringify(user, null, 2));
    
    if (user.branch_codes && user.branch_codes.length > 0) {
      console.log('Fetching branches for codes:', user.branch_codes);
      const codes = user.branch_codes.map(c => `"${c}"`).join(',');
      const resB = await fetch(`${supabaseUrl}/rest/v1/branches?branch_code=in.(${codes})&select=*`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      const branches = await resB.json();
      console.log('Branches found:', JSON.stringify(branches, null, 2));
    } else {
      console.log('User has NO branch_codes assigned in admin_users');
    }
  }

  console.log('\n--- Checking branch ROH_CSP ---');
  const resR = await fetch(`${supabaseUrl}/rest/v1/branches?branch_name=ilike.*ROH_CSP*&select=*`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });
  const rohcsp = await resR.json();
  console.log('ROH_CSP branches matching:', JSON.stringify(rohcsp, null, 2));
}

checkUser()
