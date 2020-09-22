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

function activateAbout() {
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

function activateCredits() {
    window.localStorage.setItem('creditsPage', 'active');
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


// Hide/Show elements

function hideElement(el) {
    el.style.display = 'none';
}

function showElement(el) {
    el.style.display = 'block';
}


// Context Menu

const contextMenu = document.querySelector('#context_menu');
const newTabLink = document.querySelector('#context_menu_link');
const contextMenuWidth = parseInt(window.getComputedStyle(contextMenu).width.slice(0, -2));

function customContextMenu(event) {

    positionMenu(event);

    const url = event.target.href;
    setNewTabHref(url);
    openSectionsOnNewPage(event.target);

    showElement(contextMenu);
}

function positionMenu(event){

    if(event.clientX + contextMenuWidth > window.innerWidth) {
        contextMenu.style.left = window.innerWidth - contextMenuWidth - 5 + 'px';
    }
    else {
        contextMenu.style.left = event.clientX + "px";
    }

    contextMenu.style.top = event.clientY + "px";
}

function checkClickedElement(event) {
    
    if(event.target.matches('.menu_desktop > ul > li > a')|| event.target.matches('.page_title')){
        event.preventDefault();
        hideElement(contextMenu); 
        customContextMenu(event);
    }
    else {
      hideElement(contextMenu);  
    }
}

function setNewTabHref(url){
    if(url !== 'javascript:void(0)'){
        newTabLink.href = url;
    }
    else {
        newTabLink.href = window.location.href;
    }
}

function openSectionsOnNewPage(el) {
    if(el.matches('.about_btn')){
        activateAbout();
    }
    else if (el.matches('.credits_btn')) {
        activateCredits();
    }
}


// Function calls on load

window.onload = function() {
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    document.addEventListener('click', function() { hideElement(contextMenu);});
    document.addEventListener('contextmenu', checkClickedElement);

    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',activateAbout));

    credits.addEventListener('transitionstart',disableScroll);
    credits.addEventListener('transitionend',enableScroll);

    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));

    checkActiveCredits();
}