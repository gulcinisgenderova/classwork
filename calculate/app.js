const calcInput1 = document.querySelector(".calcInput1");
const calcInput2 = document.querySelector(".calcInput2");
const result = document.querySelector(".result");
const buttonPlus = document.querySelector(".buttonPlus");
const buttonMinus = document.querySelector(".buttonMinus");
const buttonMult = document.querySelector(".buttonMult");
const buttonDevide = document.querySelector(".buttonDevide");

buttonPlus.addEventListener("click", () => {
  if (calcInput1.value == "" || calcInput2.value == "") {
    alert("Eded daxil edin");
    return;
  }
  result.value = Number(calcInput1.value) + Number(calcInput2.value);
  calcInput1.value="";
  calcInput2.value="";
});

buttonMinus.addEventListener("click", () => {
  if (calcInput1.value == "" || calcInput2.value == "") {
    alert("Eded daxil edin");
    return;
  }
  result.value = Number(calcInput1.value) - Number(calcInput2.value);
  calcInput1.value="";
  calcInput2.value="";
});

buttonMult.addEventListener("click", () => {
  if (calcInput1.value == "" || calcInput2.value == "") {
    alert("Eded daxil edin");
    return;
  }
  result.value = Number(calcInput1.value) * Number(calcInput2.value);
  calcInput1.value="";
  calcInput2.value="";
});

buttonDevide.addEventListener("click", () => {
  if (calcInput1.value == "" || calcInput2.value == "") {
    alert("Eded daxil edin");
    return;
  }
  if (calcInput2.value == 0) {
    alert("ededi 0-a bolmek olmaz!");
  } else {
    result.value = Number(calcInput1.value) / Number(calcInput2.value);
  }
  calcInput1.value="";
  calcInput2.value="";
});
