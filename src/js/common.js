(function () {
    'use strict';

    $('.dropdown-active').on('click', function (e){
        e.preventDefault();
        $(this).closest('.dropdown').toggleClass('active');
    })

    $('.toggle-check').on('click', function (e){
        e.preventDefault();
        $(this).toggleClass('active-check');
    })

    $('body').on('click', function (e){
        if($(e.target).closest('.dropdown').length != 0) return false;
        $('.dropdown').removeClass('active');
    })

    $('.date__inp').datetimepicker({
        format:'m/d/y H:i',
        formatTime:'H:i',
        formatDate:'m/d/y',
    })

    $('.js-show-popup').on('click', function (e){
        e.preventDefault();
        let href = $(this).attr('href');
        let currentPopup = $('body').find(href);
        currentPopup.bPopup();
    })

    setTimeout(function (){
        $('#passwordChanged').bPopup();
    }, 1000)

    $('.form__select').selectric();

}());



