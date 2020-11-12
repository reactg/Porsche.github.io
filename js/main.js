$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: "<img class='slider-arrows slider-arrows__left' src='img/arrows-left.svg' alt=''></img>",
        nextArrow: "<img class='slider-arrows slider-arrows__right' src='img/arrows-right.svg' alt=''></img>",
        asNavFor: '.slider-dotshead',
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive:[
          {
            breakpoint: 1210,
              settings: {
                slidesToShow: 4,
              }
          }
        ]
    });
    
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img class='slider-arrows slider-arrows__left' src='img/arrows-left.svg' alt=''></img>",
        nextArrow: "<img class='slider-arrows slider-arrows__right' src='img/arrows-right.svg' alt=''></img>",
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });
    
    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: "<img class='slider-arrows slider-arrows__left' src='img/arrows-left.svg' alt=''></img>",
        nextArrow: "<img class='slider-arrows slider-arrows__right' src='img/arrows-right.svg' alt=''></img>",
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
    });

    $('.quantity-button').on('click', function(){
    var parents = $(this).parents('.holder-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
      $('.summ', parents).html('$' + summ);
    });

    $('.quantity').each(function() {
    var parents = $(this).parents('.holder-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
      $('.summ', parents).html('$' + summ);
    });

    $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
    });
    
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 2000);
    });

  new WOW().init();

});