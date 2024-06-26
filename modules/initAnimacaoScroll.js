export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js [data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((sec) => {
      const sectionTop = sec.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) sec.classList.add("ativo");
      else if(sec.classList.contains("ativo"))sec.classList.remove("ativo");
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}