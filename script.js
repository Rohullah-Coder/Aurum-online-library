let cartnumotershow = document.querySelector("#cartnum");
let cartnuminnershow = document.querySelector("#cartnum2");

function shownumber() {
  cartnumotershow.innerHTML = localStorage.getItem("number");
  cartnuminnershow.innerHTML = localStorage.getItem("number");
}
  shownumber();
function savelocal() {
  localStorage.setItem("number", cartnumotershow.textContent);
}
let cartquantity = Number(localStorage.getItem("number"));
function cleanCart(e) {
  cartquantity = e;
  cartnumotershow.textContent = cartquantity;
  cartnuminnershow.textContent = cartquantity;
  savelocal();
}
function addtocart(e) {
  cartquantity += e;
  cartnumotershow.textContent = cartquantity;
  cartnuminnershow.textContent = cartquantity;
  savelocal();
  itemchange();
}

function itemchange() {
  if (cartnuminnershow.textContent < 2) {
    savelocal();
    document.querySelector("#itemItems").textContent = "item";
    shownumber();
  } else if (cartnuminnershow.textContent >= 2) {
    savelocal();
    document.querySelector("#itemItems").textContent = "items";
    shownumber();
  }
}

let cartbtn = document.querySelector("#carticon");
let cartpage = document.querySelector("#cartpage");
cartbtn.addEventListener("click", () => {
  cartpage.classList.toggle("hidden");
  cartpage.classList.toggle("h-64");
});

// contact js

// dark mood
function changeMood() {
  let moodBtn = document.querySelector("#moodBtn");
  // mood icon
  moodBtn.classList.toggle("fa-sun");
  moodBtn.classList.toggle("fa-moon");

  // header
  document.querySelector("header").classList.toggle("bg-[#1a1a1a]");
  document.querySelector("header").classList.toggle("bg-[#1a1a1a]/60");
  document.querySelector("header section div ").classList.toggle("text-white/60");
}
