const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach((container) => {
    const slider = container.querySelector('.slider');
    const sliderDots = container.querySelector('.slider-dots');
    let currentImageIndex = 0;

    function updateSliderSize() {
        const containerWidth = container.offsetWidth;
        const images = slider.querySelectorAll('img');

        images.forEach((image, index) => {
            image.style.width = `${containerWidth}px`;

            if (index === currentImageIndex) {
                image.classList.add('active-image');
            } else {
                image.classList.remove('active-image');
            }
        });

        slider.style.width = `${containerWidth * images.length}px`;
        createSliderDots(images.length);
    }

    function createSliderDots(totalImages) {
        sliderDots.innerHTML = ''; // Очищаем текущие точки
        for (let i = 0; i < totalImages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            sliderDots.appendChild(dot);

            dot.addEventListener('click', () => {
                currentImageIndex = i;
                slide();
            });
        }

        sliderDots.children[currentImageIndex].classList.add('active-dot');
    }

    function slide() {
        const containerWidth = container.offsetWidth;
        const position = -currentImageIndex * containerWidth;
        slider.style.transform = `translateX(${position}px)`;

        const dots = sliderDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active-dot');
            if (index === currentImageIndex) {
                dot.classList.add('active-dot');
            }
        });
    }

    window.addEventListener('resize', updateSliderSize);

    updateSliderSize();
});



const facilitiesContainers = document.querySelectorAll('.facilities-container');

facilitiesContainers.forEach((container) => {
		const facilitiesSlider = container.querySelector('.facilities-slider');
		const facilitiesSliderDots = container.querySelector('.facilities-slider-dots');
		let facilitiesCurrentImageIndex = 0;

		function updateFacilitiesSliderSize() {
			const containerWidth = container.offsetWidth;
			const images = facilitiesSlider.querySelectorAll('img');

			images.forEach((image, index) => {
				image.style.width = `${containerWidth}px`;

				if (index === facilitiesCurrentImageIndex) {
						image.classList.add('active-facilities-image');
				} else {
						image.classList.remove('active-facilities-image');
				}
			});

			facilitiesSlider.style.width = `${containerWidth * images.length}px`;
			createFacilitiesSliderDots(images.length);
		}

		function createFacilitiesSliderDots(totalImages) {
			facilitiesSliderDots.innerHTML = '';
			for (let i = 0; i < totalImages; i++) {
				const facilitiesDot = document.createElement('div');
				facilitiesDot.classList.add('facilities-slider-dot');
				facilitiesSliderDots.appendChild(facilitiesDot);

				facilitiesDot.addEventListener('click', () => {
						facilitiesCurrentImageIndex = i;
						slide();
				});
			}

			facilitiesSliderDots.children[facilitiesCurrentImageIndex].classList.add('active-dot');
		}

		function slide() {
			const containerWidth = container.offsetWidth;
			const position = -facilitiesCurrentImageIndex * containerWidth;
			facilitiesSlider.style.transform = `translateX(${position}px)`;

			const dots = facilitiesSliderDots.querySelectorAll('.facilities-slider-dot');
			dots.forEach((dot, index) => {
				dot.classList.remove('active-dot');
				if (index === facilitiesCurrentImageIndex) {
						dot.classList.add('active-dot');
				}
			});
		}

		window.addEventListener('resize', updateFacilitiesSliderSize);

		updateFacilitiesSliderSize();
});
	



