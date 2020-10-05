$(function () {

    $('.header-menu__btn').on('click', function () {
        $('.header__menu').addClass('menu-active');
    });

    $('.menu-btn__close').on('click', function () {
        $('.header__menu').removeClass('menu-active');
    });

    $('.top-slider__inner').slick({
        dots: true,
        infinite: false,
        nextArrow: '<button class="slider-btn slider-btn__left"><svg width="11" height="17" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9.74852 9.26017C9.82292 9.19416 9.8655 9.09946 9.8655 9C9.8655 8.90054 9.82292 8.80584 9.74852 8.73983L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button class="slider-btn slider-btn__right"><svg width="11" height="17" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L1.25148 9.26017C1.17708 9.19416 1.1345 9.09946 1.1345 9C1.1345 8.90054 1.17708 8.80584 1.25148 8.73983L10 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });


    $('.reviews__slider').slick({
        dots: true,
        infinite: false,
        nextArrow: '<button class="slider-btn slider-btn__left"><svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.43359 33L18.9306 17.5203C19.0794 17.3883 19.1646 17.1989 19.1646 17C19.1646 16.8011 19.0794 16.6117 18.9306 16.4797L1.43359 1" stroke="#3A3A3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button class="slider-btn slider-btn__right"><svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.731 33L1.23391 17.5203C1.08512 17.3883 0.999964 17.1989 0.999964 17C0.999964 16.8011 1.08512 16.6117 1.23391 16.4797L18.731 1" stroke="#3A3A3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

    $('.ourprojects__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button class="slider-btn slider-btn__left"><svg width="14" height="24" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.43359 33L18.9306 17.5203C19.0794 17.3883 19.1646 17.1989 19.1646 17C19.1646 16.8011 19.0794 16.6117 18.9306 16.4797L1.43359 1" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button class="slider-btn slider-btn__right"><svg width="14" height="24" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.731 33L1.23391 17.5203C1.08512 17.3883 0.999964 17.1989 0.999964 17C0.999964 16.8011 1.08512 16.6117 1.23391 16.4797L18.731 1" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

    $('.ourprojects__slider').on(`init reInit`, function (event, slick) {
        $('.slides-numbers').text(1 + ' | ' + slick.slideCount);
    });

    $('.ourprojects__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slides-numbers').text(currentSlide + 1 + ' | ' + slick.slideCount);
    });


});