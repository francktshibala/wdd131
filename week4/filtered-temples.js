
 
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Kinshasa Democratic Republic of the Congo Temple",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 12",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/01-Kinshasa-DRCongo-Temple-2208932.jpg"
    },
    
    {
        templeName: "Sapporo Japan Temple",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    },

    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },


  ];


  createTempleCard();

function createTempleCard() {
 temples.forEach(temple => {
   let card = document.createElement("section");
   let name = document.createElement("h3");
   let location = document.createElement("p");
   let dedication = document.createElement("p");
   let area = document.createElement("p");
   let img = document.createElement("img");

   name.textContent = temple.templeName;
   location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
   dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
   area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
   img.setAttribute("src", `${temple.imageUrl}`);
   img.setAttribute("alt", `${temple.templeName} Temple`);
   img.setAttribute("loading", "lazy");

   card.appendChild(name);
   card.appendChild(location);
   card.appendChild(dedication);
   card.appendChild(area);
   card.appendChild(img);

   document.querySelector(".temple-cards-container").appendChild(card);
 });
}

function filterTemples(criteria) {
 let filteredTemples = [];
 switch (criteria) {
   case 'Old':
     filteredTemples = temples.filter(temple => getDedicationYear(temple.dedicated) < 1900);
     break;
   case 'New':
     filteredTemples = temples.filter(temple => getDedicationYear(temple.dedicated) > 2000);
     break;
   case 'Large':
     filteredTemples = temples.filter(temple => temple.area > 90000);
     break;
   case 'Small':
     filteredTemples = temples.filter(temple => temple.area < 10000);
     break;
   default:
     filteredTemples = temples;
 }
 return filteredTemples;
}

function getDedicationYear(dedicationString) {
 const parts = dedicationString.split(',');
 return parseInt(parts[1].trim());
}

function displayTemples(templeList) {
 const templeContainer = document.getElementById('temple-container');
 templeContainer.innerHTML = '';

 templeList.forEach(temple => {
   const templeElement = document.createElement('div');
   templeElement.textContent = `${temple.templeName} - Built in ${getDedicationYear(temple.dedicated)} - Size: ${temple.area} sq ft`;
   templeContainer.appendChild(templeElement);
 });
}

document.getElementById('.oldLink').addEventListener('click', () => {
 const filteredTemples = filterTemples('Old');
 displayTemples(filteredTemples);
});

document.getElementById('.newLink').addEventListener('click', () => {
 const filteredTemples = filterTemples('New');
 displayTemples(filteredTemples);
});

document.getElementById('.largeLink').addEventListener('click', () => {
 const filteredTemples = filterTemples('Large');
 displayTemples(filteredTemples);
});

document.getElementById('.smallLink').addEventListener('click', () => {
 const filteredTemples = filterTemples('Small');
 displayTemples(filteredTemples);
});

document.getElementById('.homeLink').addEventListener('click', () => {
 displayTemples(temples);
});

// Hamburger Menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// DATE AND TIME 

const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

  
 

  

  