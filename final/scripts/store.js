//fetching data
const fetchData = async() => {
    try{
        const response = await fetch("data/products.json");
        const products = await response.json();
        console.log(products)
        createCards(products);

        //filters

        const notFiltered = document.querySelector("#all");

        notFiltered.addEventListener("click", () => {
            createCards(products);
            notFiltered.classList.add("active")
            snacksFiltered.classList.remove("active");
            drinksFiltered.classList.remove("active");
            accessoriesFiltered.classList.remove("active");
        })

        const snacksFiltered = document.querySelector("#snacks");

        snacksFiltered.addEventListener("click", () => {
            createCards(products.filter(product => product.type === "snack"));
            notFiltered.classList.remove("active")
            snacksFiltered.classList.add("active");
            drinksFiltered.classList.remove("active");
            accessoriesFiltered.classList.remove("active");
        })

        const drinksFiltered = document.querySelector("#drinks");

        drinksFiltered.addEventListener("click", () => {
            createCards(products.filter(product => product.type === "drink"));
            notFiltered.classList.remove("active")
            snacksFiltered.classList.remove("active");
            drinksFiltered.classList.add("active");
            accessoriesFiltered.classList.remove("active");
        })

        const accessoriesFiltered = document.querySelector("#accessories");

        accessoriesFiltered.addEventListener("click", () => {
            createCards(products.filter(product => product.type === "accessory"));
            notFiltered.classList.remove("active")
            snacksFiltered.classList.remove("active");
            drinksFiltered.classList.remove("active");
            accessoriesFiltered.classList.add("active");
        })
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

fetchData();

//Creating cards function

function createCards(data) {
    document.querySelector(".products").innerHTML = "";
    data.forEach(product => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let img = document.createElement("img");
        let price = document.createElement("p");

        name.innerHTML = product.name;
        price.innerHTML = `$${product.price.toFixed(2)}`;

        card.classList.add("card", "box")
        img.setAttribute("src", product.image);
        img.setAttribute("alt", `${product.name}`);
        img.setAttribute("width", "300px");
        img.setAttribute("height","auto");
        img.setAttribute("loading", "lazy");
        img.setAttribute("class", "productImg")
        name.setAttribute("class", "bold")

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(price);

        document.querySelector(".products").appendChild(card);
    });
}