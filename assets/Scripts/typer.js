var mainTyper;

var typer = new Typed(".typer", {
  strings: ["NAMASTHE", "Hello!!", "I'm Ranjan !!"],
  typeSpeed: 30,
  backSpeed: 20,
  loop: false,
  showCursor: false,
  onComplete: function () {
    document.querySelector(".typer").classList.add("typer2");
    mainTyper = new Typed(".mainTyper", {
      strings: ["CSE-AIML", "Siddaganga Institute of Technology"],
      loop: true,
      cursorChar: "_",
      cursorClassName: "cursor-style",
      typeSpeed: 20,
    });
  },
});
