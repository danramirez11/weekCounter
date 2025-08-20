const semesterStart = new Date(2025, 6, 28); // Jul 28, 2025

const today = new Date();
const diffInMs = today - semesterStart;
const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7)) + 1;

document.getElementById("weekDisplay").textContent = "Week " + diffInWeeks;
