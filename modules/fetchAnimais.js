import initAnimaNumeros from "./initAnimaNumeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      data.forEach((element) => {
        const divAnimal = createAnimal(element);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (e) {
      throw new Error(e);
    }
  }
  fetchAnimais("../animais-api.json");
}
