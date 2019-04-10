
//one doctor
// const doctor1 = document.querySelector('main .team .personel .small-pic-personel .doctor1');
// console.log(doctor1);
// doctor1.addEventListener('click', doctorPicPressed);
// //4 doctors
const doctors = document.querySelectorAll('main .team .personel .small-pic-personel>div');
doctors.forEach(doctor => doctor.addEventListener('click', doctorPicPressed));
const arrayDoctors = Array.from(doctors);

console.log(doctors);
function doctorPicPressed(e){
    e.preventDefault();
    
    console.log( e.target.parentNode.className);
   
    switch(e.target.parentNode.className){
        
        case 'doctor1': {
            //e.target.parentNode.style.border-color = " #fff";
            e.target.parentNode.style.borderColor = '#000000';
            break;}
        case 'doctor2': {
            //alert(e.target.parentNode.className + ' clicked')
            break;}
            
        case 'doctor3': {
            //alert(e.target.parentNode.className + ' clicked')
            break;}
        case 'doctor4': {
            //alert(e.target.parentNode.className + ' clicked')
            break;}    
            // style.border-color = " #fff";
    }
}