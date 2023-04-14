menu.onclick = function myFunction() {
    var x = document.getElementById("nav_section");
    if(x.className === "header_menu") {
        x.className += " responsive";
    } else {
        x.className = "header_menu";
    }
}
var slideIndex = 1;                       /* Создаём переменную */
Slide(slideIndex);
function plusSlides(p) {                  /* Создаём функцию */
    Slide(slideIndex += p);
}
function currentSlide(p) {                /* Создаём функцию */
    Slide(slideIndex = p);
}
function Slide(p) {                       /* Создаём функцию */
    var i;                                /* Создаём переменную */
    var slides = document.getElementsByClassName("mySlides");
    if (p > slides.length) {              /* Если p > slides.length, то slideIndex = 1 */
        slideIndex = 1
    }
    if (p < 1) {                          /* Если p < 1, то slideIndex=slides.length */
        slideIndex=slides.length
    }
    for (i = 0; i < slides.length; i++) {   /* Цикл повторяется  */
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
var timer = 0;                           /* С помощью оператора var */
makeTimer();                             /* Создаем интервал */
function makeTimer(){                    /* Создаём функцию */
    clearInterval(timer)                 /* Очистим интервал, это позволит прервать работу и отменить его перелистывание */
    timer = setInterval(function(){
      slideIndex++;
      Slide(slideIndex);
    },5000);                             /* Каждые 5 секунд будет исполняться функция */
}




var slideIndex = 1;                        /*  Слайдер маргарита */
SlideMargarita(slideIndex);
function plusSlidesMargarita(a) {
    SlideMargarita(slideIndex += a);
}
function currentSlide(a) {
    SlideMargarita(slideIndex = a);
}
function SlideMargarita(a) {
    var b;
    var slides = document.getElementsByClassName("slides_margarita");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер пепперони */
SlidePepperoni(slideIndex);
function plusSlidesPepperoni(a) {
    SlidePepperoni(slideIndex += a);
}
function currentSlide(a) {
    SlidePepperoni(slideIndex = a);
}
function SlidePepperoni(a) {
    var b;
    var slides = document.getElementsByClassName("slides_pepperoni");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер сицилийская */
SlideSicilian(slideIndex);
function plusSlidesSicilian(a) {
    SlideSicilian(slideIndex += a);
}
function currentSlide(a) {
    SlideSicilian(slideIndex = a);
}
function SlideSicilian(a) {
    var b;
    var slides = document.getElementsByClassName("slides_sicilian");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер четыре сыра */
SlideFourcheeses(slideIndex);
function plusSlidesFourcheeses(a) {
    SlideFourcheeses(slideIndex += a);
}
function currentSlide(a) {
    SlideFourcheeses(slideIndex = a);
}
function SlideFourcheeses(a) {
    var b;
    var slides = document.getElementsByClassName("slides_fourcheeses");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер сытная */
SlideSatisfying(slideIndex);
function plusSlidesSatisfying(a) {
    SlideSatisfying(slideIndex += a);
}
function currentSlide(a) {
    SlideSatisfying(slideIndex = a);
}
function SlideSatisfying(a) {
    var b;
    var slides = document.getElementsByClassName("slides_satisfying");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер ассорти */
SlideAssorted(slideIndex);
function plusSlidesAssorted(a) {
    SlideAssorted(slideIndex += a);
}
function currentSlide(a) {
    SlideAssorted(slideIndex = a);
}
function SlideAssorted(a) {
    var b;
    var slides = document.getElementsByClassName("slides_assorted");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер охотничья */
SlideHunting(slideIndex);
function plusSlidesHunting(a) {
    SlideHunting(slideIndex += a);
}
function currentSlide(a) {
    SlideHunting(slideIndex = a);
}
function SlideHunting(a) {
    var b;
    var slides = document.getElementsByClassName("slides_hunting");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер мясная */
SlideMeaty(slideIndex);
function plusSlidesMeaty(a) {
    SlideMeaty(slideIndex += a);
}
function currentSlide(a) {
    SlideMeaty(slideIndex = a);
}
function SlideMeaty(a) {
    var b;
    var slides = document.getElementsByClassName("slides_meaty");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var slideIndex = 1;                        /*  Слайдер вегетарианская */
SlideVegetarian(slideIndex);
function plusSlidesVegetarian(a) {
    SlideVegetarian(slideIndex += a);
}
function currentSlide(a) {
    SlideVegetarian(slideIndex = a);
}
function SlideVegetarian(a) {
    var b;
    var slides = document.getElementsByClassName("slides_vegetarian");
    if (a > slides.length) {
        slideIndex = 1
    }
    if (a < 1) {
        slideIndex=slides.length
    }
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}