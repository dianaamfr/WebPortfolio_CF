"use strict";

document.addEventListener('DOMContentLoaded', function(){
    if(document.getElementById('canvas')){
        // Draw Shapes
        const canvas = document.getElementsByTagName('canvas')[0];
        const wrapper = document.getElementById('wrapper');

        if(canvas && (window.screen.availWidth > 1199.98) && window.location.search === ''){
            drawShapes(wrapper,canvas);
        }
    }
})

function drawShapes(wrapper,canvas) {
    fix_dpi(canvas);

    let ctx = canvas.getContext('2d');
    let shapesPattern = randomWithProbability();
    let rect = canvas.getBoundingClientRect();
    
    loadShapes(shapesPattern, ctx, canvas);
    
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

function fix_dpi(canvas) {
    const dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
    
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}

function loadShapes(shapesPattern, ctx, canvas){
    switch(shapesPattern){
        case 1:
            loadMainShapes(ctx,canvas);
            break;
        default:
            loadAlternativeShapes(shapesPattern,ctx,canvas);
            break;
    }
}

function loadMainShapes(ctx,canvas) {
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

function loadAlternativeShapes(shapesPattern, ctx,canvas) {
    const shape = new Image();
    shape.src = 'items/shape' + shapesPattern.toString() + '.png';

    shape.onload = function(){
        drawImageWithSize(ctx, shape, canvas.width/2 - canvas.width/2 , 0, canvas.width, canvas.height);
    }
}

function randomWithProbability() {
    return Math.floor(Math.random() * 5 + 1);
}
