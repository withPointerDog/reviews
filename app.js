import { avatars, names, jobs, texts } from "./datausers.js";

class Reviews {
  id;
  avatar;
  name;
  job;
  text;

  constructor(id) {
    this.id = id;
  }

  set id(id) {
    for (let i = 0; i < id; i++) {
      id = i;
    }
    this.id = id;
  }

  crtProperties() {
    this.avatar = avatars[this.id];
    this.name = names[this.id];
    this.job = jobs[this.id];
    this.text = texts[this.id];
  }
}

const reviews = [];

function createNewReview(numbers) {
  for (let i = 0; i < numbers; i++) {
    reviews.push(new Reviews(i));
  }
}

function crtPrpsForAllReviews() {
  reviews.forEach((rev) => rev.crtProperties());
}

createNewReview(names.length);
crtPrpsForAllReviews();

const btns = document.querySelectorAll("button");
const img = document.querySelector("#person-img");
const user = document.querySelector("#author");
const jobItem = document.querySelector("#job");
const info = document.querySelector("#info");

document.addEventListener("DOMContentLoaded", () => {
  img.src = reviews[0].avatar;
  user.textContent = reviews[0].name;
  jobItem.textContent = reviews[0].job;
  info.textContent = reviews[0].text;
});

let count = 0;

function showReview(rev) {
  img.src = reviews[rev].avatar;
  user.textContent = reviews[rev].name;
  jobItem.textContent = reviews[rev].job;
  info.textContent = reviews[rev].text;
}
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const btnsCssClass = [...event.currentTarget.classList];

    if (btnsCssClass.includes("prev-btn")) {
      if (count <= 0) {
        count = reviews.length - 1;
        showReview(count);
      } else {
        count--;
        showReview(count);
      }
    } else if (btnsCssClass.includes("next-btn")) {
      if (count >= reviews.length - 1) {
        count = 0;
        showReview(count);
      } else {
        count++;
        showReview(count);
      }
    } else if (btnsCssClass.includes("random-btn")) {
      count = Math.floor(Math.random() * reviews.length);
      showReview(count);
    }
  });
});
