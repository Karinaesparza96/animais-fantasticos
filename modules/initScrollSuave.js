export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      display: "start",
    });
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }
}