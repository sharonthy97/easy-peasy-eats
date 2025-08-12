function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "asd asd asd",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
