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