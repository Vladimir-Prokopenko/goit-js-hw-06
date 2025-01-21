const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallert = document.querySelector(".gallery");

const madeItemImages = (arreyImages) => {
  return arreyImages.map((element) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("item-gallery");

    const imageElement = document.createElement("img");
    imageElement.src = element.url;
    imageElement.alt = element.alt;

    itemElement.appendChild(imageElement);

    return itemElement;
  });
};

const elements = madeItemImages(images);
listGallert.append(...elements);
