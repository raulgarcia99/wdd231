import {places} from "../data/places.mjs"

console.log(places);

displayCards(places)

function displayCards (data) {
    document.querySelector(".places").innerHTML = "";
    data.forEach(place => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let figure = document.createElement("figure")
        let img = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button")

        name.innerHTML = place.name;
        address.innerHTML = place.address;
        description.innerHTML = place.description;
        button.innerHTML = "Learn more"

        card.setAttribute("class", "card");
        img.setAttribute("src", place.img);
        img.setAttribute("alt", `${place.name}`);
        img.setAttribute("width", "300px");
        img.setAttribute("height","200px");
        img.setAttribute("loading", "lazy");  
        name.setAttribute("class", "place-name");
        address.setAttribute("class", "place-address");
        description.setAttribute("class", "place-description");
        button.setAttribute("class", "button");
        button.setAttribute("with", "100px");

        card.appendChild(name);
        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        document.querySelector(".places").appendChild(card);
    });
}