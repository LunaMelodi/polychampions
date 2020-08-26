/**
 * Various scripts to support UI elements:
 *  - Script to hide the navbar while scrolling downward, but show it when
 * scrolling upward or at the top.
 *  - Script to add functionality to the page top button.
 */
var lastScroll = 0;
var navbar = document.getElementsByTagName('nav')[0];
var upbutton = document.getElementById('arrowTop');

window.addEventListener('scroll', function() {
    var currentScroll = document.body.scrollTop;
    if (currentScroll > lastScroll) {
        // We are scrolling down.
        navbar.style.transform = 'translate(0, -100%)';
    } else {
        // We are scrolling up.
        navbar.style.transform = 'translate(0, 0)';
    }
    lastScroll = currentScroll;
});
  
window.addEventListener('scroll', function() {
    /**
     * When the user scrolls down 20px from the top of the document,
     * show the button.
     */
    if (document.body.scrollTop > 20) {
        upbutton.style.display = 'block';
    } else {
        upbutton.style.display = 'none';
    }
});

function topFunction() {
    /**
     * When the user clicks on the button, scroll to the top of the document.
     */
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
