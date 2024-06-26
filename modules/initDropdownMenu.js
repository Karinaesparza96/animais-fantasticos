import outSideClick from "./outSideClick.js";

export default function initDropdownMenu() {
  const dropdownsMenus = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outSideClick(this, events, () => {
      this.classList.remove("active");
    });
  }

  dropdownsMenus.forEach((item) => {
    events.forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
