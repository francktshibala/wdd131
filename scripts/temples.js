


// DATE AND TIME 
// 
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;
//  Hamburger Menu 

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('.close-icon').classList.toggle('show');
});
 
 
