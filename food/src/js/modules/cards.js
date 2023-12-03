function cards() {

    // Cards

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) { // '...' - в будущем добавит столько КЛАССЫ
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes; // Возвращается - []
			this.parent = document.querySelector(parentSelector);       // Передача HTML кода в РОДИТЕЛЯ
			this.transfer = Math.round(95.76);      // Статический курс валют
			this.changeToRUB();                     // Функция после выполнения вернёт изменённый 'price'
		}

		// Конвертация валют
		changeToRUB() {
			this.price = +this.price * this.transfer;
		}

		render() {  // Присваиваем .menu__item - div
			const element = document.createElement('div');

			// Решаем проблему, если программист забыл добавить КЛАСС 'menu__item'
			if (this.classes.length === 0) {
				this.element = 'menu__item';    // Сразу заполним пустой МАССИВ, т.к. вдруг в будущем понадобится этот КЛАСС
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className)); // Добавляем остаток КЛАССОВ к ЭЛЕМЕНТУ
			}

			element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
			this.parent.append(element);
		}
	}

	const getResourse = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {      // .ok - свойство в Response
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);   // Выкидываем новую ОШИБКУ
		}

		return await res.json();
	};

	// Получение карточек с сервера
	getResourse('http://localhost:3000/menu')
		.then(data => {                     // Данные которые придут с сервера в трансформированном виде
			data.forEach(({img, altimg, title, descr, price}) => {      // Деструктуризация ОБЪЕКТА по частям
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});                             // ОБЪЕКТЫ будут создаваться столько раз, сколько их лежит в МАССИВЕ на сервере
		});
}

export default cards;