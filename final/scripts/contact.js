function setTimestamp () {
const now = new Date();
document.querySelector("#timestamp").value = now.toLocaleString("en-US")
}