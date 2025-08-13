function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let apiKey = "48ab3c475703c305f36e50o053ta6dba";
  let context =
    "You are an AI recipe assistant. Please be short, simple and easy to make for beginners. Only include recipe name, ingredients and instructions in this format. Example <h2>Recipe name</h2> <ul>list of ingredients</ul> <P>instructions</p>. Sign the recipe with `SheCodes AI` inside <strong> element ";
  let prompt = `Generate a recipe about ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">🔥🧑‍🍳Generating a recipe about ${searchInput.value}</div>`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
