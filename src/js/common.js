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
    $('.form__select--phone').selectric({
        optionsItemBuilder: function(itemData) {
            return itemData.value.length ? '<span class="phone-select"><img class="icon icon--phone-select" src="img/' + itemData.value +  '.svg"></span>' + itemData.text : itemData.text;
        },
        labelBuilder: function(currItem) {
            return (currItem.value.length ? '<span class="phone-select"><img class="icon icon--phone-select" src="img/' + currItem.value +  '.svg"></span>' : '') + currItem.text;
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
        let numberTab = $(this).index();

        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");

        if (numberTab == 2) {
            $('.orders-tabs').addClass("active-table");
        } else {
            $('.orders-tabs').removeClass("active-table");
        }
    });

    jQuery.fn.extend({
        toggleText: function (a, b){
            var isClicked = false;
            var that = this;
            this.click(function (){
                if (isClicked) { that.text(a); isClicked = false; }
                else { that.text(b); isClicked = true; }
            });
            return this;
        }
    });

    $('.btn-filter-tags').on('click', function (e){
        e.preventDefault();
        $('.call-type-list').hide();
    });

    $('.btn-calls-filters-show').on('click', function (e){
        e.preventDefault();
        $(this).toggleClass('clicked');
        if ( $(this).hasClass("clicked") ) {
            $(this).text("Hide filters");
        }
        else {
            $(this).text("Show filters");
        }
        $('.calls-filters-list__orders').toggleClass('show');

    });

    $('.btn-filter-show').on('click', function (e){
        e.preventDefault();
        $(this).toggleClass('clicked');
        if ( $(this).hasClass("clicked") ) {
            $(this).text("Hide filters");
        }
        else {
            $(this).text("Show filters");
        }
        $('.calls-filters-extended').toggleClass('show');

    });

    ;( function( $, window, document, undefined )
    {
        $( '.inputfile' ).each( function()
        {
            let $input = $(this),
                $label = $input.next('label'),
                labelVal = $label.html();

            $input.on( 'change', function( e )
            {
                let fileName = '';

                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else if( e.target.value )
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    $label.html( fileName );
                else
                    $label.html( labelVal );
            });

            // Firefox bug fix
            $input
                .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
                .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
        });
    })( jQuery, window, document );

}());



