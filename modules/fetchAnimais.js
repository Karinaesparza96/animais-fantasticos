import AnimaNumeros from "./initAnimaNumeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      data.forEach((element) => {
        const divAnimal = createAnimal(element);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(".numeros-grid span", ".numeros", "ativo")
      animaNumeros.init();
    } catch (e) {
      throw new Error(e);
    }
  }
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.total}</span>`;
    return div;
  }
  fetchAnimais("../animais-api.json");
}
