export default function initAnimaNumeros() {
  const spans = document.querySelectorAll(".numeros-grid span");
  const section = document.querySelector(".numeros");

  const observer = new MutationObserver(handleMutation);
  observer.observe(section, { attributes: true });

  function handleMutation(event) {
    if (event[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  function animaNumeros() {
    spans.forEach((span) => {
      const numero = +span.innerText;
      const incremento = Math.floor(numero / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        span.innerText = start;

        if (start > numero) {
          span.innerText = numero;
          clearInterval(timer);
        }
      }, 25);
    });
  }
}
