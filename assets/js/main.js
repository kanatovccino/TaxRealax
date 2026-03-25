//  HEADER ======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let isTicking = false;

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                // Включаем тень, если прокрутили ниже 100px
                if (window.scrollY > 200) {
                    header.classList.add('is-scrolled');
                } 
                // Выключаем тень, только если вернулись выше 80px
                else if (window.scrollY < 120) {
                    header.classList.remove('is-scrolled');
                }
                
                isTicking = false;
            });
            isTicking = true;
        }
    });
});

//  PRODUCTS ======================================================================
// Логика переключения табов в Product Suite
const tabs = document.querySelectorAll('.products__tab');
const panels = document.querySelectorAll('.products__panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Убираем активный класс у всех табов и панелей
        tabs.forEach(t => t.classList.remove('is-active'));
        panels.forEach(p => p.classList.remove('is-active'));

        // Добавляем активный класс нажатому табу
        tab.classList.add('is-active');

        // Ищем панель с ID, который записан в data-tab нажатой кнопки, и показываем её
        const targetPanelId = tab.getAttribute('data-tab');
        document.getElementById(targetPanelId).classList.add('is-active');
    });
});


//  FOUNDERS ======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.founder-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Если кликнули на уже активную - ничего не делаем
            if (card.classList.contains('is-active')) return;

            // Убираем класс у всех
            cards.forEach(c => c.classList.remove('is-active'));
            
            // Добавляем тому, на который кликнули
            card.classList.add('is-active');
        });
    });
});

//  FAQ ======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq__question');

        questionBtn.addEventListener('click', () => {
            // Проверяем, открыт ли тот, по которому кликнули
            const isActive = item.classList.contains('is-active');

            // Сначала убираем класс is-active у ВСЕХ элементов
            faqItems.forEach(faq => faq.classList.remove('is-active'));

            // Если он был закрыт, то открываем (добавляем класс)
            // Если был открыт, то он просто закроется (так как мы уже убрали классы у всех)
            if (!isActive) {
                item.classList.add('is-active');
            }
        });
    });
});