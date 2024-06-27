function toggleNav() {
  try {
    var c = document.querySelector(".container");
    if (c) c.classList.toggle("small");

    var nav = document.querySelector(".nav");
    if (nav) nav.classList.toggle("active");

    var ham = document.querySelectorAll(".ham");
    ham.forEach(function (item) {
      item.classList.toggle("x");
    });

    var s = document.querySelector(".no");
    if (s) s.classList.toggle("s");

    var mainBody2 = document.querySelector(".main-body2");
    if (mainBody2) mainBody2.classList.toggle("mov");

    var mainBody = document.querySelector(".main-body");
    if (mainBody) mainBody.classList.toggle("mov");
  } catch (error) {
    console.error("Error in toggleNav:", error);
  }
}
