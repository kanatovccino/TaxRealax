//  HEADER ======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let isTicking = false;

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                // Включаем тень, если прокрутили ниже 100px
                if (window.scrollY > 220) {
                    header.classList.add('is-scrolled');
                } 
                // Выключаем тень, только если вернулись выше 80px
                else if (window.scrollY < 140) {
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

//  BLOGs ======================================================================
const showMoreBtn = document.getElementById('show-more-btn');
const moreBlogs = document.getElementById('more-blogs');

if (showMoreBtn && moreBlogs) {
    showMoreBtn.addEventListener('click', () => {
        moreBlogs.classList.remove('is-hidden'); // Показываем блоки
        showMoreBtn.style.display = 'none';      // Скрываем кнопку
    });
}

// PROGRESS-LINE=================================================================
(function () {
    const steps = Array.from(document.querySelectorAll('.progressLine__step'));
    const fill  = document.getElementById('progressFill');
    const track = document.querySelector('.progressLine__track');
 
    function getNodeCenter(step) {
      const node = step.querySelector('.progressLine__node');
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const nodeTop  = node.getBoundingClientRect().top  + window.scrollY;
      const nodeCenter = nodeTop + node.offsetHeight / 2;
      return nodeCenter - trackTop;
    }
 
    function update() {
      const vh = window.innerHeight;
      const trigger = vh * 0.55; // point in viewport that "activates" a step
 
      let lastActiveIdx = -1;
 
      steps.forEach((step, i) => {
        const node = step.querySelector('.progressLine__node');
        const rect = node.getBoundingClientRect();
        const nodeCenter = rect.top + rect.height / 2;
 
        if (nodeCenter <= trigger) {
          step.classList.add('is-active');
          lastActiveIdx = i;
        } else {
          step.classList.remove('is-active');
        }
      });
 
      // Update fill height
      if (lastActiveIdx >= 0) {
        const targetStep = steps[lastActiveIdx];
        const pct = getNodeCenter(targetStep);
        const trackH = track.offsetHeight;
        fill.style.height = Math.min(pct, trackH) + 'px';
      } else {
        fill.style.height = '0px';
      }
    }
 
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  })();

// CORP-TAB =================================================================
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.corpTab__tab');
  const contents = document.querySelectorAll('.corpTab__action');

  console.log('Табы найдены:', tabs.length); // Дебаг
  console.log('Контент найден:', contents.length); // Дебаг

  if (tabs.length === 0) {
    console.warn('⚠️ Табы с классом .corpTab__tab не найдены!');
    return;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      console.log('Нажата табка, data-tab:', target); // Дебаг

      const targetElement = document.getElementById(target);
      if (!targetElement) {
        console.warn(`⚠️ Элемент с id="${target}" не найден!`);
        return;
      }

      // 1. Убираем активный класс у всех табов
      tabs.forEach(t => t.classList.remove('is-active'));
      // 2. Скрываем весь контент
      contents.forEach(c => c.classList.remove('is-active'));

      // 3. Добавляем активный класс текущему табу
      tab.classList.add('is-active');
      // 4. Показываем нужный блок
      targetElement.classList.add('is-active');
    });
  });
});

// PRICING-HERO =================================================================
// Кинул внутрь html из-за конфликтов. Надо порешить позже.