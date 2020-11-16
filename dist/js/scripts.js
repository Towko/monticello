$(document).ready(function () {
    $(".mainpage__slider").slick({
        autoplay:false,
        autoplaySpeed:4000,
        arrows: false,
        dots:true,
        vertical:true,
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true
    });
    $(".news__slider").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="slick__icon slick__icon--slick-prev"><use xlink:href="./img/sprite.svg#down"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="slick__icon slick__icon--slick-next"><use xlink:href="./img/sprite.svg#down"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1004,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }

            }
        ]
    });
    $(".menu__link,.jumper__button").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1500);
    })
})