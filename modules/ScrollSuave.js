export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = { ...{ behavior: "smooth", block: "start" }, ...options };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    this.addLinkEvent();
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }
}
