import { openModal, closeModal } from './modal';

function forms() {
    
    // Реализация скрипта отправки данных на сервер

	// Forms

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'icons/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {      // await пропустит код дальше, только после того как 'fetch' завершит свою работу
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();      // С помощью 'await' превращаем АСИНХРОННЫЙ код в СИННХРОННЫЙ
	};

	function bindPostData(form) {       // Привязать постинг данных
		form.addEventListener('submit', (e) => {
			e.preventDefault();     // Чтобы страница не перезагружалась при отправке данных

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;      // Ещё можно использовать: setAttribute
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			form.insertAdjacentElement('afterend', statusMessage);

			// Для отправки данных на сервер через FormData, у тега 'input' всегда должен присутствовать атрибут 'name'
			const formData = new FormData(form);

			// Более элегантный способ трансформации FormData в JSON формат
			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then(data => {                        // Отслеживаем статус при помощи Promise
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();           // .reset() - метод сброса Form // Также можно очистить с помощью input.value
				});
		});
	}
	

	// Оповещение пользователя

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();    // Метод отвечает за открытие модальных окон

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}
}

export default forms;