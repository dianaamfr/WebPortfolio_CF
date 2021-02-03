"use strict";

// Project Sliders

let activeSlide;
let sliders = Array.from(document.getElementsByClassName('project_slider'));

activeSlide = new Array(sliders.length);
activeSlide.fill(0);

function nextSlide(slider) {
    const slides = slider.querySelectorAll('.project_slide');
    const sliderIdx = sliders.indexOf(slider);
    
    slides.forEach(hideElement);
    
    slides[activeSlide[sliderIdx]].style.display = 'block';

    activeSlide[sliderIdx]++;
    (activeSlide[sliderIdx] === slides.length) ? (activeSlide[sliderIdx] = 0) : null;

    const time = (sliderIdx !== 2) ? (Math.floor(Math.random() * 4000) + 2000) : 6000;
    setTimeout(function(){ nextSlide(slider) }, time);
    
}

function hideElement(el) {
    el.style.display = 'none';
}


// Canvas shapes
const canvas = document.getElementsByTagName('canvas')[0];
const wrapper = document.getElementById('wrapper');
const dpi = window.devicePixelRatio;

function drawShapes() {
    fix_dpi();

    let ctx = canvas.getContext('2d');
    let shapesPattern = randomWithProbability();
    let rect = canvas.getBoundingClientRect();
    
    loadShapes(shapesPattern, ctx);
    
    wrapper.addEventListener('mousemove', function(e){
        let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        let radius = 160;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); 
        ctx.arc(x, y, radius, 0, 2 * Math.PI);  
        ctx.fill();
    });
}

function drawImageWithSize(ctx, img, x, y, width, height) {
    ctx.drawImage(img, x, y, width, height);
}

function fix_dpi() {
   let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
   let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
  
   canvas.setAttribute('height', style_height * dpi);
   canvas.setAttribute('width', style_width * dpi);
}

function loadShapes(shapesPattern, ctx){
    switch(shapesPattern){
        case 1:
            loadMainShapes(ctx);
            break;
        default:
            loadAlternativeShapes(shapesPattern,ctx);
            break;
    }
}

function loadMainShapes(ctx) {
    const redShape = new Image(), blueShape = new Image(), yellowShape = new Image();
    redShape.src = 'items/redShape.png';
    yellowShape.src = 'items/yellowShape.png';
    blueShape.src = 'items/blueShape.png';

    redShape.onload = function(){
        const ratio = redShape.height/redShape.width;
        const newWidth = canvas.width*0.6;
        const newHeight = newWidth * ratio;
    
        drawImageWithSize(ctx,redShape, canvas.width/2 - newWidth/2 , 0, newWidth, newHeight);
    }

    yellowShape.onload = function(){
        const ratio = yellowShape.height/yellowShape.width;
        const newWidth = canvas.width*0.30;
        const newHeight = newWidth * ratio;
        
        const c = canvas.width/2;
        const c1 = c/2;
        const x = c1 - newWidth/2;
    
        drawImageWithSize(ctx,yellowShape, x, canvas.height - newHeight, newWidth, newHeight);
    }
    
    blueShape.onload = function() {
        const ratio = blueShape.height/blueShape.width;
        const newWidth = canvas.width*0.30;
        const newHeight = newWidth * ratio;
    
        const c = canvas.width/2;
        const c2 = c + c/2;
        const x = c2 - newWidth/2;
        
        drawImageWithSize(ctx,blueShape, x , canvas.height - newHeight, newWidth, newHeight);
    }
}

function loadAlternativeShapes(shapesPattern, ctx) {
    const shape = new Image();
    shape.src = 'items/shape' + shapesPattern.toString() + '.png';

    shape.onload = function(){
        drawImageWithSize(ctx, shape, canvas.width/2 - canvas.width/2 , 0, canvas.width, canvas.height);
    }
}

function randomWithProbability() {
    return Math.floor(Math.random() * 5 + 1);
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

const aboutCol = document.getElementById('about');
const aboutContent = document.querySelector('#about_content');
const aboutButtons = document.querySelectorAll('.about_btn');
const homeButtons = document.querySelectorAll('.home_btn');
const projectButtons = document.querySelectorAll('.project_btn');
const projects = document.querySelector('#projects');
const educationButtons = document.querySelectorAll('.education_btn');

function openAbout(event) {
    event.preventDefault();

    if(!aboutCol.classList.contains('slide_in')){
        aboutCol.classList.add('slide_in'); 
    } 
}

function closeAbout(event) {
    event.preventDefault();

    // Lock scroll on projects and about
    projects.scrollTop = 0;

    // Slide about column out
    aboutCol.classList.remove('slide_in'); 
    
}

function enableProjectsScroll() {
    projects.classList.remove('unscrollable');
    about_content.classList.remove('unscrollable');
}

function disableProjectsScroll() {
    projects.classList.add('unscrollable');
    about_content.classList.add('unscrollable');
}


// Credits Page
const creditsButtons = document.querySelectorAll('.credits_btn');
const credits = document.querySelector('#credits_part2');
const education = document.querySelector('#education');
const educationDiv = document.querySelector('#education>div');


function openCredits(event) {
    event.preventDefault();
    if(!education.classList.contains('slide_out')){
        education.classList.add('slide_out'); 
    } 
}

function closeCredits(event) {
    event.preventDefault();
    // Slide education column in
    education.classList.remove('slide_out'); 
}


// Scroll

function enableEducationScroll() {
    educationDiv.classList.remove('unscrollable');
}

function disableEducationScroll() {
    educationDiv.classList.add('unscrollable');
}


// Load Header


// Load projects/about
let pair = document.getElementsByClassName('pair')[0];
let closeAboutBtn = document.querySelector('#work_areas .icon_plus')

if(wrapper){

    // URL format
    if(typeof window.history.pushState == 'function') {
        window.history.pushState({}, "Hide", "index.php");
    }

    // Draw Shapes
    /*if(canvas){
        drawShapes();
    }*/

    // Activate Sliders
    sliders.forEach(nextSlide);

    // Menu buttons
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));
    homeButtons.forEach(homeBtn => homeBtn.addEventListener('click', function (event) {event.preventDefault(); projectButtons[0].click()}));

    // About movement
    about.addEventListener('transitionstart',disableProjectsScroll);
    about.addEventListener('transitionend',enableProjectsScroll);
    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
    projectButtons.forEach(projectBtn => projectBtn.addEventListener('click',closeAbout));
    closeAboutBtn.addEventListener('click', closeAbout)
    
    // Projects Scroll Sticky  
    // TODO - improve
    //projects.addEventListener('wheel', projectsStickyScroll);

 };

 function projectsStickyScroll(event){
    event.preventDefault();

    if (event.deltaY < 0 && pair.previousElementSibling){
        pair = pair.previousElementSibling
        pair.scrollIntoView({behavior: "smooth"});
    }
    else if (event.deltaY > 0 && pair.nextElementSibling){
        pair = pair.nextElementSibling
        pair.scrollIntoView({ behavior: "smooth"});
    }
 }

// Load education/credits
 
let education_wrapper = document.getElementById('education_wrapper');
if(education_wrapper) {

    // URL format
    if(typeof window.history.pushState == 'function') {
        window.history.pushState({}, "Hide", "education.php");
    }

    // Menu buttons
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    // Credits movement
    education.addEventListener('transitionstart',disableEducationScroll);
    education.addEventListener('transitionend',enableEducationScroll);
    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));
}


// Project Page Slider
let actualSlide = 0;
let projectPage = document.getElementsByClassName('project_page')[0];
let dots = document.querySelectorAll("input[name='dot']");
let slides = document.getElementsByClassName('project_slider_track')[0];
let plus = document.querySelector('.project_page .icon_plus');

let projectContent = document.getElementsByClassName('project_content')[0];
let projectLeftText = document.querySelector('.project_content > div:first-child');
let projectRightText = document.querySelector('.project_content > div:last-child');
let projectDesc = document.querySelector('.project_description');
let projectInfo = document.querySelector('.project_info');
let activeSection = 1;

let leftArrow = document.querySelector('.arrows img');
let rightArrow = document.querySelector('.arrows img:last-child');

let nSlides = dots.length;
let offsetBase;

if(projectPage){
    offsetBase = parseInt(getComputedStyle(document.getElementsByClassName('project_page_slide')[0]).getPropertyValue('margin-right'));

    // Scroll up and down
    if(window.screen.availWidth > 1199.98){
        window.addEventListener('wheel', projectContentScroll);
    }

    // dots
    dots.forEach(dot => dot.addEventListener('click', dotsSlider))

    //arrows
    leftArrow.addEventListener('click', leftArrowClick)

    rightArrow.addEventListener('click', rightArrowClick)

    // plus
    plus.addEventListener('click', plusButton)
}

function projectContentScroll(event){

    if (event.deltaY < 0 && activeSection === -1){
        // Change to slider
        plus.classList.toggle('rotate');
        projectContent.style.transform = `translateY(100%)`;
        activeSection = -activeSection;
    }
    else if (event.deltaY > 0 && activeSection === 1){
        // Change to info
        plus.classList.toggle('rotate');
        projectContent.style.transform = `translateY(-2px)`;
        activeSection = -activeSection;
    }
}

function dotsSlider(){
    let newSlide = parseInt(dot.getAttribute('data-slide'));
    
    if(actualSlide != newSlide){
        let move = newSlide * 50;
        let offset = offsetBase * newSlide;

        slides.style.transform = "translateX(calc(-" + move.toString() + "vw + " + offset.toString() + "px))";

        actualSlide = newSlide;
        
        if(actualSlide === 0){
            leftArrow.style.visibility = 'hidden';
        }
        else if(actualSlide === (nSlides - 1)){
            rightArrow.style.visibility = 'hidden';
        }
        else{
            leftArrow.style.visibility = 'visible';
            rightArrow.style.visibility = 'visible';
        }
    }
}

function leftArrowClick(){
    
    if(actualSlide === 0) return;

    actualSlide--;
    let move = actualSlide * 50;
    let offset = offsetBase * actualSlide;
    
    dots[actualSlide].click();
    slides.style.transform = "translateX(calc(-" + move.toString() + "vw + " + offset.toString() + "px))";

    if(actualSlide === 0){
        leftArrow.style.visibility = 'hidden';
    }
    else if(actualSlide === nSlides - 2){
        rightArrow.style.visibility = 'visible';
    }
}

function rightArrowClick(){
    if(actualSlide === (nSlides - 1)) return;

    actualSlide++;
    let move = actualSlide * 50;
    let offset = offsetBase * actualSlide;

    dots[actualSlide].click();
    slides.style.transform = "translateX(calc(-" + move.toString() + "vw + " + offset.toString() + "px))";

    if(actualSlide === nSlides - 1){
        rightArrow.style.visibility = 'hidden';
    }
    else if(actualSlide === 1){
        leftArrow.style.visibility = 'visible';
    }
}

function plusButton(){
    
    // handle text overflow

    if(window.screen.availWidth > 1199.98){
        while(projectLeftText.scrollHeight > projectLeftText.clientHeight){
            let lastP = projectDesc.lastElementChild;       
            lastP.style.flex = '1';     
            projectRightText.insertBefore(lastP, projectInfo);
            projectDesc.removeChild(projectDesc.lastChild);
        }
    }

    // Rotate plus button
    plus.classList.toggle('rotate');

    // Open/Close project info
    if(activeSection === 1){
        projectContent.style.transform = `translateY(-2px)`;
    }
    else{
        projectContent.style.transform = `translateY(100%)`;
    }

    activeSection = -activeSection;
}

// Responsive menu

let burger = document.getElementById('burger_container');
let header = document.getElementById('header_slider').parentElement
    
burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    header.classList.toggle('open')
})
