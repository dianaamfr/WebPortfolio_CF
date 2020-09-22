const educationButtons = document.querySelectorAll('.education_btn');
const creditsButtons = document.querySelectorAll('.credits_btn');
const aboutButtons = document.querySelectorAll('.about_btn');
const credits = document.querySelector('#credits_part2');
let creditsPage = false;

// Menu buttons

const menus = Array.from(document.querySelectorAll('.menu_desktop ul'));
const menuButtons = Array.from(document.querySelectorAll('.menu_desktop ul li a'));
const menuLinks = Array.from(menus[0].querySelectorAll('li a')).length;

function activeMenuButtons(event){
    const linkIdx = menuButtons.indexOf(event.target) % menuLinks;

    menuButtons.forEach(btn => btn.classList.remove('active_page'));
    menus.forEach(menu => activateButton(menu, linkIdx));
}

function activateButton(menu, linkIdx){
    const relativeButtons = Array.from(menu.querySelectorAll('li a'));
    relativeButtons[linkIdx].classList.add('active_page');
}

function openAbout() {
    window.localStorage.setItem('aboutPage', 'active');
    console.log(window.localStorage.getItem('aboutPage'));
}

function openCredits() {
    // Credits column is opened already
    if(creditsPage === true) return;
    creditsPage = true;

    // Slide credits column in
    credits.classList.add('slide_in');   
}

function closeCredits() {
    // Credits column is closed already
    if(creditsPage === false) return;
    creditsPage = false;

    // Slide credits column out
    credits.classList.remove('slide_in'); 
}

window.onload = function() {
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));
    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));
}