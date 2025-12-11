const lastVisit = localStorage.getItem("lastVisit");
let message = "";

if (lastVisit) {
const now = Date.now();
const diff = now - lastVisit;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

if (days === 0) {
    message = "Back so soon! Awesome!";
} else if (days === 1) {
    message = "You last visited 1 day ago.";
} else {
    message = `You last visited ${days} days ago.`;
}
} else {
message = "It's good to see for first time!";
}

document.querySelector("#lastVisited").innerHTML = message;

localStorage.setItem("lastVisit", Date.now());