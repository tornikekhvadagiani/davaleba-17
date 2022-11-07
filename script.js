const button = document.querySelector("button");

document.addEventListener("click", function () {
  var button = document.getElementById("button");
  button.parentNode.removeChild(button);
});

const img = document.createElement("img");
img.src = "https://picsum.photos/id/1/200/300";
document.body.appendChild(img);

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "https://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "https://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function renderCharacters(arr) {
  const renderedCards = characters.map((char) => {
    return `
				<div>
					<img src="${char.image}" class="card-img" alt="${char.first_name}" />
				</div>
			`;
  });
  console.log(renderedCards.join(""));
 "characters-list".innerHTML = renderedCards.join("");
}

renderCharacters();
