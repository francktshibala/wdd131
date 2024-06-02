
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const form = document.getElementById('product-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectedProduct = document.querySelector('input[name="product"]:checked');

    if (selectedProduct) {
        const productValue = selectedProduct.value;
        alert(`Congratulations ${name} for selecting ${productValue}! You have successfully joined our newsletter`);
    } else {
        alert('Please select a product.');
    }
});
