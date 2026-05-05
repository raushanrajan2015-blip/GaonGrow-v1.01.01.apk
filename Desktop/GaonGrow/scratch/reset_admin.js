const supabaseUrl = "https://lwojbsswhgcvgqxojvja.supabase.co"
const supabaseKey = "sb_publishable_eyAcEyKd0bYgVH6xEzbG_A_9GYmlPYI"

async function resetAdminPassword() {
  console.log('--- Resetting GMPL0001 Password to Admin ---')
  const res = await fetch(`${supabaseUrl}/rest/v1/admin_users?user_id=eq.GMPL0001`, {
    method: 'PATCH',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: 'Admin'
    })
  });
  
  if (res.ok) {
    console.log('Password reset successfully to: Admin');
  } else {
    console.error('Failed to reset password:', await res.text());
  }
}

resetAdminPassword()
