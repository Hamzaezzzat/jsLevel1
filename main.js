const buy = document.getElementById("buy");
const mydiv = document.querySelector(".mydiv");

const newTitle1 = `<h1> Hello World </h1>`;
const newTitle2 = document.createElement("h1");
newTitle2.innerText = ("اتعلم في ساعة")
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const buttonPopup = document.getElementById("buttonPopup");


buy.addEventListener("click", (eo)=>{
  eo.preventDefault();
  // favDialog.showModal();
  popup.classList.toggle("active");
})

setTimeout(buttonPopup.addEventListener("click",(eo) =>{
  eo.preventDefault();
  popup2.classList.toggle("active");
}), 6000);

// buttonPopup.addEventListener("click",(eo)=>{
//   eo.preventDefault();
//   buttonPopup.toggle("active")
// })


// Start Dark mode
const mode = document.getElementsByClassName("mode")[0];
const body = document.querySelector("body");

mode.addEventListener("click",(eo)=>{
  body.classList.toggle("dark");
})


/*
// Data Types
const data1 = "String";//String
const data2 = 20;     // Number
const data3 = 20.3;   // Number
const data4 = {};     // Object
const data5 = [];     // Number
const data6 = ()=>{}; // function
console.log(typeof(data1));
*/

/*
// array
const array = [1,2,3,4,"HTML","CSS","Javascript"];
console.log(array[2]); // 3
console.log(array[4]); // HTML
console.log(array[4] += 5); // HTML5
console.log(array[5] += 3); // CSS3
console.log(array.length); // 7
console.log(array.indexOf(5)); // CSS
*/




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