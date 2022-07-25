const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
let num = 0;

let text1 = "";
let text2 = "";

input1.onchange = (e) => {
  text1 = e.target.value;
};

input2.onchange = (e) => {
  text2 = e.target.value;
};

btn1.onclick = () => {
  num = num + 1;
  if (text1.toLocaleLowerCase().includes("nga")) {
    message1.textContent = "Ý bạn là Trư Nga";
    input1.value = "Trư Nga";
  } else {
    message1.textContent = "Bạn đã nhập sai tên nhân vật";
    input1.value = "";
  }
  if (num == 2 && input1.value == "Trư Nga") {
    
      window.location = "./sorry.html";
    
  }
  if (num == 3) {
    message1.textContent = "Đây đúng là Trư Nga mà";
    
      window.location = "./sorry.html";
   
  }
};

btn2.onclick = () => {
  if (
    text2.toLocaleLowerCase().includes("nga") ||
    text2.toLocaleLowerCase().includes("giới") ||
    text2.toLocaleLowerCase().includes("gioi")
  ) {
    message2.textContent = "Bạn chắc hẳn là Công chúa ngủ nhiều";
    setTimeout(() => {
      window.location = "./sorry.html";
    }, 1000);
  }
};
