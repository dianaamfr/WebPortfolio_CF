// Canvas shapes
let canvas = document.querySelector('canvas');
let wrap = document.querySelector('#wrapper');
let dpi = window.devicePixelRatio;
let ctx = canvas.getContext('2d');
let rect = canvas.getBoundingClientRect();

let redShape = new Image(), blueShape = new Image(), yellowShape = new Image();

stickyHeaderFooter();
checkLocalStorage();

function eraseShapes(e) {
    let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    let radius = 160;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();    
    ctx.arc(x, y, radius, 0, 2 * Math.PI);  
    ctx.fill();
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

function loadShapes(){
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
    
    blueShape.onload = function(){
        const ratio = blueShape.height/blueShape.width;
        const newWidth = canvas.width*0.30;
        const newHeight = newWidth * ratio;
    
        const c = canvas.width/2;
        const c2 = c + c/2;
        const x = c2 - newWidth/2;
        
        drawImageWithSize(blueShape, x , canvas.height - newHeight, newWidth, newHeight);
    }
}

function checkLocalStorage() {
    if (window.sessionStorage.getItem('isNewSession')) {
        return;
    } else {
        window.sessionStorage.setItem('isNewSession', 'true');
        wrapper.addEventListener('mousemove', eraseShapes);
        fix_dpi();
        loadShapes();
    }
}

// Sticky Header and Divs On Scroll
let header = document.querySelector('header');
let headerOffsetTop = header.offsetTop;

/*
let projectDivs = Array.from(document.querySelectorAll('.project'));
let divTopOffsets = new Array(projectDivs.length);
projectDivs.forEach(calculateTopOffset);*/

function calculateTopOffset(projectDiv) {
    divTopOffsets[projectDivs.indexOf(projectDiv)] = projectDiv.offsetTop - projectDiv.offsetHeight/2;
    const divIdx = projectDivs.indexOf(projectDiv);

    if(divIdx <= 1 ){
        divTopOffsets[projectDivs.indexOf(projectDiv)] = projectDiv.offsetTop;
    }
}

function stickyHeaderFooter() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const contentDiv = document.querySelector('#content');
    const aboutDivs = document.querySelectorAll('#details > div');
    const right = document.querySelector('#right');
    const left = document.querySelector('#left');

    contentDiv.style.top = headerHeight + 'px';

    right.style.margin = '0px 0px ' + footerHeight + 'px 0px';
    left.style.margin = '0px 0px ' + footerHeight + 'px 0px';
    aboutDivs.forEach(aboutDiv => aboutDiv.style.margin = '0px 20px ' + footerHeight + 'px 20px');
}

function stickyDivs(projectDiv) {
    const divIdx = projectDivs.indexOf(projectDiv);
    const divTopOffset = divTopOffsets[divIdx];

    if(window.pageYOffset >= divTopOffset && window.pageYOffset < projectDiv.offsetTop) {
        console.log('divIdx' + divIdx);
        window.scrollTo(0,projectDiv.offsetTop);
    } 
}


// Project Sliders

let activeSlide;
const sliders = Array.from(document.querySelectorAll('.project_slider'));

activeSlide = new Array(sliders.length);
activeSlide.fill(0);

sliders.forEach(nextSlide);

function nextSlide(slider){
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


// About column

const body = document.querySelector('body');
const aboutCol = document.querySelector('#about');
const aboutButtons = document.querySelectorAll('.about_btn');
const homeButtons = document.querySelectorAll('.home_btn');
const projectButtons = document.querySelectorAll('.project_btn');
const projectsCol = document.querySelector('#projects');
const content = document.querySelector('#content');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const lines = document.querySelectorAll('.line');

aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));
homeButtons.forEach(homeBtn => homeBtn.addEventListener('click',closeAbout));

function openAbout(){
    // About column is opened already
    if( getComputedStyle(aboutCol, null).display !== 'none') return;

    body.style.overflow = 'hidden';
    left.classList.add('open_about');
    right.classList.add('open_about');

    projectsCol.classList.add('open_about');
    content.classList.add('open_about');

    lines.forEach(line => line.classList.add('open_about'));

    aboutButtons.forEach(aboutBtn => aboutBtn.classList.add('active_page'));
    projectButtons.forEach(projectBtn => projectBtn.classList.remove('active_page'));
    showElement(aboutCol);

}

function closeAbout(){
    // About column is closed already
    if( getComputedStyle(aboutCol, null).display === 'none'){ return;}

    body.style.overflow = '';
    left.classList.remove('open_about');
    right.classList.remove('open_about');

    projectsCol.classList.remove('open_about');
    content.classList.remove('open_about');

    lines.forEach(line => line.classList.remove('open_about'));

    aboutButtons.forEach(aboutBtn => aboutBtn.classList.remove('active_page'));
    projectButtons.forEach(projectBtn => projectBtn.classList.add('active_page'));
    hideElement(aboutCol);
}

// Hide/Show elements

function hideElement(e){
    e.style.display = 'none';
}

function showElement(e){
    e.style.display = 'block';
}
