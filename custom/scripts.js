$(document).ready(function () {
    AOS.init({
        mirror: true,
    });
    $('.fancybox').fancybox();
    $('[data-toggle="tooltip"]').tooltip();
    $("[data-toggle=popover]").popover({
        trigger: 'focus'
    })

});

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
// $(window).on("scroll", function () {
//     if ($(window).scrollTop() >= 200) {
//         $("#nav-index").addClass("compressed");
//     } else {
//         $("#nav-index").removeClass("compressed");
//     }
// });