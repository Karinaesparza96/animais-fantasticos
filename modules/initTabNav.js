export default class TabNav {
  constructor(seletorMenu, seletorConteudo) {
    this.section = document.querySelector(seletorMenu);
    this.tabContent = document.querySelectorAll(seletorConteudo);
    this.classe = "ativo";
  }

  init() {
    if (this.section && this.tabContent) {
      this.addClass(0);
      this.addEventScroll();
    }
  }

  addClass(index) {
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.classe, direcao);
  }

  addEventScroll() {
    this.section.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const tamahoImg = this.section.querySelectorAll("li")[0].clientHeight;
    let index = Math.round(this.section.scrollTop / tamahoImg);
    this.removeClass();
    this.addClass(index);
  }

  removeClass() {
    this.tabContent.forEach((l) => l.classList.remove(this.classe));
  }
}
