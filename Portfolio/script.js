scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-cont, .heading', {origin: 'top'});
scrollReveal().reveal('.home-img, .services-cont, .project-BaseAudioContext, .contact Form', {origin: 'bottom'});
scrollReveal().reveal('home-cont h1, .about-img', {origin: 'left'});
scrollReveal().reveal('home-cont p, .about-cont', {origin: 'right'});