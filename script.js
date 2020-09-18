
// Project Sliders

let activeSlide;
const sliders = Array.from(document.querySelectorAll('.project_slider'));

activeSlide = new Array(sliders.length);
activeSlide.fill(0);

function nextSlide(slider) {
    const slides = slider.querySelectorAll('.project_slide');
    const sliderIdx = sliders.indexOf(slider);
    
    slides.forEach(hideElement);
    showElement(slides[activeSlide[sliderIdx]]);

    if(slides.length !== 1){
        activeSlide[sliderIdx]++;
        (activeSlide[sliderIdx] === slides.length) ? (activeSlide[sliderIdx] = 0) : null;

        const time = Math.floor(Math.random() * 4000) + 2000;
        setTimeout(function(){ nextSlide(slider) }, time);
    }
}

// Canvas shapes
const canvas = document.querySelector('canvas');
const wrap = document.querySelector('#wrapper');
const dpi = window.devicePixelRatio;
const ctx = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();
const redShape = new Image(), blueShape = new Image(), yellowShape = new Image();

function existsLocalStorage() {
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

// About column

const aboutCol = document.querySelector('#about');
const aboutButtons = document.querySelectorAll('.about_btn');
const homeButtons = document.querySelectorAll('.home_btn');
const projectButtons = document.querySelectorAll('.project_btn');
const content = document.querySelector('#content');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const lines = document.querySelectorAll('.line');

let aboutPage = false;
const rightOnLeftProjects = document.querySelector('#right_to_left');

function openAbout() {
    // About column is opened already
    if(aboutPage === true) return;
    aboutPage = true;

    content.scrollTop = 0;

    // Change selected menu button
    aboutButtons.forEach(aboutBtn => aboutBtn.classList.add('active_page'));
    projectButtons.forEach(projectBtn => projectBtn.classList.remove('active_page'));

    // Change right projects to left
    showElement(rightOnLeftProjects);

    // Slide about column in
    aboutCol.classList.add('slide_in');

    // Change lines
    lines.forEach(line => line.classList.add('open_about'));

    // Control scroll
    disableYScroll(content);
    enableYScroll(left);
}

function closeAbout() {
    // About column is closed already
    if(aboutPage === false) return;
    aboutPage = false;

    content.scrollTop = 0;

     // Change selected menu button
    aboutButtons.forEach(aboutBtn => aboutBtn.classList.remove('active_page'));
    projectButtons.forEach(projectBtn => projectBtn.classList.add('active_page'));

    // Hide right projects from left
    hideElement(rightOnLeftProjects);

    // Slide about column out
    aboutCol.classList.remove('slide_in'); 

    // Change lines
    lines.forEach(line => line.classList.remove('open_about'));

    // Control scroll
    enableYScroll(content);
    autoYScroll(left);
}

// Hide/Show elements

function hideElement(el) {
    el.style.display = 'none';
}

function showElement(el) {
    el.style.display = 'block';
}

function enableYScroll(el){
    el.style.height = '100vh';
    el.style.overflowY = 'scroll';
}

function autoYScroll(el) {
    el.style.overflowY = 'auto';
}

function disableYScroll(el){
    el.style.overflowY = 'hidden';
}

// Content height

function projectsHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => project.style.maxHeight = (window.innerHeight - headerHeight - footerHeight + 3) + 'px');
}

window.onload = function() {
    existsLocalStorage() === true ? null : drawShapes();
    sliders.forEach(nextSlide);
    aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
    homeButtons.forEach(homeBtn => homeBtn.addEventListener('click',closeAbout));
    projectsHeight();
 };
