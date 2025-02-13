// ضيف الـ JS دا في اخر الصفحة
const toggleBtn = document.querySelector('.toggle-project-btn');
const projectCard = document.querySelector('.project-card');

toggleBtn.addEventListener('click', () => {
  projectCard.classList.toggle('hidden');
  
  // تغيير نص الزر ديناميكي
  toggleBtn.textContent = projectCard.classList.contains('hidden') 
    ? 'Show Project Preview 🖼️' 
    : 'Hide Project Preview 🚫';
});