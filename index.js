document.addEventListener('DOMContentLoaded', function () {
	const swiperWrapper = document.querySelector('.swiper-wrapper')
	const swiperSlides = document.querySelectorAll('.swiper-slide')
	const pagination = document.querySelector('.swiper-pagination')

	let currentSlide = 0

	function goToSlide(slideIndex) {
		if (slideIndex < 0 || slideIndex >= swiperSlides.length) return
		currentSlide = slideIndex
		swiperWrapper.style.transform = `translateX(-${currentSlide * 100}%)`
		updatePagination()
	}

	function updatePagination() {
		const paginationSpans = pagination.querySelectorAll('span')
		paginationSpans.forEach((span, index) => {
			if (index === currentSlide) {
				span.classList.add('active')
			} else {
				span.classList.remove('active')
			}
		})
	}

	// Create pagination bullets
	swiperSlides.forEach((slide, index) => {
		const bullet = document.createElement('span')
		bullet.addEventListener('click', () => {
			goToSlide(index)
		})
		pagination.appendChild(bullet)
	})

	// Initial setup
	updatePagination()
})
