const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var isScroll = false;
var isClick = false;

var header = $("#header");
var menuBar = $(".menu__bar");
var navBar = $(".navbar");

window.addEventListener("scroll", function (){
    if(window.scrollY > 40){
        header.classList.add("headerAnimate");
        header.classList.remove("headerAnimate2");
        isScroll = true;
    }else{
        header.classList.remove("headerAnimate");
        header.classList.add("headerAnimate2");
        isScroll = false;
    }
});

menuBar.addEventListener("click", function (e) {
    $(".menu__bar span:first-child").classList.toggle("rotate25");
    $(".menu__bar span:nth-child(2)").classList.toggle("remove");
    $(".menu__bar span:last-child").classList.toggle("rotate_25");
    if(isScroll === false){
        header.classList.toggle("headerAnimate");
    }
    navBar.classList.toggle("navbarAnimate");
    isClick = true;
});