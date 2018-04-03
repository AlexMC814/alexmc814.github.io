$(document).ready(function() {
    svg4everybody({});

// Main navigation active
$('.main-navigation__link').on('click', function() {
    //$('.main-navigation__item').removeClass('active');
    $(this).addClass('active');
});

    // index page owl carousel stories slider
$('.js-stories-carousel').owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    slideBy: 1,
    margin: 25,
    loop: true,
    navText: [
        '<svg class="icon icon-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href ="static/img/svg/symbol/sprite.svg#left"></use></svg>',
        '<svg class="icon icon-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href ="static/img/svg/symbol/sprite.svg#right"></use></svg>'
    ],
    dotsEach: true,
    responsiveClass : true,
    responsive: {
        // breakpoint from 0 up
        0: {
            items : 1
        },
        // breakpoint from 600 up
        600: {
            items: 1
        },
        // breakpoint from 900 up
        768: {
            items: 2
        },
        // breakpoint from 1200 up
        1200: {
            items: 3,
            margin: 30
        },
        1340: {
            margin: 25
        }
    }
});

// Smooth nav scroll + scroll spy function
function smoothScroll(trigger) {
        var sections = [];
        var id = false;
        var link = $(trigger);

        link.click(function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target)
                    .offset()
                    .top
            }, 500, 'easeInSine')
        });

        // push each section id into the sections array
        link.each(function () {
            sections.push($($(this).attr('href')));
        });

        //
        $(window).scroll(function (e) {
            var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
            for (var i in sections) {
                var section = sections[i];
                if (scrollTop > section.offset().top) {
                    scrolled_id = section.attr('id');
                }
            }
            if (scrolled_id !== id) {
                id = scrolled_id;
                $(trigger).removeClass('navigation__link--active');
                $(trigger + '[href="#' + id + '"]').addClass('navigation__link--active');
            }
        });
    }
    smoothScroll('.navigation__link');



// Tours Filter
var toursFilter = $('.js-tours-filter-container').isotope({
    itemSelector: '.tours-filter-item',
    layoutMode: 'fitRows'
});
$('.js-tours-filter-btns').on('click', '.tours-filter__btn', function() {
    $('.tours-filter__btn').removeClass('tours-filter__btn--active');
    $(this).addClass('tours-filter__btn--active')
    var filterValue = $(this).attr('data-filter');
    toursFilter.isotope({filter: filterValue});
});

//Responsive toggle menu
    $('.main-navigation--closed').on('click', function(){
        $('.main-navigation__nav--responsive').slideToggle(500);
        $('.placeholder > .icon').toggleClass('fa-angle-up fa-angle-down');
    });

// Tabs

function tabs(hide, hideFirst, btnFirst, btn, clsActive, contentBlock){
    $(hide).hide();
    $(hideFirst).show();
    $(btnFirst).addClass(clsActive);
    $(btn).on('click', function (e) {
        e.preventDefault();
        $(btn).removeClass(clsActive);
        $(this).addClass(clsActive);
        $(contentBlock).hide();

        var selectTab = $(this)
            .find('a')
            .attr('href');
        $(selectTab).fadeIn(1000);
    });
}

tabs('.tabs__content', '.tabs__content:first', '.tabs__btn:first', '.tabs__btn', 'tabs__btn--active', '.tabs__content')
/*
$('.tabs__content').hide();
$('.tabs__content:first').show();
$('.tabs__btn:first').addClass('tabs__btn--active');
$('.tabs__btn').on('click', function (e) {
    e.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');
    $('.tabs__content').hide();

    var selectTab = $(this).find('a').attr('href');
    $(selectTab).fadeIn(1000);
});*/

// Sticky Menu
function sticky(element1, element2){
    $(document).on('scroll', function(){
        if ($(this).scrollTop() > 320) {
            $(element1).addClass('main-navigation--sticky');
            $(element2).css('display', 'flex')
        } else {
            $(element1).removeClass('main-navigation--sticky');
            $(element2).css('display', 'none');
        }
    })
}
    sticky('.main-navigation', '.main-navigation__phone');
    sticky('.main-navigation--closed', null);
});