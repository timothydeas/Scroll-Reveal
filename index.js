window.onload = function() {
    ScrollReveal().reveal('.header', {duration: 300});

    //reveal instances & options for the images:
    ScrollReveal().reveal('#imgOne', {duration: 800});
    ScrollReveal().reveal('#imgTwo', {scale: 0.25});
    ScrollReveal().reveal('#imgThree', {rotate: {x: 20, z: 20}});
    ScrollReveal().reveal('#imgFour', {distance: '50px', opacity: 0.1});
    ScrollReveal().reveal('#imgFive', {delay: 1300});
};
