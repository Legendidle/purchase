let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function (evt)  {
  evt.preventDefault();

  let inputValue = elInput.value;
  let elItem = document.createElement("li");

  elList.appendChild(elItem);
  

  for (mark of inputValue) {
    let mark = [];
    mark.push(elInput.value);
    elItem.textContent = mark;
  }

  elInput.value = ""; 
})  
   

elForm.addEventListener("reset", function(reset) {
  reset.preventDefault();
  elList.textContent = "";
  elItem.textContent = "";
  elInput.value = "";
})