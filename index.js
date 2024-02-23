window.onload = function() {
    ScrollReveal().reveal('.header', {duration: 200});

    //reveal instances & options for the images:
    ScrollReveal().reveal('#imgOne', {scale: 0.25});
    ScrollReveal().reveal('#imgTwo', {duration: 2000});
    ScrollReveal().reveal('#imgThree', {rotate: {x: 20, z: 20}});
    ScrollReveal().reveal('#imgFour', {delay: 1300});
    ScrollReveal().reveal('#imgFive', {distance: '50px', opacity: 0.1});
};
