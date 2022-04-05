window.addEventListener('DOMContentLoaded', () => {

    const tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'),
          tab = document.querySelectorAll('.tabheader__item');

    function hidetabscontent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        
        tab.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showtabscontent(i) {
        tabsContent[i].style.display = 'block';
        tab[i].classList.add('tabheader__item_active');
    }

    hidetabscontent();
    showtabscontent(0);
});

