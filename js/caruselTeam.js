
//one doctor
const doctor1 = document.querySelector('main .team .personel .small-pic-personel .doctor1');
console.log(doctor1);
doctor1.addEventListener('click', doctorPicPressed);
//4 doctors
const doctors = document.querySelectorAll('main .team .personel .small-pic-personel>div');
doctors.forEach(doctor => doctor.addEventListener('click', doctorPicPressed));
const arrayDoctors = Array.from(doctors);

console.log(doctors);
function doctorPicPressed(e){
    e.preventDefault();
    
    console.log( e.target.className);
//   console.log(('c;ocked '+ e.target.className + ' clicked'));
    // switch(e.target.className){
        
    //     case 'doctor1': {
    //         alert(e.target.className + 'clicked')
    //         break;}
            
    //         // style.border-color = " #fff";
    // }
}