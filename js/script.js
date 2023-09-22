


const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();



ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'nav--fixed', targets: '.max-header'},
});

$(window).scroll();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));