export default class Accordion {
  constructor(seletor) {
    this.accordionList = document.querySelectorAll(seletor);
    this.activeClass = "ativo";
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }

  toggleAccordion(element) {
    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
}
