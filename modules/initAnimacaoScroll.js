import debounce from "./helpers/debounce.js";

export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.distance = {};
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }
    })
  }

  checkDistance() {
    this.distance.forEach(sec => {
      if (window.scrollY > sec.offset) {
        sec.element.classList.add("ativo");
      } else if (sec.element.classList.contains('ativo')) {
        sec.element.classList.remove("ativo");
      }
    });
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }

}