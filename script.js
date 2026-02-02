function addToCart(product) {
    alert(`${product} added to cart!`);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    // In a real site, you'd send this to a server
});
