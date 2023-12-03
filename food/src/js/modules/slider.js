function slider() {
    
    // Slider

	const slider = document.querySelector('.offer__slider'),
    slidesWrapper = slider.querySelector('.offer__slider-wrapper'),
    slidesField = slidesWrapper.querySelector('.offer__slide-inner'),
    slides = slidesField.querySelectorAll('.offer__slide'),
    prev = slider.querySelector('.offer__slider-prev'),
    next = slider.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // Добавляем ноль в начало, чтобы было начальное число, не по шаблону HTML
	if (slides.length < 10) {
	    total.textContent = `0${slides.length}`;
	    current.textContent = `0${slideIndex}`;
	} else {
	    total.textContent = slides.length;
	    current.textContent = slideIndex;
	}

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),      // Создаём список для точек
        dotsArray = [];

    dots.classList.add('offer__slider-dots');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {       // Динамически создаём точки
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);   // Устанавливаем каждой точке data-атрибут и нумерацию
        dot.classList.add('offer__slider-dot');

        if (i === 0) {                              // Задаём начальную прозрачность первой точке
            dot.style.opacity = 1;
        }

        dots.append(dot);
        dotsArray.push(dot);
    }

    function dotsOpacity(arr) {
        arr.forEach(dot => dot.style.opacity = .5);
        arr[slideIndex - 1].style.opacity = 1;
    }

    function deleteNotDigits(str) {         // Функция удаляет НЕ ЧИСЛО, и из СТРОКИ преобразует в ЧИСЛОВОЙ тип данных
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {    // Можно и так: +width.slice(0, width.length - 2)
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        // Добавляем ноль в начало
        if (slideIndex < 10) {
		    current.textContent = `0${slideIndex}`;
		} else {
		    current.textContent = slideIndex;
		}

        dotsOpacity(dotsArray);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        // Добавляем ноль в начало
        if (slideIndex < 10) {
		    current.textContent = `0${slideIndex}`;
		} else {
		    current.textContent = slideIndex;
		}
        
        dotsOpacity(dotsArray);
    });

    dotsArray.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            // Добавляем ноль в начало
            if (slideIndex < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dotsOpacity(dotsArray);
        });
    });
}

export default slider;