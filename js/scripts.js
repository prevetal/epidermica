$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Линейка продукции
	const productLineSliders = []

	$('.product_line .swiper').each(function (i) {
		$(this).addClass('product_line_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}
		}

		productLineSliders.push(new Swiper('.product_line_s' + i, options))
	})


	// Карусель товаров
	const productsSliders = []

	$('.products .swiper').each(function (i) {
		$(this).addClass('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 26,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(this), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(this), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель отзывов
	const reviewsSliders = []

	$('.reviews .swiper').each(function (i) {
		$(this).addClass('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1328: {
					spaceBetween: 26,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.review'))
					})
				},
				resize: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.review'))
					})
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Карусель отзывов
	const adviceSliders = []

	$('.advice .swiper').each(function (i) {
		$(this).addClass('advice_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1328: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		}

		adviceSliders.push(new Swiper('.advice_s' + i, options))
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productSlider = new Swiper('.product_info .images .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			on: {
				slideChange: swiper => {
					setTimeout(() => {
						$('.product_info .images .thumbs button').removeClass('active')
						$('.product_info .images .thumbs button').eq(swiper.activeIndex).addClass('active')
					})
				}
			}
		})

		$('.product_info .images .thumbs button').click(function (e) {
			e.preventDefault()

			productSlider.slideTo($(this).data('slide-index'), 500)
		})
	}


	// Боковая колонка - Фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Товар в избранное
	$('.product .favorite_btn, .product_info .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Заказы
	$('.orders .order .head').click(function (e) {
		e.preventDefault()

		$(this).closest('.order').toggleClass('active')
		$(this).next().slideToggle(300)
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99', {
		showMaskOnHover: false
	})

	$('.form .input, .form textarea').keydown(function () {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')
		})
	})

	// Кастомный select
	$('select').niceSelect()


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal .close_btn', function (e) {
		e.preventDefault()

		Fancybox.close()
	})

	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button:not(.logout_btn)', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	$('body').on('click', '.mob_tab_btn', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.tabs_container'),
			activeTab = $(this).data('content'),
			$activeTabContent = $(activeTab),
			level = $(this).data('level')

		if (!$(this).hasClass('active')) {
			$parent.find('.mob_tab_btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		} else {
			$parent.find('.mob_tab_btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Плавная прокрутка к якорю
	// Работает и при прокрутке к табу
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 20

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		if ($('.tabs button[data-content="' + href + '"]').length) {
			const $activeTab = $('.tabs button[data-content="' + href + '"]'),
				$parent = $activeTab.closest('.tabs_container'),
				level = $activeTab.data('level')

			$parent.find('.tabs:first button, .tab_content.' + level).removeClass('active')

			$activeTab.addClass('active')
			$(href).addClass('active')
		}

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .menu .sub_menu').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})


		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('.mob_header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header').removeClass('show')
				$('.overlay').fadeOut(300)
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Закрываем всплывашку при клике на крестик во всплывашке
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Фикс. моб. шапка
	mobHeaderInit = true,
		mobHeaderHeight = $('.mob_header').outerHeight()

	$('.mob_header').wrap('<div class="mob_header_wrap"></div>')
	$('.mob_header_wrap').height(mobHeaderHeight)

	mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')


	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Фикс. моб. шапка
	typeof mobHeaderInit !== 'undefined' && mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Фикс. моб. шапка
		mobHeaderInit = false
		$('.mob_header_wrap').height('auto')

		setTimeout(() => {
			mobHeaderInit = true
			mobHeaderHeight = $('.mob_header').outerHeight()

			$('.mob_header_wrap').height(mobHeaderHeight)

			mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
				? $('.mob_header').addClass('fixed')
				: $('.mob_header').removeClass('fixed')
		}, 100)


		// Выравнивание элементов в сетке
		$('.products .row').each(function () {
			productHeight($(this), parseInt($(this).css('--products_count')))
		})


		// Перезапись ширины окна
		WW = $(window).width()
	}
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish))

		start = start + step
		finish = finish + step
	})
}