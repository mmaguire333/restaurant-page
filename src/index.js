import loadHomePage from './loadHomePage';
import loadMenu from './loadMenu';
import loadStaffPage from './loadStaffPage';

loadHomePage();

let homeBtn = document.getElementById('home-button');
let menuBtn = document.getElementById('menu-button');
let staffBtn = document.getElementById('staff-button');
let pageContainer = document.getElementById('content');

homeBtn.addEventListener('click', () => {
    pageContainer.replaceChildren();
    loadHomePage();
});

menuBtn.addEventListener('click', () => {
    pageContainer.replaceChildren();
    loadMenu();
});

staffBtn.addEventListener('click', () => {
    pageContainer.replaceChildren();
    loadStaffPage();
});