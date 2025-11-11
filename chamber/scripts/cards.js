const fetchData = async() => {
    try{
        const response = await fetch("data/members.json");
        const data = await response.json();
        console.log(data);
        createCards(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

fetchData();

function createCards(data) {
    document.querySelector(".cards").innerHTML = "";
    data.forEach(member => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        address.innerHTML = member.address;
        phone.innerHTML = member.phone;
        url.innerHTML = member.url;

        card.setAttribute("class", "card");
        img.setAttribute("src", member.logo);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("width", "300px");
        img.setAttribute("height","auto");
        img.setAttribute("loading", "lazy");
        url.setAttribute("href", member.url);

        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        document.querySelector(".cards").appendChild(card);
    });
}
