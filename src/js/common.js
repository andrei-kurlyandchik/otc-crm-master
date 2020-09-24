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

    $('.b--close-dropdown').on('click', function (e){
        e.preventDefault();
        $(this).closest('.dropdown').removeClass('active');
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
        currentPopup.bPopup({
            scrollBar: false,
        });
    })

    setTimeout(function (){
        $('#passwordChanged').bPopup();
    }, 1000)

    $('.form__select').selectric();

    $('.form__select--leng').selectric({
        optionsItemBuilder: function(itemData) {
            return itemData.value.length ? '<img class="icon icon--flag" src="img/flags/' + itemData.value +  '.svg">' + itemData.text : itemData.text;
        },
        labelBuilder: function(currItem) {
            return (currItem.value.length ? '<img class="icon icon--flag" src="img/flags/' + currItem.value +  '.svg">' : '') + currItem.text;
        }
    });

    $('.form__select--valid').selectric({
        optionsItemBuilder: function(itemData) {
            return itemData.value.length ? '<img class="icon icon--valid" src="img/' + itemData.value +  '.svg">' + itemData.text : itemData.text;
        },
        labelBuilder: function(currItem) {
            return (currItem.value.length ? '<img class="icon icon--valid" src="img/' + currItem.value +  '.svg">' : '') + currItem.text;
        }
    });

    $('.form__select--color').selectric({
        optionsItemBuilder: function(itemData) {
            return itemData.value.length ? '<span class="' + itemData.value +  '"></span>' + itemData.text : itemData.text;
        },
        labelBuilder: function(currItem) {
            return (currItem.value.length ? '<span class="' + currItem.value +  '"></span>' : '') + currItem.text;
        }
    });

    $('.form__select--tag').selectric();

    $('.add-tag').click(function() {
        // Store the value in a variable
        let value = $('.input-add-tag').val();

        // Append to original select
        $('.form__select--tag').append('<option>' + (value ? value : 'Empty') + '</option>');

        // Refresh Selectric
        $('.form__select--tag').selectric('refresh');
    });

    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
}());



