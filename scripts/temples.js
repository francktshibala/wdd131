//  Hamburger Menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// DATE AND TIME 
// 
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

 
