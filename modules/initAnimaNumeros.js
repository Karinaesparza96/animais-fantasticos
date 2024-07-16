export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this)
  }

  init() {
    this.addMutationObserver();
    return this;
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  handleMutation(event) {
    if (event[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  animaNumeros() {
    this.numeros.forEach(n => this.constructor.incrementarNumero(n));
  }

  static incrementarNumero(numeroElement) {
    const numero = +numeroElement.innerText;
    const incremento = Math.floor(numero / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numeroElement.innerText = start;

      if (start > numero) {
        numeroElement.innerText = numero;
        clearInterval(timer);
      }
    }, 25);
  }
}
