import { Person } from "./Person.js";
import { generateCard, createButton, createPerson } from "./Utils.js";

let container = document.querySelector(".container");

let card = document.createElement("div");
card.setAttribute("class", "card");
container.append(card);

generateCard(new Person(), card);

createButton();

let btn = document.querySelector("input");

btn.addEventListener("click", async () => {
  card.innerHTML = "";
  let user = await createPerson();
  generateCard(user,card);
});
