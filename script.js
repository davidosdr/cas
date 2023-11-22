$(document).ready(function() {
 let currentIndex = 0;
 const slides = $('.slide');
 const slideInterval = 3000; // Change image every 3 seconds

 // Initialze slide
 slides.eq(currentIndex).css('opacity', '1');

 // Change slide every 3 seconds
 setInterval(function() {
    slides.eq(currentIndex).css('opacity', '0');
    currentIndex = (currentIndex + 1) % slides.length;
    slides.eq(currentIndex).css('opacity', '1');
 }, slideInterval);
});