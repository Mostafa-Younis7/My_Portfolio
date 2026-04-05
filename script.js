'use strict';
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// sections observer for all section
// when the section is intersected the viewport we do the following

const animateNavLink = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 1. remove active from all the links
            navLinks.forEach((link) => link.classList.remove('active'));
            // 2. add active to the nav link with the href="#idOfTheSectoinWe'reAt";
            document
                .querySelector(`.nav-link[href='#${entry.target.id}']`)
                .classList.add('active');
        }
    });
};
const sectionsObserver = new IntersectionObserver(animateNavLink, {
    root: null,
    threshold: 0.2,
});

sections.forEach((sec) => {
    sectionsObserver.observe(sec);
});
