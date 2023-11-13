
let itemsR = gsap.utils.toArray('.main .main-container')

itemsR.forEach(item => {
	gsap.fromTo(item, { opacity:0,x: 700 }, {
		x: 0,opacity:1,
		scrollTrigger: {
			trigger: item,
			start: '-650',
			end: 'top',
			scrub: true,
		}
	})
})