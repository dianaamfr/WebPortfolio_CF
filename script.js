
// Project Sliders

let activeSlide;
let sliders = Array.from(document.getElementsByClassName('project_slider'));

activeSlide = new Array(sliders.length);
activeSlide.fill(0);

function nextSlide(slider) {
    const slides = slider.querySelectorAll('.project_slide');
    const sliderIdx = sliders.indexOf(slider);
    
    slides.forEach(hideElement);
    
    showElement(slides[activeSlide[sliderIdx]]);

    activeSlide[sliderIdx]++;
    (activeSlide[sliderIdx] === slides.length) ? (activeSlide[sliderIdx] = 0) : null;

    const time = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(function(){ nextSlide(slider) }, time);
    
}


// Canvas shapes
const canvas = document.getElementsByTagName('canvas')[0];
const wrapper = document.getElementById('wrapper');
const dpi = window.devicePixelRatio;

function drawShapes() {
    fix_dpi();

    let ctx = canvas.getContext('2d');
    let rect = canvas.getBoundingClientRect();
    
    loadShapes(ctx);
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

function loadShapes(ctx) {
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
    console.log('here')
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



// Load projects/about

if(wrapper){

    if(typeof window.history.pushState == 'function') {
        window.history.pushState({}, "Hide", "index.php");
    }

    if(canvas){
        drawShapes();
    }

    sliders.forEach(nextSlide);

    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));
    homeButtons.forEach(homeBtn => homeBtn.addEventListener('click', function (event) {event.preventDefault(); projectButtons[0].click()}));

    about.addEventListener('transitionstart',disableProjectsScroll);
    about.addEventListener('transitionend',enableProjectsScroll);

    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
    projectButtons.forEach(projectBtn => projectBtn.addEventListener('click',closeAbout));

    projectsHeight();

 };

// Load education/credits
 
let education_wrapper = document.getElementById('education_wrapper');
if(education_wrapper) {

    if(typeof window.history.pushState == 'function') {
        window.history.pushState({}, "Hide", "education.php");
    }

    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    //aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',activateAbout));

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

let projectSections = document.getElementsByClassName('project_sections_track')[0];
let projectImages = document.getElementsByClassName('project_images')[0];
let projectContent = document.getElementsByClassName('project_content')[0];
let sliderHeight = document.getElementsByClassName('project_page_slide')[0].clientHeight;
let activeSection = 1;

if(projectPage){
    dots.forEach(dot => dot.addEventListener('click', function(event){
        let newSlide = parseInt(dot.getAttribute('data-slide'));
        console.log('active = ' + actualSlide + ' new = ' + newSlide);
        if(actualSlide != newSlide){
            let move = newSlide * 50;
            let offset = 10 * newSlide;

            slides.style.transform = "translateX(calc(-" + move.toString() + "vw + " + offset.toString() + "px))";

            actualSlide = newSlide;
        }
    }))

    plus.addEventListener('click', function(){
        plus.classList.toggle('rotate');

        if(activeSection === 1){
            plus.parentElement.style.borderBottom = '2px solid var(--stroke_grey)';
            projectSections.style.transform = `translateY(-${sliderHeight}px)`;
        }
        else{
            projectSections.style.transform = `translateY(0px)`;
            projectSections.addEventListener('transitionEnd',function(){
                plus.parentElement.style.borderBottom = 'none';
            })
        }

        activeSection = -activeSection;
    })
}