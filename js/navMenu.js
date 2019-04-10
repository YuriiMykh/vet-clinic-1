
const menuBtn = document.querySelector('.main-menu-logo input');
menuBtn.addEventListener('click', toogleMenuBtn);

const wrapMenu = document.querySelector('header .insert-menu');
let isBtnClicked = false;

function toogleMenuBtn(e) {
   
  const menu = document.querySelector('header nav .menu');

     if (menu.className === "menu") {
//   if(isBtnClicked) { 
    menu.className += " responsive";
    wrapMenu.innerHTML += ` 
    <ul class = "menu-inserted">
        <li><a href="#about-us">Про нас</a></li>
        <li><a href="#team"> Наша команда</a></li>
        <li><a href="#doctors-consultation"> Консультація</a></li>
        <li><a class="contacts" href="#contacts"> Контакти</a></li>
    </ul>`;
    
  } else {
    menu.className = "menu";
    wrapMenu.innerHTML ='';
  }
 }