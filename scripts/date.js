const navButton = document.querySelector("#navButton");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
});

const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const modification = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)}`