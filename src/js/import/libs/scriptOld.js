$(document).ready(function () {


    new WOW().init();

    $(".drop-icon").on("click", function (e) {
        e.preventDefault();
        $(this).closest('.header-top').find(".menu-wrap").addClass("open");
        $("body, html").addClass("overflow");
    })

    $(".close-menu").on("click", function (e) {
        e.preventDefault();
        $(this).closest('.header-top').find(".menu-wrap").removeClass("open");
        $("body, html").removeClass("overflow");
    })

    $(".header-video-wrap .circle").on("mouseover", function () {
        $(".video-wrap").addClass("opened");
        $(".header-video-wrap").addClass("hovered");
    });

    $(".header-video-wrap .video-wrap").on("mouseleave", function () {
        if (!$(".header-video-wrap").hasClass('full')) {
            $(".video-wrap").removeClass("opened");
            $(".header-video-wrap").removeClass("hovered");
        }
    });

    $(".header-video-wrap .circle").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(".header-video-wrap").toggleClass("full");
        $(".header-video-wrap .video-wrap .video").toggleClass("open");
    });


    $(".button_su_inner").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".button_circle").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".button_circle").removeClass("desplode-circle");
        $(this).prev(".button_circle").addClass("explode-circle");

    });

    $(".button_su_inner").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".button_circle").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".button_circle").removeClass("explode-circle");
        $(this).prev(".button_circle").addClass("desplode-circle");

    });


    var $status = $('.pagingInfo');
    var $slickElement = $('.services-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $slickElement.slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        speed: 1300,
        prevArrow: $('.services-slider-wrap .slider-navigation .slick-prev'),
        nextArrow: $('.services-slider-wrap .slider-navigation .slick-next'),
    });

    $('.develop-texts a').smoothScroll({
        speed: 1000,
    });

    $('.select-wrap select').select2({
        minimumResultsForSearch: -1,
    });

    var prevScrollPos = window.pageYOffset;

    if (prevScrollPos < 50) {
        $(".header-top").removeClass("hidden-header-top");
    }

    $(window).scroll(function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 50) {
            $(".header-top").addClass("active hidden-header-top");
            $(".header-top .button-hover").addClass("green-btn");
            if (prevScrollPos > currentScrollPos) {
                $(".header-top").removeClass("hidden-header-top");
            } else {
                $(".header-top").addClass("hidden-header-top");
            }
            prevScrollPos = currentScrollPos;
        } else {
            $(".header-top").removeClass("active hidden-header-top");
            $(".header-top .button-hover").removeClass("green-btn");
        }

    });

    $('.popup').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });


    $(".portfolio-popup-list li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest("ul").find("a").removeClass("active");
        $(this).addClass("active");
        var type = $(this).closest("ul").data("type");
        var btn = $(".portfolio-btn a[data-type=" + type + "]");
        var btnText = btn.find(".text");
        var selectedText = $(this).text();
        btnText.text(selectedText);
        var svgIcon = btn.find("svg");
        svgIcon.addClass("hide");
        var closeBtn = btn.find(".close");
        closeBtn.addClass("show");
        $(this).closest(".main-popup").magnificPopup('close');
    })

    $(".portfolio-buttons .portfolio-btn .close").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("show");
        $(this).closest(".portfolio-btn").find(".button_text_container svg").removeClass("hide");
        var type = $(this).closest("a").data("type");
        var list = $(".portfolio-popup-list[data-type=" + type + "]");
        list.find("a").removeClass("active");
        var defaultText = $(this).closest(".portfolio-btn").find(".text").data("default");
        $(this).closest(".portfolio-btn").find(".text").text(defaultText);
    });

    $(".main-popup .reset").on("click", function (e) {
        e.preventDefault();
        var type = $(this).closest(".popup-body").find(".portfolio-popup-list").data("type");
        var btn = $(".button_su_inner[data-type=" + type + "]");
        btn.find(".close").removeClass("show");
        console.log(type)
        btn.find("svg").removeClass("hide");
        var list = $(".portfolio-popup-list[data-type=" + type + "]");
        list.find("a").removeClass("active");
        var defaultText = btn.find(".text").data("default");
        btn.find(".text").text(defaultText);
        $(this).closest(".main-popup").magnificPopup('close');
    });

    $(".portfolio-project-wrap .button-hover").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".portfolio-project-wrap").find(".project-item-wrap").addClass("show");
    })

    $("#form").validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Заполните поле"
            },
            phone: {
                required: "Заполните поле"
            }
        },

    });

    $('#form').on("submit", function (e) {
        e.preventDefault();
        if ($('#form').valid()) {
            $(this).closest(".form-wrap").hide();
            $(".form-valid").show();
        }
    });





    var contactsAnimation = function () {
        gsap.timeline({
                scrollTrigger: {
                    pinReparent: !0,
                    trigger: ".contacts-descr",
                    start: "bottom bottom",
                    stop: "top top",
                    scrub: 1,
                    anticipatePin: 1,
                    toggleActions: "play pause resume reverse",
                },
            })
            .to(".contacts-descr__fish", 1, {
                rotation: 360,
                transformOrigin: "50% 100px",
            })
            .to(".contacts-descr__fish img", 1, {
                rotation: -360
            }, 0);


        gsap.timeline({
            scrollTrigger: {
                trigger: ".page",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                toggleActions: "play reset play pause"
            }
        }).to(".wave", 1, {
            ease: "linear",
            backgroundPosition: "-1700px 0px"
        }), gsap.timeline({
            scrollTrigger: {
                trigger: ".page",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                toggleActions: "play reset play pause"
            }
        })


        var tl, tl2, tl3;
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                tl && tl.restart();
                (tl = gsap.timeline({
                    repeat: -1,
                    ease: "linear",
                    defaults: {
                        duration: 1.5
                    }
                })).to("#contact-cloud", {
                    morphSVG: "#contact-cloud-animation"
                }).to("#contact-cloud", {
                    morphSVG: "#contact-cloud"
                }), tl2 && tl2.restart(), (tl2 = gsap.timeline({
                    ease: "linear"
                })).to(".contacts-hero__img", {
                    y: 0,
                    opacity: 1
                }, 0), tl2.to(".contacts-hero__cloud--desktop", {
                    opacity: 1
                }), tl3 && tl3.restart(), (tl3 = gsap.timeline({
                    ease: "linear"
                })).to(".contacts-hero__batiskaf img", {
                    y: 0
                }), ScrollTrigger.create({
                    animation: tl3,
                    target: ".contacts-hero",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1
                })
            },
            "(max-width: 767px)": function () {
                tl && tl.kill(), tl2 && tl2.kill(), tl3 && tl3.kill(), $(".contacts-hero__img, .contacts-hero__cloud--desktop").removeAttr("style")
            }
        })

        gsap.timeline({
            scrollTrigger: {
                pinReparent: !0,
                trigger: ".contacts-map",
                start: "center bottom",
                stop: "top top",
                anticipatePin: 1,
                toggleActions: "play pause resume reverse"
            }
        }).to(".contacts-map__wrapper", 1, {
            x: 0
        })


    }

    loader();

    document.querySelector('.page').onload = loader;

    function loader(_success) {
        var obj = document.querySelector('.preloader'),
            inner = document.querySelector('.preloader_inner'),
            inner2 = document.querySelector('.preloader_inner2'),
            page = document.querySelector('.page');
        obj.classList.add('loader-show');
        page.classList.remove('loader-show');
        var w = 0,
            t = setInterval(function () {
                w = w + 1;
                inner.textContent = w + '%';
                inner2.style.width = w + '%';
                if (w === 100) {
                    obj.classList.remove('loader-show');
                    page.classList.add('loader-show');
                    clearInterval(t);
                    w = 0;
                    contactsAnimation();
                    if (_success) {
                        return _success();
                    }
                }
            }, 20);
    }




});
