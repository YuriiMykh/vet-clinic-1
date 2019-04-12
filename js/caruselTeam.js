const doctors = document.querySelectorAll('main .team .personel .small-pic-personel>div');
doctors.forEach(doctor => doctor.addEventListener('click', doctorPicPressed));
const arrayDoctors = Array.from(doctors);

let arrPersonel = [{
        "id": "doctor1",
        "name": "Орест Калина",
        "title": "Головний лікар",
        "image": "img/team/orest_kalyna_circle.png",
        "description": "Засновник клініки. Професор. Закінчив Львівський державний університет ветеринарної медицини. Лікарську практику почав в 1972 році. Учасник багатьох міжнародних конференцій."
    },
    {
        "id": "doctor2",
        "name": "Інга Калина",
        "title": "Медсестра",
        "image": "img/team/inga_kalyna_circle.png",
        "description": "Дочка Ореста Калини. Закінчила Львівський державний університет ветеринарної медицини. Стажувалася в Польщі та Румунії. Практикує з 2007 року."
    },
    {
        "id": "doctor3",
        "name": "Андрій Калина",
        "title": "Хірург",
        "image": "img/team/andrii_kalyna_circle.png",
        "description": "Син Ореста Калини. Закінчилв Львівський державний університет ветеринарної медицини. Стажувався в Польщі та Англії. Практикує з 2002 року. Має двох котів."
    },
    {
        "id": "doctor4",
        "name": "Павло Калина",
        "title": "Терапевт",
        "image": "img/team/pavlo_kalyna_circle.png",
        "description": "Син Ореста Калини. Закінчив Львівський державний університет ветеринарної медицини. Стажувався в США та Німеччині. Практикує з 2005 року."
    }
];

// starting element
let slideIndex = 1;
showSlides(slideIndex);

function doctorPicPressed(e) {
    e.preventDefault();
    let previousEl = document.querySelector('main .team .personel .small-pic-personel .doctor.active img');
    // console.log(e.target.parentNode.className);
    console.log("index " + slideIndex);
    if (previousEl !== e.target) {
        // console.log( "previousEl !== e.target");
        // console.log( "previousEl " + previousEl.parentNode.className );

        //finding index
        const strArr = e.target.parentNode.className.split(" ");
        //last char in strArr
        slideIndex = parseInt(strArr[1].charAt(strArr[1].length - 1));

        console.log(strArr);
        console.log(strArr[1].charAt(strArr[1].length - 1));

        e.target.parentNode.className += " active";
        //removing word 'active' from classname
        previousEl.parentNode.className = previousEl.parentNode.className.replace(" active", "");
        console.log("doctorPicPressed(e) index " + slideIndex);
        showSlides(slideIndex);
    }
}

function btnClicked(n) {
    // e.preventDefault();
    console.log('left button clicked');
    showSlides(slideIndex += n);
}


//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {

    const doctors = document.querySelectorAll('main .team .personel .carusel .container-arrows .doc');
    const text = document.querySelectorAll('main .team .personel .carusel .personel-about-info');
    const smallPicDoctors = document.querySelectorAll('main .team .personel .small-pic-personel .doctor');
    console.log("showSlides() index " + n);
    //   console.log(smallPicDoctors)
    //  console.log(smallPicDoctors.length);
    //   console.log(doctors.length);
    //   console.log(doctors);

    if (n > doctors.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = doctors.length;
    }

    for (let i = 0; i < doctors.length; i++) {
        //removing " active" from element className
        doctors[i].className = "doc";
        text[i].className = "personel-about-info";
        smallPicDoctors[i].className = "doctor doctor" + (i + 1);
    }
    //adding " active" to element className
    doctors[slideIndex - 1].className += " active";
    text[slideIndex - 1].className += " active";
    smallPicDoctors[slideIndex - 1].className += " active";
    
    //setTimeout(showSlides, 2000, );
    
}