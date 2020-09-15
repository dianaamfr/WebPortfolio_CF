// Canvas
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let redShape = new Image();
let blueShape = new Image()
let yellowShape = new Image();
redShape.src = 'icons/redShape.svg';
yellowShape.src = 'icons/yellowShape.svg';
blueShape.src = 'icons/blueShape.svg';

/*redShape.onload = function () {
    ctx.drawImage(redShape, 0, 0);
};

blueShape.onload = function () {
    ctx.drawImage(blueShape, 0, 0);
};

yellowShape.onload = function () {
    ctx.drawImage(yellowShape, 0, 0);
};*/


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