const startDate = new Date(2025,9,10);
const today = new Date();
const diff = Math.floor((today - startDate)/(1000*60*60*24));
document.getElementById("days").textContent = diff >= 0 ? diff : 0;
