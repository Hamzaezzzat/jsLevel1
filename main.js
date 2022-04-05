const buy = document.getElementById("buy");
const mydiv = document.querySelector(".mydiv");

const newTitle1 = `<h1> Hello World </h1>`;
const newTitle2 = document.createElement("h1");
newTitle2.innerText = ("اتعلم في ساعة")
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const buttonPopup = document.getElementById("buttonPopup");


/*
// This code used for one item 
buy.addEventListener("click", (eo)=>{
  eo.preventDefault();
  // favDialog.showModal();
  popup.classList.toggle("active");
})

*/







// Start Dark mode
const mode = document.getElementsByClassName("mode")[0];
const body = document.querySelector("body");

mode.addEventListener("click",(eo)=>{
  body.classList.toggle("dark");
})



/*
// ====================== Data Types ======================
const data1 = "String";//String
const data2 = 20;     // Number
const data3 = 20.3;   // Number
const data4 = {};     // Object
const data5 = [];     // Number
const data6 = ()=>{}; // function
console.log(typeof(data1));
*/

/*
// // ====================== Array ======================
const array = [1,2,3,4,"HTML","CSS","Javascript"];
console.log(array[2]); // 3
console.log(array[4]); // HTML
console.log(array[4] += 5); // HTML5
console.log(array[5] += 3); // CSS3
console.log(array.length); // 7
console.log(array.indexOf(5)); // CSS
*/


/*
// ====================== Array Methods ======================
const h1 = document.getElementsByTagName("h1");
console.log(h1); // HTMLCollection (4)
// array.from(<array>);
const h1Array = Array.from(h1); // []
console.log(h1Array); // HTMLCollection (4)

// <array>.forEach(callbackfunction);
h1Array.forEach((item)=>{
  item.style.background="black";
  item.style.color = "red";
  h1Array[2].style.border = "12px solid green";
})
*/

/* ====================== Selectors ======================
document.getElementById()         // Element
document.getElementsByClassName() // HTML Collection
document.getElementsByTagName()   // HTML Collection
document.querySelector()          // Element
document.querySelectorAll()       // Node List = Array / But HTML Collection need array.from() first
*/
const hs = document.querySelectorAll("h1");
hs.forEach((item)=>{

})


// ====================== Add Product ======================
const items = document.querySelector(".items");

addProduct.addEventListener("click",eo=>{
const addproduct = `
<div class="card my-card" style="width: 18rem;">
          <img src="/img/profile.png" style="border-radius: 20px;" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" id="buy" class="buy btn btn-primary">Go somewhere</a>
          </div>
        </div>
`
  items.innerHTML += addproduct;
})

// ====================== eo.target ======================
const buyNow = document.querySelectorAll(".buy");
items.addEventListener("click",eo=>{
  if (eo.target.classList == "buy btn btn-primary") {
    popup.classList.add("active");
  }
})
buttonPopup.addEventListener("click",(eo)=>{
  eo.preventDefault();
  popup2.classList.add("active")
  setTimeout(() =>{
    popup.classList.remove("active");
    popup2.classList.remove("active");
  }, 3000);
})

/*
// ====================== <dialog> ======================
// to lecture 8 | alot types of events
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