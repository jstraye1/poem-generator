function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9t73b52ec1o1f57463306d3c17edcaed";
  let context =
    "You are a literary expert that loves to write poems. You should write a four line poem about the user instructions. Every line of the poem should end with a <br />. Sign the poem with <em>-SheCodes AI</em> at the end of the poem on it's own line ";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
