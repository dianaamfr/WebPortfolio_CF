const educationButtons = document.querySelectorAll('.education_btn');
const creditsButtons = document.querySelectorAll('.credits_btn');
const aboutButtons = document.querySelectorAll('.about_btn');

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

// About Page

function openAbout() {
    window.localStorage.setItem('aboutPage', 'active');
}


// Credits Page

let creditsPage = false;
const credits = document.querySelector('#credits_part2');
const education = document.querySelector('#education');

function checkActiveCredits() {
    const activeCredits = window.localStorage.getItem('creditsPage');
    
    if(activeCredits === 'active') {
        window.localStorage.setItem('creditsPage', 'notActive');
        creditsButtons[0].click();
    }
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

function enableScroll() {
    education.classList.remove('unscrollable');
}

function disableScroll() {
    education.classList.add('unscrollable');
}


// Context Menu

const contextMenu = document.querySelector('#context_menu');
const contextMenuWidth = parseInt(window.getComputedStyle(contextMenu).width.slice(0, -2));

function customContextMenu(event) {

    positionMenu(event);

    showElement(contextMenu);
}

function positionMenu(event){

    if(event.clientX + contextMenuWidth > window.innerWidth) {
        contextMenu.style.left = window.innerWidth - contextMenuWidth + 'px';
    }
    else {
        contextMenu.style.left = event.clientX + "px";
    }

    contextMenu.style.top = event.clientY + "px";
}

function checkClickedElement(event) {
    
    if(event.target.matches('.menu_desktop > ul > li > a')){
        event.preventDefault();
        hideElement(contextMenu); 
        customContextMenu(event);
    }
    else {
      hideElement(contextMenu);  
    }
}


// Function calls on load

window.onload = function() {
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    document.addEventListener('click', function() { hideElement(contextMenu);});
    document.addEventListener('contextmenu', checkClickedElement);
    
    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));

    credits.addEventListener('transitionstart',disableScroll);
    credits.addEventListener('transitionend',enableScroll);

    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));

    checkActiveCredits();
}