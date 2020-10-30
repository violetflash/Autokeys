//TABS
let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_content = tab.querySelectorAll('._tabs-content');
    for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.addEventListener('click', function (e) {
            for (let i = 0; i < tabs_items.length; i++) {
                let tabs_item = tabs_items[i];
                tabs_item.classList.remove('_active');
                tabs_content[i].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_content[i].classList.add('_active');
            e.preventDefault();
        });
    }
}

//TABS
/*
let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_content = tab.querySelectorAll('._tabs-content');
    let auto = document.querySelector('._auto');
    let moto = document.querySelector('._moto');
    let tabSlider = document.querySelector('.filter__tab-slider');
    for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.addEventListener('click', function (e) {
            for (let i = 0; i < tabs_items.length; i++) {
                let tabs_item = tabs_items[i];
                tabs_item.classList.remove('_active');
                tabs_content[i].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_content[i].classList.add('_active');
            e.preventDefault();
            if (auto.classList.contains('_active')) {
                tabSlider.classList.remove('_active')
            } else {
                tabSlider.classList.add('_active')
            }
        });
    }
}
*/