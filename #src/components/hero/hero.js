document.addEventListener('DOMContentLoaded', () => {
    const navLine = document.querySelector('.hero__menu-line'),
        navItem = document.querySelectorAll('.hero__menu-item');

    navLine.style.width = `${navItem[0].offsetWidth}px`;

    navItem.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            navLine.style.width = `${e.currentTarget.offsetWidth}px`;
            navLine.style.left = `${e.currentTarget.offsetLeft}px`;
        });

        el.addEventListener('mouseleave', () => {
            navLine.style.width = `${navItem[0].offsetWidth}px`;
            navLine.style.left = `0px`;
        });
    });
});