function tabs() {

    // Tabs

	const tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabs = tabsParent.querySelectorAll('.tabheader__item');

    function hideTabContent() {                         // Скрываем табы
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');                 // toggle не используем т.к. будет каша при переключении
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {                    // В стандарте ES6, i можно присвоить 0
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;