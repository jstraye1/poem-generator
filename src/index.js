function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem will go here",
    autoStart: true,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
