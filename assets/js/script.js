AOS.init();

// window.onload = () =>{
//     console.log("A");
//     $('#preloader').css("display","none");
// }

window.addEventListener ("load",() =>{
    console.log("A");
    $('#preloader').css("display","none");
});

document.addEventListener("DOMContentLoaded", () =>{
    console.log("B");
});

$(window).ready(() =>{
    console.log("C");
});


//*************** mobile nav bar ***********************

$("#navbar-mobile-icon").on("click" , () => {
    $("header > nav").addClass("show_flex");
    $("#navbar-mobile-icon").addClass("hide");
    $("#navbar-close-icon").addClass("show");
    $("#navbar-bg").addClass("show");

});

$("#navbar-close-icon").on("click" , () => {
    $("header > nav").removeClass("show_flex")
    $("#navbar-mobile-icon").removeClass("hide");
    $("#navbar-close-icon").removeClass("show");
    $("#navbar-bg").removeClass("show");

});

$("nav > a").on("click" , () => {
    $("#navbar-close-icon").click();

});

// $(".mobile").on("click", () => {
//     if (window.matchMedia("(max-width: 500px)").matches) {
//         $("#navbar-bg").css("display", "none");
//         $("header > nav").css("display", "none");
//         $("#navbar-mobile-icon").css("display", "block");
//         $("#navbar-close-icon").css("display", "none");
//     }
// });

// $(".mobile").on("click", () => {
//     if (window.matchMedia("(max-width: 600px)").matches) {
//         $("#navbar-mobile-icon").css("display", "none");
//         $("#navbar-close-icon").css("display", "none");
//     }
// });


