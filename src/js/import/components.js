import $ from "jquery";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs, EffectFade } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs, EffectFade]);

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


$(document).ready(function (){

	/// удалить при установки на сайт
	var prevScrollPos = window.pageYOffset;
	if (prevScrollPos < 50) {
		$(".header-top").removeClass("hidden-header-top");
	}
	$(window).scroll(function () {
		var currentScrollPos = window.pageYOffset;

		if (currentScrollPos > 50) {
				$(".header-top").addClass("active hidden-header-top");
				$(".header-top .black2-btn").addClass("red-btn");
				$(".header-top .green-border-btn2").addClass("black-bg-btn");
				$(".header-top .button-hover2").removeClass("green-border-btn2");
				if (prevScrollPos > currentScrollPos) {
						$(".header-top").removeClass("hidden-header-top");
				} else {
						$(".header-top").addClass("hidden-header-top");
				}
				prevScrollPos = currentScrollPos;
		} else {
				$(".header-top").removeClass("active hidden-header-top");
				$(".header-top .black2-btn").removeClass("red-btn");
				$(".header-top .green-border-btn2").removeClass("black-bg-btn");
				$(".header-top .button-hover2").addClass("green-border-btn2");
		}
	});
	$(".black2-btn").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".header-top").find(".menu-wrap").addClass("open");
		$("body, html").addClass("overflow");
	});

	$(".close-menu").on("click", function (e) {
			e.preventDefault();
			$(this).closest(".header-top").find(".menu-wrap").removeClass("open");
			$("body, html").removeClass("overflow");
	});
	/// удалить при установки на сайт


	var contactsSlider;
	$('.js-contacts').each(function(){
		var slider=$(this)
		var contactsSlider = new Swiper(slider[0], {
			// slidesPerView: 1,
			// spaceBetween: 16,
			loop: false,
			pagination: true,
			// autoHeight: true,
			direction: 'vertical',
			effect: 'fade',
			paginationClickable: true,
			mousewheel: true,
			navigation: {
					nextEl: slider.find('.swiper-button-next')[0],
					prevEl: slider.find('.swiper-button-prev')[0]
			},
			pagination: {
					el: slider.find('.swiper-pagination')[0],
					type: 'bullets',
					clickable: true
			},
			on: {
				beforeInit: function() {
					// startSlideOne();
				}, 
				activeIndexChange: function() {
						let workSliderDesc = document.querySelectorAll(".contacts__swiper")
						workSliderDesc.forEach(elem => {
								let idex = elem.swiper.realIndex
								startAnimationSlide(idex);
								// function controlSlider () {
								// 	let footerContacts = document.querySelector (".footer")
								// 	function toggelFotter() {
								// 		footerContacts.classList.add("active")
								// 	}
								// 	if (idex == 3) {
								// 		contactsSlider.disable();
								// 		toggelFotter()
								// 		window.addEventListener ("scroll", () => {
								// 			if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100))
								// 			{
								// 				contactsSlider.enable();
								// 			}
								// 		})
								// 	}
								// 	if (idex == 0) {
								// 		footerContacts.classList.remove("active")
								// 	}
								// 	if (idex == 1) {
								// 		footerContacts.classList.remove("active")
								// 	}
								// 	if (idex == 2) {
								// 		footerContacts.classList.remove("active")
								// 	}
								// }
								// controlSlider ()
								
						});
				}, 
		}

		});
	})



 let SlideIndex = {}
 function startAnimationSlide (e) {
		let idex = e;
		switch(idex) {
			case 0 : 
				// startSlideOne(true)
				startSlideTitleTwo(false)
				startSlideTitleThree(false)
				startSlideTitleFour(false)
				break;
			case 1 :
				// startSlideOne(true)
				startSlideTitleTwo(true)
				startSlideTitleThree(false)
				startSlideTitleFour(false)
				break;
			case 2 : 
				startSlideTitleFour(false)
				startSlideTitleTwo(false)
				startSlideTitleThree(true) 
				break;
			case 3 : 
				startSlideTitleFour(true)
				startSlideTitleTwo(false)
				startSlideTitleThree(false)
				break;
			default:
				break;
		}
	}

	startSlideOne()
	function startSlideOne() {
		var tl1 = gsap.timeline({paused: false });
		var tlfish = gsap.timeline({paused: false});
		let Title = gsap.timeline({paused: false});
		let subTitle = gsap.timeline({paused: false});
		let titleLine = gsap.timeline({paused: false});
		Title.to(".title--word.w-1", {
			scale: 1,
			opacity: 1,
			delay: 1,
			duration: 2.5,
			ease: "elastic.out(1, 0.3)"
		});
		Title.to(".title--word.w-2", {
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			delay: 0,
			duration: 2.5,
			ease: "elastic.out(1, 0.3)"
		},"<+0.3");
		subTitle.to(".subtitle--word.sub-1", {
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			delay: 0,
			duration: 3,
			ease: "elastic.out(1, 0.3)"
		},"<+0.7")
		subTitle.to(".subtitle--word.sub-2", {
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			delay: 0,
			duration: 3,
			ease: "elastic.out(1, 0.3)"
		},"<+0.4")
		subTitle.to(".subtitle--word.sub-3", {
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			delay: 0,
			duration: 3,
			ease: "elastic.out(1, 0.3)"
		},"<+0.5")
		subTitle.to(".subtitle--word.sub-4", {
			scaleX: 1,
			scaleY: 1,
			opacity: 1,
			delay: 0,
			duration: 3,
			ease: "elastic.out(1, 0.3)"
		},"<+0.6")
		titleLine.to(".title--line", {
			width: "23.4375vw",
			opacity: 1,
			delay: 0,
			duration: 3,
			ease: "elastic.out(1, 0.3)"
		},"<+2")
		
		tl1.to("#jellyfish", {
			top: "60vh",
			left: "-30vw",
			ease: "none",
		});
		tl1.to("#jellyfish", {
			motionPath: {
				path: [
						{top: "20vh", left: "30vw", rotate: "20deg"},
						{top: "-40vh", left: "50vw", rotate: "-20deg"},

				],
				curviness: 1
				//type: "cubic"
		},
		duration: 15,
		repeat: Infinity,
		ease: "none",
		}),"<";
		tl1.to("#jellyfish2", {
			motionPath: {
				path: [
						{top: "70vh", left: "-20vw", rotate: "20deg"},
						{top: "-40vh", left: "70vw", rotate: "-25deg"},

				],
				curviness: 1
				//type: "cubic"
		},
		duration: 17,
		repeat: Infinity,
		ease: "none",
		});

		tlfish.to("#fish1", {
			motionPath: {
				path: [
						{top: "25vh", left: "-23.4375vw", rotate: "0deg"},
						{top: "60vh", left: "60vw", rotate: "30deg"},
						{top: "65vh", left: "70vw", rotate: "10deg"},
						{top: "70vh", left: "100vw", rotate: "0deg"},

				],
				curviness: 1
				//type: "cubic"
		},
		duration: 35,
		repeat: -1,
		ease: "circ.inOut",
		}),"<-=30";

	};
	startSlideTwo(true)
	function startSlideTwo(a) {
		let condition = a;

		var fishTwo= gsap.timeline();
		let ramp = gsap.timeline();

		fishTwo.clear()
		ramp.clear()

		gsap.set("#ramp" + "#fishTwo", {clearProps:"all"});

		if (condition == false) {
			fishTwo.kill()
			ramp.kill()
		}else startAnimationSlideTwo()

		function	startAnimationSlideTwo () {
			fishTwo.to("#fishTwo", {
				motionPath: {
					path: [
							{top: "10vh", right: "-23.4375vw", rotate: "0deg"},
							{top: "20vh", right: "60vw", rotate: "-20deg"},
							{top: "25vh", right: "100vw", rotate: "-5deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			repeat: -1,
			ease: "circ.inOut",
			},"")
			ramp.to("#ramp", {
				motionPath: {
					path: [
							{top: "35vh", left: "-31.25vw", rotate: "0deg"},
							{top: "70vh", left: "100vw", rotate: "30deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			delay: 3,
			repeat: -1,
			ease: "line",
			}),"<-=30";
	
	
		}



	};
	function startSlideTitleTwo(a) {
		let condition = a;

		let TitleTwo = gsap.timeline();
		let subTitleTwo = gsap.timeline();
		let titleLineTwo = gsap.timeline();
		TitleTwo.clear()
		subTitleTwo.clear()
		titleLineTwo.clear()

		// gsap.set(".title__2--word.w-1, .title__2--word.w-2, .title__2--word.w-3" +
		// ".subtitle__2--word.sub-1, .subtitle__2--word.sub-2, .subtitle__2--word.sub-3, .subtitle__2--word.sub-4" +
		// ".title__2--line svg", {clearProps:"all"});
		if (condition == false) {
			TitleTwo.kill()
			subTitleTwo.kill()
			titleLineTwo.kill()
		}else startAnimationTitleTwo()
		function	startAnimationTitleTwo () {
			TitleTwo.to(".title__2--word.w-1", {
				scale: 1,
				opacity: 1,
				delay: 1,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			});
			TitleTwo.to(".title__2--word.w-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			TitleTwo.to(".title__2--word.w-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			subTitleTwo.to(".subtitle__2--word.sub-1", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.7")
			subTitleTwo.to(".subtitle__2--word.sub-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.4")
			subTitleTwo.to(".subtitle__2--word.sub-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.5")
			subTitleTwo.to(".subtitle__2--word.sub-4", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.6")
			titleLineTwo.to(".title__2--line svg", {
				width: "23.4375vw",
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+2")
	
		}
	}
	startSlideThree(true)
	function startSlideThree(a) {
		let condition = a;
		let fishTree1 = gsap.timeline({paused: false});
		let fishTree2 = gsap.timeline({paused: false});
		let fishTree3 = gsap.timeline({paused: false});

		// TitleThree.clear()
		// subTitleThree.clear()
		// titleLineThree.clear()
		// fishTree1.clear()
		// fishTree2.clear()
		// fishTree3.clear()

		gsap.set("#fishTree-1" + "#fishTree-2" + "#fishTree-3", {clearProps:"all"});
		
		if (condition == false) {

		}else startAnimationSlideTree()
		
		function startAnimationSlideTree() {
			fishTree1.to("#fishTree-1", {
				motionPath: {
					path: [
							{top: "10vh", left: "-23.4375vw", rotate: "0deg"},
							{top: "65vh", left: "100vw", rotate: "30deg"},
							{top: "75vh", left: "100vw", rotate: "0deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			delay: 3,
			repeat: -1,
			ease: "line",
			});
			fishTree2.to("#fishTree-2", {
				motionPath: {
					path: [
							{top: "20vh", left: "-39.0625vw", rotate: "0deg"},
							{top: "65vh", left: "100vw", rotate: "30deg"},
							{top: "75vh", left: "100vw", rotate: "0deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			delay: 3,
			repeat: -1,
			ease: "line",
			},"<");
			fishTree3.to("#fishTree-3", {
				motionPath: {
					path: [
							{top: "13vh", left: "-42.96875vw", rotate: "0deg"},
							{top: "65vh", left: "100vw", rotate: "30deg"},
							{top: "75vh", left: "100vw", rotate: "0deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			delay: 3,
			repeat: -1,
			ease: "line",
			},"<");
		}


		

	};

	const jellyfishMouse = document.querySelector("#jellyfish");
	const jellyfish2Mouse = document.querySelector("#jellyfish2");
	const fish1Mouse = document.querySelector("#fish1");
	const fishTwoMouse = document.querySelector("#fishTwo");
	const rampMouse = document.querySelector("#ramp");
	const fishTreeMouse1 = document.querySelector("#fishTree-1");
	const fishTreeMouse2 = document.querySelector("#fishTree-2");
	const fishTreeMouse3 = document.querySelector("#fishTree-3");
	const fishFourMouse = document.querySelector("#fishFour-1");
	const octopusMouse = document.querySelector("#octopus");
	
	const hover10 = gsap.to(octopusMouse, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	octopusMouse.addEventListener("mouseenter", () => hover10.play());
	octopusMouse.addEventListener("mouseleave", () => hover10.reverse());
	
	const hover9 = gsap.to(fishFourMouse, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fishFourMouse.addEventListener("mouseenter", () => hover9.play());
	fishFourMouse.addEventListener("mouseleave", () => hover9.reverse());
	const hover8 = gsap.to(fishTreeMouse3, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fishTreeMouse3.addEventListener("mouseenter", () => hover8.play());
	fishTreeMouse3.addEventListener("mouseleave", () => hover8.reverse());
	const hover7 = gsap.to(fishTreeMouse2, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fishTreeMouse2.addEventListener("mouseenter", () => hover7.play());
	fishTreeMouse2.addEventListener("mouseleave", () => hover7.reverse());
	const hover6 = gsap.to(fishTreeMouse1, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fishTreeMouse1.addEventListener("mouseenter", () => hover6.play());
	fishTreeMouse1.addEventListener("mouseleave", () => hover6.reverse());
	const hover5 = gsap.to(rampMouse, {
		x: 100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	rampMouse.addEventListener("mouseenter", () => hover5.play());
	rampMouse.addEventListener("mouseleave", () => hover5.reverse());
	const hover4 = gsap.to(jellyfishMouse, {
		x: -100,
		y: 100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fishTwoMouse.addEventListener("mouseenter", () => hover4.play());
	fishTwoMouse.addEventListener("mouseleave", () => hover4.reverse());
	const hover = gsap.to(jellyfishMouse, {
		x: 100,
		y: 100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	jellyfishMouse.addEventListener("mouseenter", () => hover.play());
	jellyfishMouse.addEventListener("mouseleave", () => hover.reverse());
	const hover2 = gsap.to(jellyfish2Mouse, {
		x: 50,
		y: 50,
		duration: 1,
		paused: true,
		ease: "ease-in-out"
	});

	jellyfish2Mouse.addEventListener("mouseenter", () => hover2.play());
	jellyfish2Mouse.addEventListener("mouseleave", () => hover2.reverse());
	
	const hover3 = gsap.to(fish1Mouse, {
		x: -100,
		y: -100,
		duration: 1.5,
		paused: true,
		ease: "ease-in-out"
	});

	fish1Mouse.addEventListener("mouseenter", () => hover3.play());
	fish1Mouse.addEventListener("mouseleave", () => hover3.reverse());

	gsap.set("#seaUrchin", {
		xPercent: -50,
		yPercent: -100,
		scale: 0,
	});
	gsap.set("#starfish", {
		xPercent: -50,
		yPercent: -100,
		scale: 0,
		rotate: 0,
	});



	window.addEventListener("mousemove", (e) => {
		gsap.to("#seaUrchin", {
			duration: 0.5,
			overwrite: "auto",
			x: e.clientX,
			y: e.clientY,
			stagger: 0.15,
			ease: "none"
		});
		gsap.to("#starfish", {
			duration: 0.5,
			overwrite: "auto",
			x: e.clientX,
			y: e.clientY,
			stagger: 0.15,
			ease: "none"
		});
	
		let seaUrchin = gsap.timeline({
			defaults: { duration: 0.5, ease: "none",  rotate: 0}
		});
		seaUrchin.to("#seaUrchin", {
			scale: 0.8,
			overwrite: "auto",
			stagger: { amount: 0.15, from: "start", ease: "none" }
		});
		seaUrchin.to(
			"#seaUrchin",
			{
				overwrite: "auto",
				scale: 1,
				stagger: { amount: 0.15, from: "end", ease: "none" }
			},
			"<+=2.5"
		);
		let starfish = gsap.timeline({
			defaults: { duration: 0.5, ease: "none",  rotate: 0}
		});
		starfish.to("#starfish", {
			scale: 1,
			rotate: 0,
			overwrite: "auto",
			stagger: { amount: 0.15, from: "start", ease: "none" }
		});
		starfish.to("#starfish",
			{
				overwrite: "auto",
				rotate: 360,
				scale: 1,
				stagger: { amount: 0.15, from: "end", ease: "none" }
			},
			"<+=2.5"
		);
	});



	function startSlideTitleThree(a) {
		let condition = a;
		let TitleThree = gsap.timeline({paused: false});
		let subTitleThree = gsap.timeline({paused: false});
		let titleLineThree = gsap.timeline({paused: false});

		// TitleThree.clear()
		// subTitleThree.clear()
		// titleLineThree.clear()
		// fishTree1.clear()
		// fishTree2.clear()
		// fishTree3.clear()

		// gsap.set(".title__3--word.w-2, .title__3--word, .title__3--word.w-2, .title__3--word.w-3" +
		// ".subtitle__3--word.sub-1, .subtitle__3--word.sub-2, .subtitle__3--word.sub-3, .subtitle__3--word.sub-4" +
		// ".title__3--line" + ".title__3--line svg", {clearProps:"all"});
		
		if (condition == false) {

		}else startAnimationTitleTree()
		
		function startAnimationTitleTree() {
			TitleThree.to(".title__3--word.w-1", {
				scale: 1,
				opacity: 1,
				delay: 1,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			});
			TitleThree.to(".title__3--word.w-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			TitleThree.to(".title__3--word.w-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			subTitleThree.to(".subtitle__3--word.sub-1", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.7")
			subTitleThree.to(".subtitle__3--word.sub-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.4")
			subTitleThree.to(".subtitle__3--word.sub-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.5")
			subTitleThree.to(".subtitle__3--word.sub-4", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.6")
			titleLineThree.to(".title__3--line svg", {
				width: "23.4375vw",
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+2")
		}


		

	};
	startSlideFour(true)
	function startSlideFour(a) {
		let condition = a;
		let fishFour1 = gsap.timeline({paused: false});
		let octopus = gsap.timeline({paused: false});
		let octopusTentacle = gsap.timeline({paused: false});

		// TitleThree.clear()
		// subTitleThree.clear()
		// titleLineThree.clear()
		// fishTree1.clear()
		// fishTree2.clear()
		// fishTree3.clear()

		gsap.set("#fishTree-1" + "#fishTree-2" + "#fishTree-3", {clearProps:"all"});
		
		if (condition == false) {

		}else startAnimationSlideTree()
		
		function startAnimationSlideTree() {
			fishFour1.to("#fishFour-1", {
				motionPath: {
					path: [
							{top: "10vh", left: "-23.4375vw", rotate: "0deg"},
							{top: "65vh", left: "100vw", rotate: "30deg"},
							{top: "75vh", left: "100vw", rotate: "0deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 35,
			delay: 3,
			repeat: -1,
			ease: "line",
			});
			octopus.to("#octopus", {
				motionPath: {
					path: [
							{bottom: "1vh", left: "0vw", rotate: "0deg"},
							{bottom: "2vh", left: "25vw", rotate: "-10deg"},
							{bottom: "1vh", left: "50vw", rotate: "0deg"},
	
					],
					curviness: 1
					//type: "cubic"
			},
			duration: 100,
			delay: 3,
			repeat: -1,
			yoyo: true,
			ease: "none",
			});
			octopusTentacle.to(".octopus__tentacle", {
				y: -5,
				x: 15,
				rotate: -5,
				repeat: -1,
				delay: .5,
				yoyo: true,
				delay: function(i) {
					return i * .2
				},
			},"<");
		}


		

	};
	function startSlideTitleFour(a) {
		let condition = a;
		let TitleFour = gsap.timeline({paused: false});
		let subTitleFour = gsap.timeline({paused: false});
		let titleLineFour = gsap.timeline({paused: false});

		// TitleThree.clear()
		// subTitleThree.clear()
		// titleLineThree.clear()
		// fishTree1.clear()
		// fishTree2.clear()
		// fishTree3.clear()

		// gsap.set(".title__3--word.w-2, .title__3--word, .title__3--word.w-2, .title__3--word.w-3" +
		// ".subtitle__3--word.sub-1, .subtitle__3--word.sub-2, .subtitle__3--word.sub-3, .subtitle__3--word.sub-4" +
		// ".title__3--line" + ".title__3--line svg", {clearProps:"all"});
		
		if (condition == false) {

		}else startAnimationTitleFour()
		
		function startAnimationTitleFour() {
			TitleFour.to(".title__4--word.w-1", {
				scale: 1,
				opacity: 1,
				delay: 1,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			});
			TitleFour.to(".title__4--word.w-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			TitleFour.to(".title__4--word.w-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 2.5,
				ease: "elastic.out(1, 0.3)"
			},"<+0.3");
			subTitleFour.to(".subtitle__4--word.sub-1", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.7")
			subTitleFour.to(".subtitle__4--word.sub-2", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.4")
			subTitleFour.to(".subtitle__4--word.sub-3", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.5")
			subTitleFour.to(".subtitle__4--word.sub-4", {
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+0.6")
			titleLineFour.to(".title__4--line svg", {
				width: "23.4375vw",
				opacity: 1,
				delay: 0,
				duration: 3,
				ease: "elastic.out(1, 0.3)"
			},"<+2")
		}


		

	};
});

