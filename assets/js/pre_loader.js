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
