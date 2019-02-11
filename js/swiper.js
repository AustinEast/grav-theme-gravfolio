var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 1,
	paginationClickable: true,
	preloasImages: false,
	lazy: true,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});

mySwiper.on('lazyImageReady' ,() => {
	setTimeout(() => mySwiper.updateAutoHeight(), 500);
});