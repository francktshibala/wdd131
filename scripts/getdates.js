const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;