//Modals

const openPc = document.querySelector("#openPc");
const pc = document.querySelector("#pc");
const closePc = document.querySelector("#closePc")

openPc.addEventListener("click", () => {
    pc.showModal();
});

closePc.addEventListener("click", () => {
    pc.close();
});

const openCopy = document.querySelector("#openCopy");
const copy = document.querySelector("#copy");
const closeCopy = document.querySelector("#closeCopy")

openCopy.addEventListener("click", () => {
    copy.showModal();
});

closeCopy.addEventListener("click", () => {
    copy.close();
});

const openPrinting = document.querySelector("#openPrinting");
const printing = document.querySelector("#printing");
const closePrinting = document.querySelector("#closePrinting")

openPrinting.addEventListener("click", () => {
    printing.showModal();
});

closePrinting.addEventListener("click", () => {
    printing.close();
});

//Calculators

import {pc15min, bnCopy, bnPrinting, colorCopy, colorPrinting, pcPrice, bnCopyPrice, bnPrintingPrice, 
    colorCopyPrice, colorPrintingPrice} from "./constants.mjs"

const pcField = document.querySelector("#pcField");
const bnCopyField = document.querySelector("#bnCopyField");
const bnPrintingField = document.querySelector("#bnPrintingField");
const colorCopyField = document.querySelector("#colorCopyField");
const colorPrintingField = document.querySelector("#colorPrintingField");

function computePrice (constant, field, price) {
    field.addEventListener("input", function() {
      let number = parseFloat(field.value);
      if (!isNaN(number)) {
        price.innerHTML = `$${((number*constant)).toFixed(2)}`;
      } else {
        price.innerHTML = "$0";
      }   
})
}

computePrice(pc15min, pcField, pcPrice)
computePrice(bnCopy, bnCopyField, bnCopyPrice)
computePrice(colorCopy, colorCopyField, colorCopyPrice)
computePrice(bnPrinting, bnPrintingField, bnPrintingPrice)
computePrice(colorPrinting, colorPrintingField, colorPrintingPrice)