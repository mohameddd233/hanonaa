// Floating animation for gallery images
document.querySelectorAll('.gallery img').forEach((img,i)=>{
    img.style.animation=`float 3s ease-in-out ${i*0.2}s infinite alternate`;
});

const style=document.createElement('style');
style.innerHTML=`@keyframes float{from{transform:translateY(0)}to{transform:translateY(-6px)}}`;
document.head.appendChild(style);
// حساب عدد الأيام من 10/10/2025 حتى اليوم
function updateDayCount() {
    const startDate = new Date(2025, 9, 10); // شهر أكتوبر = 9 (0-indexed)
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('day-count').textContent = diffDays;
}

// نفذها على طول
updateDayCount();
// Simple image animation on load
const images = document.querySelectorAll(".gallery img");

images.forEach((img, index) => {
  img.style.opacity = "0";
  img.style.transform = "scale(0.9)";
  setTimeout(() => {
    img.style.transition = "0.6s";
    img.style.opacity = "1";
    img.style.transform = "scale(1)";
  }, index * 150);
});
