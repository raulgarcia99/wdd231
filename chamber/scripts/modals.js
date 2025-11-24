const npButton = document.querySelector("#npButton");
const npModal = document.querySelector("#npModal");
const npClose = document.querySelector("#npClose");

const bronzeButton = document.querySelector("#bronzeButton");
const bronzeModal = document.querySelector("#bronzeModal");
const bronzeClose = document.querySelector("#bronzeClose");

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