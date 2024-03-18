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
