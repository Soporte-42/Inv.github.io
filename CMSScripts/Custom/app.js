var App = (function (window, document, undefined) {

  'use strict';

  var carouselHome = function () {
    var carouselHeader = $(".carousel-header");
    var carouselIndicators = $(".finance-indicators");
    var carouselTimeline = $(".time-line");
    var carouselDepartments = $(".departments-info");
    carouselHeader.on('initialized.owl.carousel ' + 'translated.owl.carousel', function (e) {
      var owlItemActivo = $('.carousel-custom').find('.owl-item.active');
      var owlItem = $('.carousel-custom').find('.owl-item').not('.owl-item.active');
      owlItemActivo.find('.carousel-header__description').addClass('animacion');
      owlItem.find('.carousel-header__description').removeClass('animacion');
    });

    carouselHeader.owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplaySpeed: 900,
      navText: ["<i class='icon-chevron-left'>", "<i class='icon-chevron-right'>"],
      center: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          loop: true,
          stagePadding: 0,
          autoplay: false
        },
        768: {
          items: 1,
          nav: true,
          dots: true,
          loop: true,
          stagePadding: 0,
          autoplay: true,
          mouseDrag: false,
          autoplayTimeout: 8000,
          autoplaySpeed: 900,
        }
      }
    });

    carouselIndicators.owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 900,
      center: false,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
          loop: true,
          stagePadding: 50,
          autoplay: false,
          center: true
        },
        768: {
          items: 3,
          nav: false,
          dots: false,
          loop: true,
          stagePadding: 0,
          autoplay: true,
          mouseDrag: false,
          autoplayTimeout: 6000,
          autoplaySpeed: 900,
          center: false
        }
      }
    });

    carouselTimeline.owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 900,
      nav: true,
      navText: ["<i class='icon-chevron-left'>", "<i class='icon-chevron-right'>"],
      center: true,
      margin: 15,
      responsive: {
        0: {
          items: 1,
          nav: true,
          dots: false,
          loop: true,
          stagePadding: 50,
          autoplay: false
        },
        768: {
          items: 6,
          nav: true,
          dots: false,
          loop: false,
          stagePadding: 50,
          autoplay: true,
          mouseDrag: true,
          autoplayTimeout: 6000,
          autoplaySpeed: 900,
          startPosition: 2
        }
      }
    });

    carouselDepartments.owlCarousel({
      items: 3,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplaySpeed: 900,
      navText: ["<i class='icon-chevron-left'>", "<i class='icon-chevron-right'>"],
      center: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: true,
          dots: false,
          loop: false,
          stagePadding: 0,
          autoplay: false
        },
        768: {
          items: 3,
          nav: false,
          dots: false,
          loop: false,
          stagePadding: 15,
          autoplay: false,
          mouseDrag: false,
          autoplayTimeout: 6000,
          autoplaySpeed: 900,
        }
      }
    });
  }

  var submenuFunction = function () {
    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    var submenuToggle = document.querySelectorAll('.site-header__menu ul li span');
    forEach(submenuToggle, function (index, submenuToggle) {
      submenuToggle.classList.add("submenu-toggle");
      submenuToggle.nextElementSibling.classList.add("submenu");
      var submenuElement = submenuToggle.nextElementSibling;
      function muestraconsole() {
        console.log(submenuElement);
      }

      function submenuNavToggle() {
        submenuElement.classList.add('submenu--open');
        var submenuParent = submenuElement.parentElement;
        var optionSelected = submenuParent.children[0].innerHTML;
        submenuElement.insertAdjacentHTML('afterbegin', '<li class="submenu__breadcrumb"><button class="submenu__back"><i class="fa fa-arrow-left"></i></button>' + optionSelected + '</li>');
        var submenuBack = submenuElement.querySelector(".submenu__back");
        function hideSubmenu() {
          var breadcrumb = submenuElement.querySelector(".submenu__breadcrumb");
          submenuElement.classList.remove('submenu--open');
          breadcrumb.parentNode.removeChild(breadcrumb);
        }
        submenuBack.addEventListener('click', hideSubmenu);
      }
      submenuToggle.addEventListener('click', submenuNavToggle);
    });
  }

  var menuToggle = function () {
    var mainNav = document.querySelector('.site-header__menu');
    var navToggle = document.querySelector('.menu-trigger');
    var overlay = document.createElement("div");
    var bodySite = document.getElementsByTagName('body');
    var headerOptions = document.querySelector('.header-options');

    overlay.className = 'overlay-body';
    bodySite[0].appendChild(overlay);

    function mainNavToggle() {
      mainNav.classList.toggle('site-header__menu--open');
      navToggle.classList.toggle('is-active');
      overlay.classList.toggle('is-active');
      bodySite[0].classList.toggle('overflow-hidden');
      headerOptions.classList.toggle('menu-is-active');
    }
    navToggle.addEventListener('click', mainNavToggle);
    overlay.addEventListener('click', mainNavToggle);
  }

  var searchToggle = function () {
    var siteLogo = document.querySelector('.site-header__logo');
    var searchContainer = document.querySelector('.header-options__search');
    var searchButtonToggle = document.querySelector('.header-options__trigger');
    function searchToggle() {
      searchContainer.classList.toggle('active');
      searchButtonToggle.classList.toggle('active');
      siteLogo.classList.toggle('active');
    }
    searchButtonToggle.addEventListener('click', searchToggle);
  }

  var chatbot = function () {
    var bubble = document.querySelector('.chatbot-bubble');
    var chatbot = document.querySelector('.chatbot');
    var closeChatbot = document.querySelector('.chatbot__btn-close');
    function chatbotBubble() {
      chatbot.classList.toggle('active');
      bubble.classList.toggle('active');
    }
    bubble.addEventListener('click', chatbotBubble);
    closeChatbot.addEventListener('click', chatbotBubble);
  }
/*
  var carouselVertical = function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
*/
  var scrollTop = function () {
    var body = $("html, body");
    var visibleScrollTop = $('.visible-scroll-top');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $(visibleScrollTop).addClass('active');
      } else {
        $(visibleScrollTop).removeClass('active');
      }
    });
    $(visibleScrollTop).click(function () {
      body.stop().animate({ scrollTop: 0 }, 500, 'swing');
    }
    );
  }
      
  var counterNumber = function () {
    $('.indicators-count__number').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });
  }
      
  var triggerCounter = function () {
    if ($('.indicators-count__number').length > 0) {
      var inview = new Waypoint.Inview({
        element: $('.indicators-count__number')[0],
        enter: function (direction) {
          counterNumber();
        },
        exited: function(direction) {
          inview.destroy();
        }
      })
    }
  }
      
  var masonryContainer = function () {
    $('.grid-masonry').masonry({
      itemSelector: '.grid-masonry__item',
      columnWidth: '.grid-masonry__sizer',
      percentPosition: true,
      horizontalOrder: true
    });
  }
      
  var stickyBlog = function () {
    if ($('.publication-detail__right-side').length > 0) {
      var sidebar = new StickySidebar('.publication-detail__sticky-container', {
        topSpacing: 30,
        bottomSpacing: 100,
        containerSelector: '.publication-detail',
        innerWrapperSelector: '.publication-detail__sticky'
      });
    }
  }
      
  var zoomie = function () {
    $('.publication-detail__content img').zoomio({
      fadeduration: 500
    })
  }
      
  var tableScroll = function () {
    $('.publication-detail__content table').wrap('<div class="table-scroll"></div>');
  }
      
  var seemoreContent = function () {
    $('.publication-detail__content').readmore({
      speed: 150,
      collapsedHeight: 220,
      lessLink: '<div class="col-xs-12 mt3 text-center"><a class="btn btn-primary btn-readmore" href="#">Ocultar</a></div>',
      moreLink: '<div class="col-xs-12 mt3 text-center"><a class="btn btn-primary btn-readmore" href="#">Leer mas</a></div>'
    });
  }


window.onresize = function(event) {
	    menuToggle();
      submenuFunction();
      zoomie();
      seemoreContent();
};


  var init = function () {
    carouselHome();
    searchToggle();
    chatbot();
    //carouselVertical();
    scrollTop();
    //masonryContainer();
    triggerCounter();
    stickyBlog();
    tableScroll();
    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      menuToggle();
      submenuFunction();
      zoomie();
      seemoreContent();
    }*/
    // svg4everybody();
  };

  return {
    init: init
  };

}(window, document));

var lastIndex = 0;

function randomImage() {
  var theImage = document.getElementById('site-footer-image');
  var imgDir = '/INVEX/media/invex-images/footer/';
  var imgArray = new Array('hero1.jpg', 'hero2.jpg', 'hero3.jpg', 'hero4.jpg', 'hero5.jpg');
  var imgIndex = 0;

  if (imgArray.length > 1) {
    while (imgIndex == lastIndex) {
      imgIndex = Math.floor(Math.random() * imgArray.length);
    }
    lastIndex = imgIndex;

    var imgPath = imgDir + imgArray[imgIndex];

    theImage.src = imgPath;
    theImage.alt = imgArray[imgIndex];
  }
  else {
    return false;
  }
}