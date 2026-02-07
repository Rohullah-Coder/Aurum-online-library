let cartbtn = document.querySelector("#carticon");
let cartpage = document.querySelector("#cartpage");
cartbtn.addEventListener("click", () => {
  cartpage.classList.toggle("hidden");
  cartpage.classList.toggle("h-64");
});

// contact js
const contactform = document.querySelector("#contactform");
const requestform = document.querySelector("#requestform");
const feedform = document.querySelector("#feedform");
const contactbtn = document.querySelector("#contactbtn");
const requestbtn = document.querySelector("#requestbtn");
const feedbtn = document.querySelector("#feedbtn");
function contactformopen() {
  contactform.style.display = "flex";
  requestform.style.display = "none";
  feedform.style.display = "none";
  contactbtn.style.borderBottom = "3px solid #D4af37";
  requestbtn.style.borderBottom = "1px solid  #D4af37";
  feedbtn.style.borderBottom = "1px solid  #D4af37";
}
function requestformopen() {
  contactform.style.display = "none";
  requestform.style.display = "flex";
  feedform.style.display = "none";
  requestbtn.style.borderBottom = "3px solid #D4af37";
  contactbtn.style.borderBottom = "1px solid  #D4af37";
  feedbtn.style.borderBottom = "1px solid  #D4af37";
}
function feedbackformopen() {
  contactform.style.display = "none";
  requestform.style.display = "none";
  feedform.style.display = "flex";
  feedbtn.style.borderBottom = "3px solid #D4af37";
  requestbtn.style.borderBottom = "1px solid  #D4af37";
  contactbtn.style.borderBottom = "1px solid  #D4af37";
}
