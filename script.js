// Canvas
let canvas = document.querySelector('canvas');
let wrap = document.querySelector('#wrapper');
let dpi = window.devicePixelRatio;
let ctx = canvas.getContext('2d');
let rect = canvas.getBoundingClientRect();

let redShape = new Image();
let blueShape = new Image()
let yellowShape = new Image();

// wait for the content of the window element 
// to load, then performs the operations. 
// This is considered best practice. 
window.addEventListener('load', ()=>{
    wrapper.addEventListener('mousemove', eraseShapes);
    fix_dpi();
    loadShapes();
});

function drawImageWithSize(img, x, y, width, height) {
  ctx.drawImage(img, x, y, width, height);
}

function loadShapes(){
    redShape.src = 'icons/redShape.png';
    yellowShape.src = 'icons/yellowShape.png';
    blueShape.src = 'icons/blueShape.png';

    redShape.onload = function(){
        let ratio = redShape.height/redShape.width;
        let newWidth = canvas.width*0.7;
        let newHeight = newWidth * ratio;
    
        drawImageWithSize(redShape, canvas.width/2 - newWidth/2 , 0, newWidth, newHeight);
    }

    yellowShape.onload = function(){
        let ratio = yellowShape.height/yellowShape.width;
        let newWidth = canvas.width*0.35;
        let newHeight = newWidth * ratio;
    
        let x = screen.width/2 - newWidth;
    
        drawImageWithSize(yellowShape, x, canvas.height - newHeight, newWidth, newHeight);
    }
    
    blueShape.onload = function(){
        let ratio = blueShape.height/blueShape.width;
        let newWidth = canvas.width*0.35;
        let newHeight = newWidth * ratio;
    
        let x = screen.width/2 + newWidth/2;
        
        drawImageWithSize(blueShape, x , canvas.height - newHeight, newWidth, newHeight);
    }
}

function fix_dpi() {
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
   
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}

function eraseShapes(e){
    let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    let radius = 160;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();    
    ctx.arc(x, y, radius, 0, 2 * Math.PI);  
    ctx.fill();
}

// Sticky Header and Divs On Scroll
let header = document.querySelector('header');
let headerOffsetTop = header.offsetTop;

/*
let projectDivs = Array.from(document.querySelectorAll('.project'));
let divTopOffsets = new Array(projectDivs.length);
projectDivs.forEach(calculateTopOffset);*/

window.onscroll = function() {
    stickyHeader()
    /*projectDivs.forEach(stickyDivs);*/
};

function calculateTopOffset(projectDiv) {
    divTopOffsets[projectDivs.indexOf(projectDiv)] = projectDiv.offsetTop - projectDiv.offsetHeight/2;
    const divIdx = projectDivs.indexOf(projectDiv);

    if(divIdx <= 1 ){
        divTopOffsets[projectDivs.indexOf(projectDiv)] = projectDiv.offsetTop;
    }
}

function stickyHeader() {
    (window.pageYOffset >= headerOffsetTop) ? header.classList.add("sticky_header") : header.classList.remove("sticky_header");
}

function stickyDivs(projectDiv) {
    const divIdx = projectDivs.indexOf(projectDiv);
    const divTopOffset = divTopOffsets[divIdx];

    if(window.pageYOffset >= divTopOffset && window.pageYOffset < projectDiv.offsetTop) {
        console.log("divIdx" + divIdx);
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
    
    slides.forEach(hideSlide);
    showSlide(slides[activeSlide[sliderIdx]]);

    if(slides.length !== 1){
        activeSlide[sliderIdx]++;
        (activeSlide[sliderIdx] === slides.length) ? (activeSlide[sliderIdx] = 0) : null;

        const time = Math.floor(Math.random() * 4000) + 2000;
        setTimeout(function(){ nextSlide(slider) }, time);
    }
}

function hideSlide(slide){
    slide.display = "none";
}

function showSlide(slide){
    slide.display = "block";
}