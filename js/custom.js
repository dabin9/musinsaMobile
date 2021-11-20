$(function () {
    $('header .logo').click(function () {
        if ($('body, .brandall').hasClass('on')) {
            $('body, .brandall').removeClass('on');
        } else {
            $('body, .brandall').addClass('on');
        }
    });

    $('header .logo').click(function () {
        if ($('header .logo::after').hasClass('on')) {
            $('header .logo::after').removeClass('on');
        } else {
            $('header .logo::after').addClass('on');
        }
    });

    $('.top_btn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('.top_btn').removeClass('on');
    })



    $(function () {
        $('.main_vis .main_tab li').click(function () {
            $('.main_vis .main_tab li').removeClass('on');
            $(this).addClass('on');
            idx = $(this).index() + 1;
            $('.main_box .main').removeClass('on');
            $('.main_box .con' + idx).addClass('on');
        })
    })

    var swiper = new Swiper(".main_slide", {
        slidesPerView: 1,
        clickable: true,
        pagination: {
            el: ".main_con",
            clickable: true,
            type: "fraction",
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });


    var swiper = new Swiper(".home_slide", {
        slidesPerView: "auto",
        clickable: true,
        spaceBetween: 15,
    });

    var swiper = new Swiper(".pop_slide", {
        slidesPerView: 2,
        clickable: true,
        spaceBetween: 15,
        scrollbar: {
            el: ".pop_scroll",
            hide: true,
        },
    });
    var swiper = new Swiper(".coll_slide", {
        slidesPerView: 3,
        clickable: true,
        spaceBetween: 15,
    });


    $(function () {
        $('.new_area .new_tab li').click(function () {
            $('.new_area .new_tab li').removeClass('on');
            $(this).addClass('on');
            idx = $(this).index() + 1;
            $('.all_tab .new').removeClass('on');
            $('.all_tab .con' + idx).addClass('on');
        })
    })




















































})