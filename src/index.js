import "./index.html";
import "./styles/css/styles.css";
import "./assets/fonts/proximanova/styles.css";
import "./assets/fonts/proximanovacond/styles.css";

const map = document.querySelector(".map");
const mapBtns = map.querySelectorAll(".map__button");
const mapPoints = map.querySelectorAll(".map__point");
const dropDownIcon = map.querySelector(".map__panel-icon");
const mapPopup = map.querySelector(".map__popup");
const mapImage = map.querySelector(".map__image");
const mapNav = map.querySelector(".nav");

dropDownIcon.addEventListener("click", () => {
  dropDownIcon.classList.toggle("active");
  mapPopup.classList.toggle("opened");
  mapImage.classList.toggle("inactive");
  mapNav.classList.toggle("inactive");
});

mapBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnId = e.target.id;
    let areaName = btnId.slice(4);

    mapBtns.forEach((btn) => {
      if (btn.id === btnId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    mapPoints.forEach((point) => {
      let selectedArea = point.classList.contains(areaName);
      if (areaName === "all") {
        point.classList.remove("invisible");
      } else if (selectedArea) {
        point.classList.remove("invisible");
      } else {
        point.classList.add("invisible");
      }
    });
  });
});
