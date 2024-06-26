export default function initTabNav() {
  const section = document.querySelector("[data-tab='menu']");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const classe = "ativo";
  add(0);
  function handleScroll() {
    const tamahoImg = section.querySelectorAll("li")[0].clientHeight;
    let index = Math.round(section.scrollTop / tamahoImg);
    remove();
    add(index);
  }
  section.addEventListener("scroll", handleScroll);

  function remove() {
    tabContent.forEach((l) => l.classList.remove(classe));
  }
  function add(index) {
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(classe, direcao);
  }
}
