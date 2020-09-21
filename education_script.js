const aboutButtons = document.querySelectorAll('.about_btn');
aboutButtons.forEach(aboutBtn => aboutBtn.addEventListener('click',openAbout));

function openAbout() {
    window.localStorage.setItem('aboutPage', 'active');
    console.log(window.localStorage.getItem('aboutPage'));
}