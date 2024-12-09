// Get the cards container
const cardsContainer = document.getElementById("cardsContainer");

// Function to create a new card element
function createCard(delay) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.setProperty("--delay", delay);

  // Create and append the header
  const header = document.createElement("div");
  header.classList.add("header");

  const profile = document.createElement("div");
  profile.classList.add("profile");

  // Create demo div inside the profile
  const demo = document.createElement("div");
  demo.classList.add("demo");
  profile.appendChild(demo);

  header.appendChild(profile);
  card.appendChild(header);

  // Create below-demo section with circle and blanks
  const belowDemo = document.createElement("div");
  belowDemo.classList.add("below-demo");

  const circle = document.createElement("div");
  circle.classList.add("circle");

  const blanks = document.createElement("div");
  blanks.classList.add("blanks");

  const blank1 = document.createElement("div");
  blank1.classList.add("blank");

  const page = document.createElement("div");
  page.classList.add("page");

  blanks.appendChild(blank1);
  blanks.appendChild(page);
  belowDemo.appendChild(circle);
  belowDemo.appendChild(blanks);

  card.appendChild(belowDemo);

  return card;
}

// Dynamically create 5 cards and append them to the container
for (let i = -1; i < 4; i++) {
  const card = createCard(i);
  cardsContainer.appendChild(card);
}
