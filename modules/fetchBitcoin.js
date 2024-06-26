export default function initFetchBitcoin() {}

async function fetchBitcoin(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const valorDeVenda = data["BRL"]["sell"];
    preencherElement(valorDeVenda);
  } catch (e) {
    throw new Error(e);
  }
}

function preencherElement(value) {
  const span = document.querySelector(".btc-preco");
  span.innerText = quantidadeR$EmBitcoin(value);
}

function quantidadeR$EmBitcoin(valueBitcoin, qtd = 100) {
  return (qtd / valueBitcoin).toFixed(4);
}

fetchBitcoin("https://blockchain.info/ticker");
