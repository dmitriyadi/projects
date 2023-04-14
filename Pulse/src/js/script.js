const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    autoplayResetOnVisibility: true,
    speed: 1000,
    controls: false,
    navPosition: 'bottom',
    responsive: {
        320: {
            nav: true,
        },
        992: {
            nav: false
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});