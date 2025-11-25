const now = new Date();
document.querySelector("#timestamp").value = now.toLocaleString("en-US")

const npButton = document.querySelector("#npButton");
const npModal = document.querySelector("#npModal");
const npClose = document.querySelector("#npClose");

const bronzeButton = document.querySelector("#bronzeButton");
const bronzeModal = document.querySelector("#bronzeModal");
const bronzeClose = document.querySelector("#bronzeClose");

const silverButton = document.querySelector("#silverButton");
const silverModal = document.querySelector("#silverModal");
const silverClose = document.querySelector("#silverClose");

const goldButton = document.querySelector("#goldButton");
const goldModal = document.querySelector("#goldModal");
const goldClose = document.querySelector("#goldClose");

npButton.addEventListener("click", () => {
    npModal.showModal();
});

npClose.addEventListener("click", () => {
    npModal.close();
});

bronzeButton.addEventListener("click", () => {
    bronzeModal.showModal();
});

bronzeClose.addEventListener("click", () => {
    bronzeModal.close();
});

silverButton.addEventListener("click", () => {
    silverModal.showModal();
});

silverClose.addEventListener("click", () => {
    silverModal.close();
});

goldButton.addEventListener("click", () => {
    goldModal.showModal();
});

goldClose.addEventListener("click", () => {
    goldModal.close();
});