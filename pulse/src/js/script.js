$(document).ready(function(){

    // Carousel

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

    // Catalog

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();                 // Отмена стандартного поведения браузера
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.subtitle_catalog').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    // Overlay close

    $('.overlay').on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        }
    });

    // Form validate

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 30
                },
                phone: {
                    required: true
                },
                email: {
                    required: true,
                    email: true,
                    maxlength: 50
                }
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format("Мин. кол-во символов {0}"),
                    maxlength: jQuery.validator.format("Макс. кол-во символов {0}")
                },
                phone: {
                    required: "Введите номер телефона"
                },
                email: {
                    required: "Введите электронную почту",
                    email: "Неправильно введён адрес почты",
                    maxlength: jQuery.validator.format("Макс. кол-во символов {0}")
                }
              }
        });
    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // Phone mask

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {                     // Прекращаем функцию, если форма не прошла валидацию
            return;
        }

        $.ajax({
            type: "POST",                           // Отдаёт данные
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();   // Скрыть
            $('.overlay, #thanks').fadeIn('slow');   // Показать
            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    // Animation

    new WOW().init();
});
