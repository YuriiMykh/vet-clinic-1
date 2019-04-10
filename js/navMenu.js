const menuBtn = document.querySelector('.main-menu-logo input');
menuBtn.addEventListener('click', toogleMenuBtn);

const wrapMenu = document.querySelector('header .insert-menu');
let isBtnClicked = true;

function toogleMenuBtn(e) {

    if (isBtnClicked) {
        isBtnClicked = false;
        wrapMenu.innerHTML += ` 
            <ul class = "menu-inserted">
            <li><a href="#about-us">Про нас</a></li>
            <li><a href="#team"> Наша команда</a></li>
            <li><a href="#doctors-consultation"> Консультація</a></li>
            <li><a class="contacts" href="#contacts"> Контакти</a></li>
            </ul>`;
    }
    else {
        wrapMenu.innerHTML = '';
        isBtnClicked = true;
    }
}