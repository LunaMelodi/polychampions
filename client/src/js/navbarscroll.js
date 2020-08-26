/**
 * Script to hide the navbar while scrolling downward, but show it when
 * scrolling upward or at the top.
 */
var lastScroll = 0;
var navbar = document.getElementsByTagName('nav')[0];

window.onscroll = function() {
    var currentScroll = document.body.scrollTop;
    if (currentScroll > lastScroll) {
        // We are scrolling down.
        navbar.style.transform = 'translate(0, -100%)';
    } else {
        // We are scrolling up.
        navbar.style.transform = 'translate(0, 0)';
    }
    lastScroll = currentScroll;
}
