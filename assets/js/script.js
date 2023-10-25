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
    $("header > nav").css("display" , "flex");
    $("header > nav > a").css("display" , "block");
    $("#navbar-mobile-icon").css("display" , "none");
    $("#navbar-close-icon").css("display" , "block");
    $("#navbar-bg").css("display" , "block");

});

$("#navbar-close-icon").on("click" , () => {
    $("header > nav").css("display" , "none");
    $("#navbar-close-icon").css("display" , "none");
    $("#navbar-mobile-icon").css("display" , "block");
    $("#navbar-bg").css("display" , "none");

});

    $(".mobile").on("click",()=> {
        $("#navbar-bg").css("display", "none");
        $("header > nav").css("display", "none");
        $("#navbar-mobile-icon").css("display" , "block");
        $("#navbar-close-icon").css("display" , "none");
    });



