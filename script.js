import TabNav from "./modules/initTabNav.js";
import Accordion from "./modules/initAccordion.js";
import ScrollSuave from "./modules/ScrollSuave.js";
import initAnimacaoScroll from "./modules/initAnimacaoScroll.js";
import initDropdownMenu from "./modules/initDropdownMenu.js";
import initMenuMobile from "./modules/initMenuMobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/initTooltip.js";

const scrollSuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu']", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"', '[data-modal="container"');
modal.init();

const tooltip = new ToolTip("[data-tooltip]")
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
