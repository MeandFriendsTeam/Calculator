// Calculator

const a = document.getElementById("num1");
const b = document.getElementById("num2");
const out = document.getElementById("result");

function error697(){
  out.innerText = "Cannot Complete Equation — Error Code 697";
}

function read(n){
  if (n.value === "inf" || n.value === "infinity") return Infinity;
  return Number(n.value);
}

document.getElementById("addBtn").onclick = () => {
  let x = read(a), y = read(b);
  if (!isFinite(x) || !isFinite(y)) return error697();
  out.innerText = x + y;
};

document.getElementById("subBtn").onclick = () => {
  let x = read(a), y = read(b);
  if (!isFinite(x) || !isFinite(y)) return error697();
  out.innerText = x - y;
};

document.getElementById("mulBtn").onclick = () => {
  let x = read(a), y = read(b);
  if (!isFinite(x) || !isFinite(y)) return error697();
  out.innerText = x * y;
};

document.getElementById("divBtn").onclick = () => {
  let x = read(a), y = read(b);
  if (!isFinite(x) || !isFinite(y) || y === 0) return error697();
  out.innerText = x / y;
};
