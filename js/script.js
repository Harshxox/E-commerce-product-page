$(document).ready(function() {
    // Product Image Gallery functionality (used on product-detail.html)
    $('.thumbnail-images img').on('click', function() {
        // Remove active class from all thumbnails
        $('.thumbnail-images img').removeClass('active');

        // Add active class to the clicked thumbnail
        $(this).addClass('active');

        // Change the main product image
        $('#mainProductImage').attr('src', $(this).attr('src'));
    });

    // Add to Cart button functionality (example)
    $('.add-to-cart-btn').on('click', function() {
        const quantity = $('#quantity').val() || 1; // Default to 1 for card buttons
        const productName = $('.product-title').first().text();
        alert(`Added ${quantity} of "${productName}" to cart!`);
    });

    // Buy Now button functionality (example)
    $('.buy-now-btn').on('click', function() {
        const quantity = $('#quantity').val();
        const productName = $('.product-title').first().text();
        alert(`Proceeding to checkout with ${quantity} of "${productName}"!`);
    });

    // Simple jQuery validation/confirmation for the contact form
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you at ' + $('#email').val() + ' shortly.');
        this.reset();
    });
});