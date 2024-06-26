export default function initFuncionamento() {}

const agora = new Date();
const hoje = agora.getDay();
const hora = agora.getHours();

const funcionamento = document.querySelector("[data-semana]");
const diasDaSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarios = funcionamento.dataset.horario.split(",").map(Number);
const estaAberto =
  diasDaSemana.includes(hoje) && hora >= horarios[0] && hora < horarios[1];

if (estaAberto) {
  funcionamento.classList.add("aberto");
}


