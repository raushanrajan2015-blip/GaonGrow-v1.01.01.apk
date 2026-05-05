const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function fixBranch() {
  console.log('--- Fixing ROH_CSP Branch ---')
  
  // 1. Check if ROH_CSP exists
  const checkRes = await fetch(`${supabaseUrl}/rest/v1/branches?branch_code=eq.ROH_CSP&select=*`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });
  const existing = await checkRes.json();
  
  if (existing.length > 0) {
    console.log('Branch ROH_CSP already exists:', JSON.stringify(existing[0], null, 2));
  } else {
    console.log('Branch ROH_CSP NOT found. Attempting to insert...');
    
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/branches`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        branch_code: 'ROH_CSP',
        branch_name: 'ROH_CSP Branch',
        region: 'Bihar',
        city: 'Rohtas',
        status: 'active'
      })
    });
    
    const result = await insertRes.json();
    console.log('Insert Result:', JSON.stringify(result, null, 2));
  }
}

fixBranch()
