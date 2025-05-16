// Replace with your Supabase project URL and ANON key
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR_PUBLIC_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('feedback-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = document.getElementById('feedback-input').value.trim();
  if (!message) return alert('Enter feedback');
  
  const { data, error } = await supabase
    .from('feedback')
    .insert([{ message }]);
  
  if (error) {
    alert('Error submitting feedback');
    console.error(error);
  } else {
    document.getElementById('feedback-success').textContent = 'Thank you!';
    document.getElementById('feedback-input').value = '';
  }
});
