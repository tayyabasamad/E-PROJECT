const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysContainer = document.getElementById("daysContainer");
days.forEach(day => {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = day;
    daysContainer.appendChild(card);
});

const monthsContainer = document.getElementById("monthsContainer");
months.forEach(month => {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = month;
    monthsContainer.appendChild(card);
});
document.getElementById("mobile-menu").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
