var measurements = [
  "tsp",
  "oz",
  "cup",
  "lb",
  "tbsp",
  "a sprinkle",
  "a dash",
  "gal",
  "a dusting",
  "slices",
];
var endOfLetter = ["love", "xo", "will you be my valentine?", "<3"];

function addIngredientsFromList(listToAdd) {
  ingredientsList = "";
  for (let i = 0; i < listToAdd.length; i += 1) {
    let howMany = "";
    let units = measurements[Math.floor(Math.random() * measurements.length)];
    if (units[0] !== "a") {
      howMany = `${Math.floor(Math.random() * 8 + 1)}`;
    } else if (units === "slices") {
      howMany = `${Math.floor(Math.random() * 8 + 2)}`;
    }
    ingredientsList += `<pre class="tab1">${howMany} ${units} ${listToAdd[i]}</pre>`;
  }
  return ingredientsList;
}
function showRecipe() {
  var name = document.getElementById("name").value;
  var relationship = document.getElementById("relationship").value;
  var descriptor = document.getElementById("descriptor").value;
  var personality = Array.from(
    document.getElementById("personality").selectedOptions
  ).map((el) => el.value);
  var physical = Array.from(
    document.getElementById("physical").selectedOptions
  ).map((el) => el.value);
  console.log(physical);
  var necessary = document.getElementById("necessary").value;
  var sender = document.getElementById("sender").value;

  var title = `<h2>Recipe for the ${descriptor} ${relationship}<h2>`;
  var ingredientsList = "";
  var instructions = `<p>Mix it all together, and <i>voila</i>!  You have the ${descriptor} ${relationship}, also known as ${name}.</p>`;
  var signed = `<p>${
    endOfLetter[Math.floor(Math.random() * endOfLetter.length)]
  },</p><p>${sender}</p>`;

  ingredientsList +=
    addIngredientsFromList(personality) +
    addIngredientsFromList(physical) +
    addIngredientsFromList([necessary]);

  var recipe = `${title}
  <br>
  ${ingredientsList}
  <br>
  ...
  <br>
  ${instructions}
  <br>
  ${signed}
  `;
  display.innerHTML = recipe;
}
