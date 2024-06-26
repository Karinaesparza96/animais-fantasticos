export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  // quando o evento de mouseouver acontecer
  function onMouseOver() {
    // crio a div que será a tooltip passando o elemento que sofreu o evento
    const tooltipBox = criarTooltipBox(this);

    // passo a tooltip criada como propriedade, para manipular o evento de mouse move
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      // manipulado a posição dinamicamente através do evento de mousemove pegando as direções onde o mouse está na pagina
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    handleEvent() {
      // quando o mouse sair remover a tooltip e os eventos adicionados ao elemento container
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mouseover", onMouseMove);
    },
  };
}
