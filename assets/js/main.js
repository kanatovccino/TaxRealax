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