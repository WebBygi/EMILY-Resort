gsap.registerPlugin(ScrollTrigger, ScrollSmoother)



	gsap.fromTo('.header-fullscreen', { opacity: 1, y:0 }, {
		opacity: 0,y:-80,
		scrollTrigger: {
			trigger: '.header',
			start: 'center',
			scrub: true
		}
	})
	gsap.fromTo('.main-bg__block', { y:0}, {
		y:-100,
		scrollTrigger: {
			trigger: '.main-bg__block',
			start: 'top top',
			scrub: 3
		}
	})
	gsap.fromTo('.main-bg__second__block', { y:0}, {
		y:-100,
		scrollTrigger: {
			trigger: '.main-bg__second__block',
			start: 'top top',
			scrub: 3
		}
	})
	gsap.fromTo('.facilities-container__card', { y:50}, {
		y:0,
		scrollTrigger: {
			trigger: '.facilities-container__card',
			start: 'bottom bottom',
			scrub: 1
		}
	})
	gsap.fromTo('.facilities-maintitle', { y:-50}, {
		y:0,
		scrollTrigger: {
			trigger: '.facilities-maintitle',
			start: 'bottom bottom',
			scrub: 1
		}
	})
	gsap.fromTo('.facilities-bg', { y:0}, {
		y:+300,
		scrollTrigger: {
			trigger: '.facilities-bg',
			start: 'center',
			scrub: 2,
		}
	})




	let panels = gsap.utils.toArray(".panel");
	let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

	panels.forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
		pin: true, 
		pinSpacing: false
	});
	});






















