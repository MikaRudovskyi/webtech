let button1 = document.querySelector("#btn1");
let txt = document.querySelector("#txt1");

button1.addEventListener("click", () => {
  let a = document.querySelector("#inp1").value;
  let b = document.querySelector("#inp2").value;
  c = Number(a) + Number(b);

  txt.innerHTML = "Результат: " + c;
});

let button2 = document.querySelector("#btn2");
button2.addEventListener("click", addCircle);
function addCircle() {
  let newCircle = document.createElement("div");
  tsk2.appendChild(newCircle);
  newCircle.classList.add("circle");
}

// 1. Стрілочна функція для розрахунку суми трьох чисел
let button3 = document.querySelector("#btn3");
let resultTxt = document.querySelector("#txt2");

button3.addEventListener("click", () => {
  let a = Number(document.querySelector("#inp3").value);
  let b = Number(document.querySelector("#inp4").value);
  let c = Number(document.querySelector("#inp5").value);
  let result = a + b + c;

  resultTxt.innerHTML = "Результат: " + result;
});

// 2. Function declaration для додавання об'єкта
let button4 = document.querySelector("#btn4");
button4.addEventListener("click", addBox);

function addBox() {
  let newBox = document.createElement("div");
  document.querySelector("#tsk4").appendChild(newBox);
  newBox.classList.add("box");
}
