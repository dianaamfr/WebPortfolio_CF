
// Project Sliders

let activeSlide;
let sliders = Array.from(document.getElementsByClassName('project_slider'));

activeSlide = new Array(sliders.length);
activeSlide.fill(0);

function nextSlide(slider) {
    const slides = slider.querySelectorAll('.project_slide');
    const sliderIdx = sliders.indexOf(slider);
    
    slides.forEach(hideElement);
    console.log(slides)
    showElement(slides[activeSlide[sliderIdx]]);

    activeSlide[sliderIdx]++;
    (activeSlide[sliderIdx] === slides.length) ? (activeSlide[sliderIdx] = 0) : null;

    const time = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(function(){ nextSlide(slider) }, time);
    
}


// Canvas shapes
const canvas = document.querySelector('canvas');
const wrap = document.querySelector('#wrapper');
const dpi = window.devicePixelRatio;
const ctx = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();
const redShape = new Image(), blueShape = new Image(), yellowShape = new Image();

function isNewSession() {
   if (window.sessionStorage.getItem('isNewSession')) {
       return true;
   } else {
       window.sessionStorage.setItem('isNewSession', 'true');
       return false;
   }
}

function drawShapes() {

   fix_dpi();
   loadShapes();
   wrapper.addEventListener('mousemove', eraseShapes);
}

function drawImageWithSize(img, x, y, width, height) {
 ctx.drawImage(img, x, y, width, height);
}

function fix_dpi() {
   let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
   let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
  
   canvas.setAttribute('height', style_height * dpi);
   canvas.setAttribute('width', style_width * dpi);
}

function loadShapes() {
   redShape.src = 'icons/redShape.png';
   yellowShape.src = 'icons/yellowShape.png';
   blueShape.src = 'icons/blueShape.png';

   redShape.onload = function(){
       const ratio = redShape.height/redShape.width;
       const newWidth = canvas.width*0.6;
       const newHeight = newWidth * ratio;
   
       drawImageWithSize(redShape, canvas.width/2 - newWidth/2 , 0, newWidth, newHeight);
   }

   yellowShape.onload = function(){
       const ratio = yellowShape.height/yellowShape.width;
       const newWidth = canvas.width*0.30;
       const newHeight = newWidth * ratio;
       
       const c = canvas.width/2;
       const c1 = c/2;
       const x = c1 - newWidth/2;
   
       drawImageWithSize(yellowShape, x, canvas.height - newHeight, newWidth, newHeight);
   }
   
   blueShape.onload = function() {
       const ratio = blueShape.height/blueShape.width;
       const newWidth = canvas.width*0.30;
       const newHeight = newWidth * ratio;
   
       const c = canvas.width/2;
       const c2 = c + c/2;
       const x = c2 - newWidth/2;
       
       drawImageWithSize(blueShape, x , canvas.height - newHeight, newWidth, newHeight);
   }
}

function eraseShapes(e) {
   let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
   let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
   let radius = 160;
   ctx.globalCompositeOperation = 'destination-out';

   ctx.beginPath();    
   ctx.arc(x, y, radius, 0, 2 * Math.PI);  
   ctx.fill();
}


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

const aboutCol = document.querySelector('#about');
const aboutContent = document.querySelector('#about_content');
const aboutButtons = document.querySelectorAll('.about_btn');
const homeButtons = document.querySelectorAll('.home_btn');
const projectButtons = document.querySelectorAll('.project_btn');
const projects = document.querySelector('#projects');
const educationButtons = document.querySelectorAll('.education_btn');
let aboutPage = false;

function checkActiveAbout() {
    const activeAbout = window.localStorage.getItem('aboutPage');
    
    if(activeAbout === 'active') {
        window.localStorage.setItem('aboutPage', 'notActive');
        aboutButtons[0].click();
    }
}

function activateAbout() {
    window.localStorage.setItem('aboutPage', 'active');
}

function openAbout() {
    // About column is opened already
    if(aboutPage === true) return;
    aboutPage = true;

    // Slide about column in
    aboutCol.classList.add('slide_in');   
}

function closeAbout() {
    // About column is closed already
    if(aboutPage === false) return;
    aboutPage = false;

    // Lock scroll on projects and about
    projects.scrollTop = 0;

    // Slide about column out
    aboutCol.classList.remove('slide_in'); 
    
}

function enableScroll() {
    projects.classList.remove('unscrollable');
    about_content.classList.remove('unscrollable');
}

function disableScroll() {
    projects.classList.add('unscrollable');
    about_content.classList.add('unscrollable');
}


// Credits Page
const creditsButtons = document.querySelectorAll('.credits_btn');
let creditsPage = false;
const credits = document.querySelector('#credits_part2');
const education = document.querySelector('#education');
const educationDiv = document.querySelector('#education>div');

function activateCredits() {
    window.localStorage.setItem('creditsPage', 'active');
}

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

    // Slide education column out
    education.classList.add('slide_out');   
}

function closeCredits() {
    // Credits column is closed already
    if(creditsPage === false) return;
    creditsPage = false;

    // Slide education column in
    education.classList.remove('slide_out'); 
}


// Scroll

function enableScroll() {
    educationDiv.classList.remove('unscrollable');
}

function disableScroll() {
    educationDiv.classList.add('unscrollable');
}


// Hide/Show elements

function hideElement(el) {
    el.style.display = 'none';
}

function showElement(el) {
    el.style.display = 'block';
}

// Content height

function projectsHeight() {
    const projectDescription = document.querySelectorAll('.description')[1];
    const content = document.querySelector('#content');

    sliders.forEach(projectSlider => projectSlider.style.height = (content.offsetHeight - projectDescription.offsetHeight) + 'px');
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
    
    if(event.target.matches('.menu_desktop > ul > li > a') || event.target.matches('.page_title')){
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


let wrapper = document.getElementById('wrapper');
if(wrapper){

    //drawShapes();
    sliders.forEach(nextSlide);

    document.addEventListener('click', function() { hideElement(contextMenu);});
    document.addEventListener('contextmenu', checkClickedElement);

    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));
    homeButtons.forEach(homeBtn => homeBtn.addEventListener('click', function () {projectButtons[0].click()}));
    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',activateCredits));

    about.addEventListener('transitionstart',disableScroll);
    about.addEventListener('transitionend',enableScroll);

    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
    projectButtons.forEach(projectBtn => projectBtn.addEventListener('click',closeAbout));

    projectsHeight();

    checkActiveAbout();
 };

 
let education_wrapper = document.getElementById('education_wrapper');
if(education_wrapper) {
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    document.addEventListener('click', function() { hideElement(contextMenu);});
    document.addEventListener('contextmenu', checkClickedElement);

    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',activateAbout));

    education.addEventListener('transitionstart',disableScroll);
    education.addEventListener('transitionend',enableScroll);

    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));

    checkActiveCredits();
}
