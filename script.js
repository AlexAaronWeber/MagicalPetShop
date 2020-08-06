"use strict";

let largePets = [
  {
    type: "Asian Lung Dragon",
    quantity: 2,
    price: 1200,
    experience: "expert",
    // img: image,
  },
  {
    type: "European Long-tail Dragon",
    quantity: 4,
    price: 1000,
    experience: "expert",
  },
  {
    type: "Unicorn",
    quantity: 3,
    price: 750,
    experience: "beginner",
  },
  {
    type: "Pegasus",
    quantity: 7,
    price: 900,
    experience: "intermediate",
  },
  {
    type: "Griffin",
    quantity: 1,
    price: 4000,
    experience: "expert",
  },
  {
    type: "Castle-born Gargoyle",
    quantity: 4,
    price: 50,
    experience: "beginner",
  },
];

let smallPets = [
  {
    type: "Wyvern",
    quantity: 10,
    price: 100,
    experience: "intermediate",
  },
  {
    type: "Autumnal Fairy",
    quantity: 15,
    price: 600,
    experience: "beginner",
  },
  {
    type: "Vernal Fairy",
    quantity: 15,
    price: 650,
    experience: "intermediate",
  },
  {
    type: "Chapel-born Gargoyle",
    quantity: 7,
    price: 150,
    experience: "beginner",
  },
  {
    type: "Cat Familiar",
    quantity: 10,
    price: 300,
    experience: "beginner",
  },
  {
    type: "Baby Yoda",
    quantity: 1,
    price: 12000,
    experience: "expert",
  },
];

// let imgArray = new Array();
// imgArray[0] = new Image();
// imgArray[0].src = "asianlung.png";

let menuContainer = document.querySelector(".menu");

let largeContainer = document.querySelector(".large");

const display = () => {
  largePets.forEach((largePet) => {
    let newImage = document.createElement("img");
    // newImage.setAttribute.src(imgArray[i]);
    let card = document.createElement("div");
    card.classList.add("card");
    let typeSection = document.createElement("p");
    typeSection.innerText = largePet.type;
    typeSection.classList.add("card-text");
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${largePet.quantity}`;
    quantitySection.classList.add("card-text");
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${largePet.price}`;
    priceSection.classList.add("card-text");
    let experienceSection = document.createElement("p");
    experienceSection.innerText = largePet.experience;
    experienceSection.classList.add("card-text");
    let addButton = document.createElement("button");
    addButton.innerText = "Add to Wagon";
    addButton.classList.add("cart-button");
    card.append(
      typeSection,
      quantitySection,
      priceSection,
      experienceSection,
      addButton
    );
    largeContainer.append(card);
  });
};
display();

let smallContainer = document.querySelector(".small");
const smallDisplay = () => {
  smallPets.forEach((smallPet) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let typeSection = document.createElement("p");
    typeSection.innerText = smallPet.type;
    typeSection.classList.add("card-text");
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${smallPet.quantity}`;
    quantitySection.classList.add("card-text");
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${smallPet.price}`;
    priceSection.classList.add("card-text");
    let experienceSection = document.createElement("p");
    experienceSection.innerText = smallPet.experience;
    experienceSection.classList.add("card-text");
    let smallImage = document.createElement("img");
    let addButton = document.createElement("button");
    addButton.innerText = "Add to Wagon";
    addButton.classList.add("cart-button");

    card.append(
      typeSection,
      quantitySection,
      priceSection,
      experienceSection,
      addButton
    );
    smallContainer.append(card);
  });
};
smallDisplay();
