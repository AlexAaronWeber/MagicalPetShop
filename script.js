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
    type: "Cat-Familiar",
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

let menuContainer = document.querySelector(".menu");

let largeContainer = document.querySelector(".large");
// const largeImages = new Array();
// largeImages[0] = new Image();
// largeImages[0].src = `images/dragon.png`;
const display = () => {
  largePets.forEach((largePet) => {
    let newImage = document.createElement("img");
    // newImage.setAttribute.src(largeImages[i]);
    let card = document.createElement("div");
    card.classList.add("card");
    let typeSection = document.createElement("p");
    typeSection.innerText = largePet.type;
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${largePet.quantity}`;
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${largePet.price}`;
    let experienceSection = document.createElement("p");
    experienceSection.innerText = largePet.experience;
    card.append(
      typeSection,
      quantitySection,
      priceSection,
      experienceSection,
      newImage
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
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${smallPet.quantity}`;
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${smallPet.price}`;
    let experienceSection = document.createElement("p");
    experienceSection.innerText = smallPet.experience;
    let smallImage = document.createElement("img");
    card.append(typeSection, quantitySection, priceSection, experienceSection);
    smallContainer.append(card);
  });
};
smallDisplay();
