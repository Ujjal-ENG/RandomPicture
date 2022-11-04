const imageContainerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  addNewImg();
});

const addNewImg = () => {
  for (let index = 0; index < 4; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
};
