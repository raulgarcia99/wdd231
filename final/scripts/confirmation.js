const params = new URLSearchParams(window.location.search);
const fname = params.get("fname");
const lname = params.get("lname");
const email = params.get("email");
const tel = params.get("tel");
const timestamp = params.get("timestamp");
const purpose = params.get("purpose");
const description = params.get("description");
const newsletter = params.get("newsletter")

const container = document.querySelector("#formData");
container.innerHTML = `
<p><span class="bold">First Name: </span>${fname}</p>
<p><span class="bold">Last Name: </span>${lname}</p>
<p><span class="bold">Email: </span>${email}</p>
<p><span class="bold">Phone Number: </span>${tel}</p>
<p><span class="bold">Type: </span>${purpose}</p>
<p><span class="bold">Description: </span>${description}</p>
<p><span class="bold">Newsletter: </span>${newsletter}</p>
<p><span class="bold">Submitted on: </span>${timestamp}</p>
`;