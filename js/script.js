console.log("- START -");

// MILESTONE 0

let users = [];

users.push(
  addNewUser("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg")
);
users.push(
  addNewUser("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg")
);
users.push(
  addNewUser(
    "Walter Gordon",
    "Office Manager",
    "walter-gordon-office-manager.jpg"
  )
);
users.push(
  addNewUser(
    "Angela Lopez",
    "Social Media Manager",
    "angela-lopez-social-media-manager.jpg"
  )
);
users.push(
  addNewUser("Scott Estrada", "Developer", "scott-estrada-developer.jpg")
);
users.push(
  addNewUser(
    "Barbara Ramos",
    "Graphic Designer",
    "barbara-ramos-graphic-designer.jpg"
  )
);

console.log(users);

function addNewUser(name, rule, picture) {
  return {
    name: name,
    rule: rule,
    picture: picture,
  };
}

// MILESTONE 1

for (const user of users) {
  console.log("___________");
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}

// BONUS 1 BONUS 2

const users_card = document.getElementById("users_card");

for (const user of users) {
    users_card.appendChild(generateUsers_card(user))
}

function generateUsers_card(user) {
  const col_4 = document.createElement("div");
  col_4.classList.add("col-4");

  const ms_card = document.createElement("div");
  ms_card.classList.add("ms_card");
  col_4.appendChild(ms_card);

  const img = document.createElement("img");
  img.setAttribute("src", "./img/"+user.picture);
  ms_card.appendChild(img);

  const h5 = document.createElement("h5");
  h5.textContent= user.name;
  ms_card.appendChild(h5);

  const p = document.createElement("p");
  p.textContent= user.rule;
  ms_card.appendChild(p);
  return col_4;
}
