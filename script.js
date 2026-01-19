document.querySelectorAll('.gallery img').forEach((img,i)=>{
img.style.animation=`float 3s ease-in-out ${i*.2}s infinite alternate`
});
const s=document.createElement('style');
s.innerHTML='@keyframes float{from{transform:translateY(0)}to{transform:translateY(-6px)}}';
document.head.appendChild(s);
