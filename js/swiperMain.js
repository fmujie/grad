var audio = document.getElementById('music');
console.log(audio);
audio.pause();
var swiper = new Swiper('.swiper-container', {

    on: {
        slideChangeTransitionEnd: function () {
            for (var i = 1; i <= 4; i++) {
                document.getElementById('Li' + i).classList.remove('navDivStyle');
            }
            console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            var navFist = document.getElementById('Li1');
            var navSecond = document.getElementById('Li2');
            var navThird = document.getElementById('Li3');
            var navFourth = document.getElementById('Li4');
            var audio = document.getElementById('music');
            switch (this.activeIndex) {
                case 1:
                    navFist.classList.add('navDivStyle');
                    audio.pause();
                    break;
                case 2:
                    navSecond.classList.add('navDivStyle');
                    audio.play();
                    break;
                case 3:
                    navThird.classList.add('navDivStyle');
                    audio.pause();
                    break;
                case 4:
                    navFourth.classList.add('navDivStyle');
                    audio.pause();
                    break;
            }
        },
    },
    observer: true,
    observeSlideChildren: true,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',//分页
        clickable: true,

    },
});

$('#To2').click(function () {

    swiper.slideTo(1, 1000, false); //切换到第二个slide，速度为1秒
    audio.pause();
})
$('#To3').click(function () {

    swiper.slideTo(2, 1000, false); //切换到第三个slide，速度为1秒
    audio.play();
})
$('#To4').click(function () {

    swiper.slideTo(3, 1000, false); //切换到第四个slide，速度为1秒
    audio.pause();
})
$('#To5').click(function () {

    swiper.slideTo(4, 1000, false); //切换到第五个slide，速度为1秒
    audio.pause();
})