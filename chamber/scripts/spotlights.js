const fetchData = async() => {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const spotlightMembers = members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    const randomCount = Math.floor(Math.random() * 2) + 2;
    const selectedMembers = [];

    while (selectedMembers.length < randomCount && spotlightMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
      selectedMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
    }

    const container = document.getElementById("spotlights");
    container.innerHTML = "";

    selectedMembers.forEach(member => {
        let spotlight = document.createElement("div");
        let name = document.createElement("p");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let memberLvl = document.createElement("p")

        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phone.innerHTML = member.phone;
        url.innerHTML = member.url;
        memberLvl.innerHTML = `${member.membership} Member`;
        

        spotlight.setAttribute("class", "spotlight");
        img.setAttribute("src", member.logo);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("width", "200px");
        img.setAttribute("height","auto");
        img.setAttribute("loading", "lazy");
        url.setAttribute("href", member.url);

        spotlight.appendChild(img);
        spotlight.appendChild(name);
        spotlight.appendChild(address);
        spotlight.appendChild(phone);
        spotlight.appendChild(url);
        spotlight.appendChild(memberLvl)

        document.querySelector("#spotlights").appendChild(spotlight);
    });
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

fetchData();