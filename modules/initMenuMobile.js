import outSideClick from "./outSideClick.js";

export default function initMenuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const userEvents = ["click", "touchstart"];

  function openMenu() {
    menuMobile.classList.add("active");
    menuList.classList.add("active");

    outSideClick(menuList, userEvents, () => {
      menuMobile.classList.remove("active");
      menuList.classList.remove("active");
    });
  }
  if (menuMobile) {
    userEvents.forEach((event) => menuMobile.addEventListener(event, openMenu));
  }
}
