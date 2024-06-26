import initTabNav from "./modules/initTabNav.js";
import initAccordion from "./modules/initAccordion.js";
import ScrollSuave from "./modules/ScrollSuave.js";
import initAnimacaoScroll from "./modules/initAnimacaoScroll.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/initTooltip.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

initTabNav();
initAccordion();
initAnimacaoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
