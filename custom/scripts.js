$(document).ready(function () {
    AOS.init({
        mirror: true,
    });
    $('[data-toggle="tooltip"]').tooltip();
    $("[data-toggle=popover]").popover({
        trigger: 'focus'
    })
});

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
