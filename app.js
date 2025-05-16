// Replace with your Supabase project URL and ANON key
const SUPABASE_URL = 'https://ywbvonlcabqmmsninoao.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3YnZvbmxjYWJxbW1zbmlub2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MjU3NTYsImV4cCI6MjA2MzAwMTc1Nn0.Xm-CsOyZDwSkyALWSZm-gFY4Zx_Ad0aE0ReSoYRUBQo';

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
