const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--down');
const prevButton = document.querySelector('.carousel__button--up');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideHeight = slides[0].getBoundingClientRect().height;

const setSlidePosition = (slide, index) => {
    slide.style.top = slideHeight * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateY(-' + targetSlide.style.top + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];
    
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling || dots[0];
    
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot);
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

const setPosToButtons = () => {
    prevButton.style.right = slides[0].getBoundingClientRect().width / 4 + 'px';
    nextButton.style.right = slides[0].getBoundingClientRect().width / 4 + 'px';
}

setPosToButtons();
window.addEventListener('resize', e => setPosToButtons);

setInterval(() => {
    nextButton.click();
}, 10000);