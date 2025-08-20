const semesterStart = new Date(2025, 6, 28); // Jul 28, 2025
const totalWeeks = 18;

const today = new Date();
let diffInWeeks =
  Math.floor((today - semesterStart) / (1000 * 60 * 60 * 24 * 7)) + 1;

// --- COLOR GRADIENT (Green to Red) ---
const progress = (diffInWeeks - 1) / (totalWeeks - 1); // 0 to 1
const r = Math.round(0 + (170 - 0) * progress); // from 0 → 170
const g = Math.round(170 - 170 * progress); // from 170 → 0
const b = 0;
const color = `rgb(${r}, ${g}, ${b})`;

// --- DISPLAY ---
const el = document.getElementById("weekDisplay");
const weekText = document.querySelector(".week");
const dateText = document.querySelector(".date");

weekText.textContent = `Semana ${diffInWeeks}`;
weekText.style.color = color;
dateText.textContent = today
  .toLocaleDateString("es-ES", { month: "short", day: "numeric" })
  .replace(".", "");
