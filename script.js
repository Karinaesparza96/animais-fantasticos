import TabNav from "./modules/initTabNav.js";
import Accordion from "./modules/initAccordion.js";
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

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu']", "[data-tab='content'] section");
tabNav.init();

initAnimacaoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
