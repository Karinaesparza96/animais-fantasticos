export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.tooltipBox = null;
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  init() {
    if (this.tooltips.length) {
      this.addEventMouseOver()
    }
    return this;
  }

  addEventMouseOver() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseMove({ pageY, pageX }) {
    const tamanho = 190;
    if (pageX + tamanho > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - tamanho}px`;
    } else {
      this.tooltipBox.style.left = `${pageX + 20}px`;
    }
    this.tooltipBox.style.top = `${pageY + 20}px`;
  };

  onMouseLeave({ currentTarget }) {
    // quando o mouse sair remover a tooltip e os eventos adicionados ao elemento container
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mouseover", this.onMouseMove);
  };
}
