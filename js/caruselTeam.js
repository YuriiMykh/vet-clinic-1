
//one doctor
// const doctor1 = document.querySelector('main .team .personel .small-pic-personel .doctor1');
// console.log(doctor1);
// doctor1.addEventListener('click', doctorPicPressed);
// //4 doctors
const doctors = document.querySelectorAll('main .team .personel .small-pic-personel>div');
doctors.forEach(doctor => doctor.addEventListener('click', doctorPicPressed));
const arrayDoctors = Array.from(doctors);

// starting element
let previousEl = document.querySelector('main .team .personel .small-pic-personel .doctor1 img'); 

console.log(doctors);
function doctorPicPressed(e){
    e.preventDefault();
    
    if(previousEl !== e.target){
    e.target.parentNode.style.borderColor = '#ffffff';
    previousEl.parentNode.style.borderColor = '#72bb53';
    previousEl = e.target;
        
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
    
}