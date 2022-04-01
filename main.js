const buy = document.getElementById("buy");
const mydiv = document.querySelector(".mydiv");

const newTitle1 = `<h1> Hello World </h1>`;
const newTitle2 = document.createElement("h1");
newTitle2.innerText = ("اتعلم في ساعة")
const popup = document.querySelector(".popup");
const buttonPopup = document.getElementById("buttonPopup");

buy.addEventListener("click", (eo)=>{
  eo.preventDefault();
  // favDialog.showModal();
  popup.classList.toggle("active");
})
buttonPopup.addEventListener("click",(eo)=>{
  eo.preventDefault();
  buttonPopup.toggle("active")
})

// Acting with <dialog>

/*

// to lecture 8
// alot types of events
buy.addEventListener("click",(eo)=>{
  eo.preventDefault();
  
  console.log("fdsf");
  buy.innerText = " Hello";
  buy.style.background = "red !important";
  buy.classList.add("bc");
  // mydiv.innerHTML += ("newTitle1")
  mydiv.append(newTitle2);
  newTitle2.classList.add("mb");
})

buy.addEventListener("click",(eo)=>{
  eo.target.innerText ="Hello Wolrd";
})
 */