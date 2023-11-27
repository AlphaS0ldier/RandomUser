import { Person } from "./Person.js";
import { getTime, getUser } from "./fetchAPI.js";

export async function generateCard(user, div) {
  let image = user.image ? user.image : "./user_nt_found.jpg";
  let img = document.createElement("img");
  img.setAttribute("src", image);
  div.append(img);

  let arrEntries = user.getEntries();

  arrEntries.forEach((element) => {
    createCardContent(element[0], element[1]);
  });

  let divcont = document.createElement("div");
  let span = document.createElement("span");
  let strong = document.createElement("strong");

  strong.textContent = "Current Time: ";

  span.append(strong);

  span.textContent = user.time ? `${user.time}` : "time";

  divcont.append(strong, span);

  div.append(divcont);
}

export function createCardContent(key, value) {
  let divcont = document.createElement("div");
  let span = document.createElement("span");
  let strong = document.createElement("strong");

  strong.textContent = key + ": ";

  span.append(strong);

  if (key == "Name") {
    span.textContent = value ? `${value}` : "name surname";
  } else if (key == "Mail") {
    span.textContent = value ? `${value}` : "mail";
  } else if (key == "Phone") {
    span.textContent = value ? `${value}` : "phone";
  } else if (key == "Location") {
    span.textContent = value ? `${value}` : "city";
  }

  divcont.append(strong, span);

  document.querySelector("div.card").append(divcont);
}

export function createPerson() {
  return new Promise(async(resolve)=>{
    let dat = await getUser();
    let data = dat["results"][0];
  
    let name = data["name"]["first"] + " " + data["name"]["last"];
  
    let person = new Person(name, data["email"]);
  
    person.phone = data["phone"];
    person.location = data["location"]["city"];
    person.image = data["picture"]["medium"];
  
    let jsontime =await getTime(person.location);
  
    person.time = jsontime ?  `${jsontime["hour"]}:${jsontime["minute"]}:${jsontime["second"]}`: "";

    resolve(person);
  });
}

export function createButton() {
  let div = document.querySelector(".container");
  let btn = document.createElement("input");
  btn.setAttribute("type", "button");
  btn.setAttribute("value", "GENERATE USER");
  div.append(btn);
}
