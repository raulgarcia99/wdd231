const myGraphic = document.querySelector("#graphic");
const myDescription = document.querySelector("#description");
const myTemp = document.querySelector("#temperature");

const myKey = "7a7babae9ae72d87a7680b2da3a82dd0";
const myLat = "13.67168";
const myLon = "-89.288338";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;
async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults (data) {
    console.log("Hey, it worked")
    myDescription.innerHTML = data.weather[0].description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute("src", iconsrc)
    myGraphic.setAttribute("alt", data.weather[0].description)
    myTemp.innerHTML = `${data.main.temp}&deg;C`
}