import {places} from "../data/places.mjs"

console.log(places);

displayCards(places)

function displayCards (data) {
    document.querySelector(".grid").innerHTML = "";
    data.forEach(place => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let description = document.createElement("p");
        let cost = document.createElement("p");

        name.innerHTML = place.name;
        address.innerHTML = place.address;
        description.innerHTML = place.description;
        cost.innerHTML = `Entry cost: ${place.entry_cost}`;

        card.setAttribute("class", "card");
        img.setAttribute("src", place.img);
        img.setAttribute("alt", `${place.name}`);
        img.setAttribute("width", "300px");
        img.setAttribute("height","200px");
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(cost);

        document.querySelector(".grid").appendChild(card);
    });
}