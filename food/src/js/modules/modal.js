// Открытие окна
function openModal(modalSelector, modalTimerId, showModalByScroll) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';                    // Чтобы не прокручивалась страница

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);  // Если пользователь сам открыл окно, то удаляем таймер, чтобы оно не вылазило повторно
    }

    window.removeEventListener('scroll', showModalByScroll);
}

// Закрытие окна
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';          // Можно оставить кавычки, т.к. браузер сам определит нужное значение
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    
    // Modal

	const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    // Закрытие окна по тёмной части
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.hasAttribute('data-close')) {
            closeModal(modalSelector);
        }
    });

    // Если пользователь дошёл до конца страницы, открываем модальное окно
    function showModalByScroll() {

        // Используем scrollY вместо pageYOffset, т.к. это свойство устарело и успользуется только для старых браузеров

        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);        // Удалим обработчик события после выполнения
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // Закрытие окна с помощью esc
    document.addEventListener('keydown', (e) => {                           // Нажатие клавиши
        if (e.code === 'Escape' && !modal.classList.contains('hide')) {     // Находим event.code клавиши Escape
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {openModal, closeModal};
