window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
function vdLiClean() {
    for (var i = 1; i <= 2; i++) {
        document.getElementById('vdConLi' + i).classList.remove('videoBorder');
    }
}

var vdio1 = document.getElementById('vdConLi1');
var vdio2 = document.getElementById('vdConLi2');

function LiBorder1(a) {
    vdLiClean();
    vdio1.classList.add('videoBorder');
    document.getElementsByTagName('video')[0].src = a;
}

function LiBorder2(b) {
    vdLiClean();
    vdio2.classList.add('videoBorder');
    document.getElementsByTagName('video')[0].src = b;
}

var menuContent = document.getElementById('navRightMenu');
function show() {

    menuContent.style.display = "block";
}

function hid() {
    menuContent.style.display = "none";
}