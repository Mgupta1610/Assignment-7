/*eslint-env browser*/

//STEP 1
document.getElementById("btn1").onclick = function () {
    alert("I have been clicked (Task 1)");
  };
//STEP 2
const button2 = document.getElementById("btn2");
button2.onclick = function () {
  alert("I have been clicked (Task 2)");
};
//STEP 3
function task3Callback() {
    alert("I have been clicked (Task 3)");
  }
document.getElementById("btn3").addEventListener("click", task3Callback);
//STEP 4
document.getElementById("btn4").addEventListener("click", function () {
    alert("I have been clicked (Task 4)");
  });
//STEP 5
function task5Callback() {
    alert("I have been clicked (Task 5)");
  }
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("btn5").addEventListener("click", task5Callback);
  });
  