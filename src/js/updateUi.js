const cards = document.querySelector(".cards");

const createCountries = (countries) => {
  cards.innerHTML = "";
  countries.forEach((country) => {
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
            <a href="./about.html">
                <img  src=${country.flags.png} alt="germany-flag"  >
                <div style="  padding: 2.4rem 1rem 4.5rem 2.4rem;">
                <h3 class="cards_title">${country.name.common}</h3>
                <p class="population">Population: <span>${
                  country.population
                }</span></p>
                <p class="region">Region: <span>${country.region}</span></p>
                <p class="capital">Capital: <span>${
                  country.capital ? country.capital[0] : "No capital"
                }</span></p>
                </div>
            </a>
`;
    cards.appendChild(li);
  });
};

export default createCountries;
