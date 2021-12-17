const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=12bfebffba45470781c912068d9f6dd7";

const contentContainer = document.querySelector(".content-container");

async function getApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const facts = result.results;
    contentContainer.innerHTML = "";

    console.log(facts);

    for (let i = 0; i < facts.length; i++) {
      let tags = facts[i].tags;
      let tagsCount = tags.length;

      if (i === 19) {
        break;
      }

      if (facts[i].name === "Play with Gwen") {
        continue;
      }

      contentContainer.innerHTML += `<a href="../productpage.html" class="content-result"> <h2 class="content-title">${facts[i].name}</h2> <img src="${facts[i].background_image}" alt="Game image"> </a>`;
    }
  } catch (error) {
    contentContainer.innerHTML = errorMessage(
      "Sorry, seems we had problems with loading the API"
    );
  }
}

getApi();
