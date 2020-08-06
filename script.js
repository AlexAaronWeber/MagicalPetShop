"use strict";

let largePets = [
  {
    type: "Asian Lung Dragon",
    quantity: 2,
    price: 1200,
    experience: "expert",
    img: "images/asianlung.png",
  },
  {
    type: "European Long-tail Dragon",
    quantity: 4,
    price: 1000,
    experience: "expert",
    img: "images/europeanlongtail.png",
  },
  {
    type: "Unicorn",
    quantity: 3,
    price: 750,
    experience: "beginner",
    img: "images/unicorn.svg",
  },
  {
    type: "Pegasus",
    quantity: 7,
    price: 900,
    experience: "intermediate",
    img: "images/pegasus.png",
  },
  {
    type: "Griffin",
    quantity: 1,
    price: 4000,
    experience: "expert",
    img: "images/griffin.jpg",
  },
  {
    type: "Castle-born Gargoyle",
    quantity: 4,
    price: 50,
    experience: "beginner",
    img: "images/castlegargoyle.png",
  },
];

let smallPets = [
  {
    type: "Wyvern",
    quantity: 10,
    price: 100,
    experience: "intermediate",
    img: "images/wyvern.jpg",
  },
  {
    type: "Autumnal Fairy",
    quantity: 15,
    price: 600,
    experience: "beginner",
    img: "images/autumnalfairy.png",
  },
  {
    type: "Vernal Fairy",
    quantity: 15,
    price: 650,
    experience: "intermediate",
    img: "images/vernalfairy.png",
  },
  {
    type: "Chapel-born Gargoyle",
    quantity: 7,
    price: 150,
    experience: "beginner",
    img: "images/chapelgargoyle.png",
  },
  {
    type: "Cat Familiar",
    quantity: 10,
    price: 300,
    experience: "beginner",
    img: "images/cat.jpg",
  },
  {
    type: "Baby Yoda",
    quantity: 1,
    price: 12000,
    experience: "expert",
    img: "images/yodasilhouette.jpg",
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
    newImage.classList.add("image");
    newImage.setAttribute("src", largePet.img);
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
    let imageDiv = document.createElement("div");
    imageDiv.append(newImage);
    imageDiv.classList.add("image-container");
    card.append(
      imageDiv,
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
    let newImage = document.createElement("img");
    newImage.classList.add("image");
    newImage.setAttribute("src", smallPet.img);
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
    let imageDiv = document.createElement("div");
    imageDiv.append(newImage);
    imageDiv.classList.add("image-container");

    card.append(
      imageDiv,
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
