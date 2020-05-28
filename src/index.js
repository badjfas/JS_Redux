const plus = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

let count = 0 ;

number.innerText=count;

const updateText= () => {
  number.innerText = count;
}

const handleAdd = () => {
  console.log("Add")
  count = count+1;
  updateText();
  return ;
}

const handleMinus = () => {
  console.log("Minus")
  count = count-1;
  updateText();
  return ; 
}

plus.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);