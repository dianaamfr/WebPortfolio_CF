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

    const time = ((sliderIdx === 2) || ((sliderIdx === 1) && (activeSlide[sliderIdx] === 0))) ? 6000 : (Math.floor(Math.random() * 4000) + 2000);
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
        let radius = 250;
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

    window.history.pushState('about', 'Title', 'index.php?about=');

    if(!aboutCol.classList.contains('slide_in')){
        aboutCol.classList.add('slide_in'); 
    } 
}

function closeAbout(event) {
    event.preventDefault();

    window.history.pushState('projects', 'Title', 'index.php');

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

    window.history.pushState('credits', 'Title', 'education.php?credits=');

    if(!education.classList.contains('slide_out')){
        education.classList.add('slide_out'); 
    } 
}

function closeCredits(event) {
    event.preventDefault();

    window.history.pushState('education', 'Title', 'education.php');

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


// Load projects/about
let pair = document.getElementsByClassName('pair')[0];
let closeAboutBtn = document.querySelector('#work_areas .icon_plus')

if(wrapper){

    // Draw Shapes
    if(canvas && (window.screen.availWidth > 1199.98) && window.location.search === ''){
        drawShapes();
    }

    // Activate Sliders
    sliders.forEach(nextSlide);

    // Menu buttons
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));
    homeButtons.forEach(homeBtn => homeBtn.addEventListener('click', function (event) {event.preventDefault(); projectButtons[0].click()}));

    // About movement
    if(window.screen.availWidth > 1199.98) {
        about.addEventListener('transitionstart',disableProjectsScroll);
        about.addEventListener('transitionend',enableProjectsScroll);
        aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
        projectButtons.forEach(projectBtn => projectBtn.addEventListener('click',closeAbout));
        closeAboutBtn.addEventListener('click', closeAbout)
    }
    
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

    // Menu buttons
    menuButtons.forEach(btn => btn.addEventListener('click', activeMenuButtons));

    // Credits movement
    education.addEventListener('transitionstart',disableEducationScroll);
    education.addEventListener('transitionend',enableEducationScroll);
    creditsButtons.forEach(creditsBtn => creditsBtn.addEventListener('click',openCredits));
    educationButtons.forEach(educationBtn => educationBtn.addEventListener('click',closeCredits));
}


// Project Page Slider
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

const _C = document.querySelector('.project_slider_track')

let i = 0, x0 = null, y0 = null, locked = false, w, h, ty = null;

if(projectPage){
    let N = _C.children.length;
    
    // Scroll up and down
    if(window.screen.availWidth > 1199.98){
        window.addEventListener('wheel', projectContentScroll);
    }

    // dots
    dots.forEach(dot => dot.addEventListener('click', dotsSlider.bind(dot,N)))

    //arrows
    leftArrow.addEventListener('click', function(){leftArrowClick(N);})

    rightArrow.addEventListener('click', function(){rightArrowClick(N);})

    // plus
    plus.addEventListener('click', plusButton)

    // touch slider
    size();

    addEventListener('resize', size, false);

    _C.addEventListener('mousedown', lock, false);
    _C.addEventListener('touchstart', lock, false);

    _C.addEventListener('mousemove', function(e){drag(e,N);}, false);
    _C.addEventListener('touchmove', function(e){drag(e,N);}, false);

    _C.addEventListener('mouseup', function(e){move(e,N);}, false);
    _C.addEventListener('touchend', function(e){move(e,N);}, false);
}

function projectContentScroll(event){
    
    if(horizontalMove(event.deltaX, event.deltaY)) return;
    
    if (event.deltaY > 0 && activeSection === 1){
        // Change to info
        plus.classList.toggle('rotate');
        projectContent.style.bottom = '78px';
        activeSection = -activeSection;
    }
    else if (event.deltaY < 0 && activeSection === -1){
        // Change to slider
        plus.classList.toggle('rotate');
        projectContent.style.bottom = 'calc(-100% + 154px)';
        activeSection = -activeSection;
    }
    
}

function dotsSlider(N){
    if(i != parseInt(this.getAttribute('data-slide'))){
        i = parseInt(this.getAttribute('data-slide'))
        _C.style.setProperty('--i', i);
    }   

    arrowVisibility(N)
}

function leftArrowClick(N){
    if(i === 0) return;

    _C.style.setProperty('--i', i -= 1);
    
    dots[i].click();

    arrowVisibility(N)

}

function rightArrowClick(N){

    if(i === (N - 2)) return;

    _C.style.setProperty('--i', i += 1);

    dots[i].click();

    arrowVisibility(N)
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
        projectContent.style.bottom = '78px';
    }
    else{
        projectContent.style.bottom = 'calc(-100% + 154px)';
    }

    activeSection = -activeSection;
}

// Responsive menu

let burger = document.getElementsByClassName('burger')[0];
let header = document.getElementById('header_slider').parentElement
    
burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    header.classList.toggle('open')
})

// Hide video controls
let videos = document.getElementsByClassName("video")
if(videos.length > 0){
    videos.forEach(video => video.controls = false)
}

function size() { w = window.innerWidth; h = window.innerHeight; };

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) {
    x0 = unify(e).clientX; y0 = unify(e).clientY;
    _C.classList.toggle('smooth', !(locked = true))
};

function drag(e,N) {
    
	if(locked && i < N - 2 && i > 0) {
        _C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
        ty = Math.round(unify(e).clientY - y0)
    }		
};

function move(e,N) {
    
    if(locked) {
        let dx = unify(e).clientX - x0, s = Math.sign(dx), 
                    f = +(s*dx/w).toFixed(2);
        let dy = unify(e).clientY - y0;

        if((i > 0 || s < 0) && (i < N - 2 || s > 0) && horizontalMove(dx,dy)) {
            _C.style.setProperty('--i', i -= s);
            dots[i].click();
            f = 1 - f
        }
        else if(w  > 1199.98){
            
            if(dy < 0){
                plus.classList.toggle('rotate');
                projectContent.style.bottom = '78px';
                activeSection = -activeSection;
            }
            else {
                plus.classList.toggle('rotate');
                projectContent.style.bottom = 'calc(-100% + 154px)';
                activeSection = -activeSection;
            }
        }
            
        _C.style.setProperty('--tx', '0px');
        _C.style.setProperty('--f', f);
        _C.classList.toggle('smooth', !(locked = false));
        x0 = null
    }

    arrowVisibility(N);
};

function horizontalMove(dx, dy){
    return ((dy > 0 && dx > 0 && dx > dy)||
        (dy > 0 && dx < 0 && -dx > dy ) || 
    (dy < 0 && dx < 0 && dy > dx) || 
    (dx > 0 && dy < 0 && dx > -dy));
}

function arrowVisibility(N){
    if(i === 0){
        leftArrow.style.visibility = 'hidden';
    }
    else{
        leftArrow.style.visibility = 'visible';
    }

    if(i === N - 2){
        rightArrow.style.visibility = 'hidden';
    }
    else{
        rightArrow.style.visibility = 'visible';
    }
}