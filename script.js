let activeSlide;
const sliders = Array.from(document.querySelectorAll('.project_image_container'));

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
    slide.style.opacity = 0;
}

function showSlide(slide){
    slide.style.opacity = 1;
}