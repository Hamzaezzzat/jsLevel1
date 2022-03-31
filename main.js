const buy = document.getElementById("buy");
const mydiv = document.querySelector(".mydiv");

const newTitle1 = `<h1> Hello World </h1>`;
const newTitle2 = document.createElement("h1");
newTitle2.innerText = ("اتعلم في ساعة")
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