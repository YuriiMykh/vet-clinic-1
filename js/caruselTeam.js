


const doctors = document.querySelectorAll('main .team .personel .small-pic-personel>div');
doctors.forEach(doctor => doctor.addEventListener('click', doctorPicPressed));
const arrayDoctors = Array.from(doctors);

const leftBtn = document.querySelector('main .team .personel .carusel .container-arrows .left-arrow');
const rightBtn = document.querySelector('main .team .personel .carusel .container-arrows .right-arrow');

leftBtn.addEventListener('click', leftBtnClicked);
rightBtn.addEventListener('click', rightBtnClicked);


let arrPersonel1 = [];
function convertingDatatoArr(data) {
    data.forEach(el => arrPersonel1.push(el));
}
//console.log(arrPersonel1[2].image);    
let arr = [];
fetch('doctors.json')
    .then(response => response.json())
    .then(data => convertingDatatoArr(data));


// console.log(arrPersonel);
// console.log(arrPersonel[3].name);


let arrPersonel = [{
        "id": "doctor1",
        "name": "Орест Калина",
        "title": "Головний лікар",
        "image": "img/team/orest_kalyna_circle.png",
        "description": "Засновник клініки. Професор. Закінчив Львівський державний університет ветеринарної медицини. Лікарську практику почав в 1972 році. Учасник багатьох міжнародних конференцій.",
        "className": 499.99
    },
    {
        "id": "doctor2",
        "name": "Інга Калина",
        "title": "Медсестра",
        "image": "img/team/inga_kalyna_cirlcle.png",
        "description": "Дочка Ореста Калини. Закінчила Львівський державний університет ветеринарної медицини. Стажувалася в Польщі та Румунії. Практикує з 2007 року.",
        "className": 499.99
    },
    {
        "id": "doctor3",
        "name": "Андрій Калина",
        "title": "Хірург",
        "image": "img/team/andrii_kalyna_circle.png",
        "description": "Син Ореста Калини. Закінчилв Львівський державний університет ветеринарної медицини. Стажувався в Польщі та Англії. Практикує з 2002 року. Має двох котів.",
        "className": 499.99
    },
    {
        "id": "doctor4",
        "name": "Павло Калина",
        "title": "Терапевт",
        "image": "img/team/pavlo_kalyna_circle.png",
        "description": "Син Ореста Калини. Закінчив Львівський державний університет ветеринарної медицини. Стажувався в США та Німеччині. Практикує з 2005 року.",
        "className": 499.99
    }
];
// let k ='' ;
// let i = '';
//  fetch('doctors.json')
//     .then( response => response.json())
//         // .then(arrPersonel => JSON.parse(this.response));
//     .then( data => { 

//          data.forEach(el => arrPersonel.push(el));


//         // });
//         // //return arrPersonel;
//          }
//         );

// console.log('after');

// console.log(arrPersonel.length);
// console.log(arrPersonel);
// //console.log(arrPersonel[0].id);

// console.log(Array.from(arrPersonel));
// console.log(arrPersonel[3].name);
// console.log(doctors);


// starting element
let previousEl = document.querySelector('main .team .personel .small-pic-personel .doctor1 img');
//elements for caruseling
let picture = document.querySelector('main .team .personel .carusel .container-arrows .professor img');
let name = document.querySelector('main .team .personel .carusel .personel-info h4');
let specialty = document.querySelector('main .team .personel .carusel .personel-info h5');
let text = document.querySelector('main .team .personel .personel-about-info p');
function doctorPicPressed(e) {
    e.preventDefault();

    console.log(e.target.parentNode.className);

    if (previousEl !== e.target) {
        
        for (let i = 0; i < arrPersonel.length; i++) {
            console.log('id '+arrPersonel[i].id)
            console.log(e.target.parentNode.className);
            if( arrPersonel[i].id == e.target.parentNode.className){
                console.log('Equal!');
                 picture.src = arrPersonel[i].image;
                 name.innerHTML = arrPersonel[i].name;
                 specialty.innerHTML = arrPersonel[i].title;
                 text.innerHTML = arrPersonel[i].description;
                 break;
            }
           
        }

        e.target.parentNode.style.borderColor = '#ffffff';
        previousEl.parentNode.style.borderColor = '#72bb53';
        previousEl = e.target;

    }
}
    // switch(e.target.parentNode.className){

    //     case 'doctor1': {
    //         e.target.parentNode.style.borderColor = '#ffffff';
    //         previousEl.parentNode.style.borderColor = '#72bb53';
    //         break;}
    //     case 'doctor2': {
    //         //alert(e.target.parentNode.className + ' clicked')
    //         break;}

    //     case 'doctor3': {
    //         //alert(e.target.parentNode.className + ' clicked')
    //         break;}
    //     case 'doctor4': {
    //         //alert(e.target.parentNode.className + ' clicked')
    //         break;}    
    //         // style.border-color = " #fff";

    // }
    //previousEl = e.target;




function leftBtnClicked(e) {
    e.preventDefault();
    console.log('left button clicked');


}

function rightBtnClicked(e) {
    e.preventDefault();
    console.log('right button clicked');


}