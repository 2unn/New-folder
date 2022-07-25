const button_1 = document.querySelector(".button-1");

const button_2 = document.querySelector(".button-2:not(.transform1)");

const message = document.querySelector(".message");
console.log([button_1]);

button_1.onclick=() => {
    alert("Tặng bài nhạc dù có vẻ nó éo liên quan gì")
    setTimeout(()=> {
    window.location = "https://www.youtube.com/watch?v=4DFctMnLdX4"
    },1000)
}

button_1.onmouseenter = () => {
  message.style.opacity = "0.9";
};

button_1.onmouseleave = () => {
  message.style.opacity = "0";
};

button_2.onmouseenter = (e) => {
  e.target.classList.add("transform1");
  const button_2__1 = document.querySelector(
    ".button-2.transform1:not(.transform2)"
  );
  button_2__1.onmouseenter = (e) => {
    e.target.classList.add("transform2");

    const button_2__2 = document.querySelector(
      ".button-2.transform1.transform2:not(.transform3)"
    );

    button_2__2.onmouseenter = (e) => {
      e.target.classList.add("transform3");

      const button_2__3 = document.querySelector(
        ".button-2.transform1.transform2.transform3:not(.transform4)"
      );

      button_2__3.onmouseenter = (e) => {
        e.target.classList.add("transform4");
      };
    };
  };
};
