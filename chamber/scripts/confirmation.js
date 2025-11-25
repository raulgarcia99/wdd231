const params = new URLSearchParams(window.location.search);
const fname = params.get("fname");
const lname = params.get("lname");
const orgTitle = params.get("orgTitle");
const email = params.get("email");
const tel = params.get("tel");
const orgName = params.get("orgName");
const orgDescription = params.get("orgDescription");
const membership = params.get("membership");
const timestamp = params.get("timestamp");

const container = document.querySelector("#formData");
container.innerHTML = `
<p><span class="bolder">First Name: </span>${fname}</p>
<p><span class="bolder">Last Name: </span>${lname}</p>
<p><span class="bolder">Organization Title: </span>${orgTitle}</p>
<p><span class="bolder">Email: </span>${email}</p>
<p><span class="bolder">Phone Number: </span>${tel}</p>
<p><span class="bolder">Organization Name: </span>${orgName}</p>
<p><span class="bolder">Organization Description: </span>${orgDescription}</p>
<p><span class="bolder">Membership: </span>${membership}</p>
<p><span class="bolder">Submitted on: </span>${timestamp}</p>
`;