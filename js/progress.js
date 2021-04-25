(function ($) {
	function Preload(imgs, options) {
		this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
		this.opts = $.extend({}, Preload.DEFAULT, options);

		this._unordered();
	}

	Preload.DEFAULT = {
		each: null,
		all: null,
	};

	Preload.prototype._unordered = function () {

		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			len = imgs.length;

		$.each(imgs, function (i, src) {
			if (typeof src != 'string') return;

			var imgObj = new Image();

			$(imgObj).on('load error', function () {
				opts.each && opts.each(count);

				if (count >= len - 1) {
					opts.all && opts.all();
				}
				count++;
			})
			imgObj.src = src
		})

		$('.btn').on('click', function () {
			if ($(this).data('control') === "prev") {
				index = Math.max(0, --index);
			} else {
				index = Math.min(len - 1, ++index);
			}
			document.title = (index + 1) + '/' + len;
			$('#img').attr('src', imgs[index]);
		})
	};

	$.extend({
		preload: function (imgs, opts) {
			new Preload(imgs, opts);
		}
	});
})(jQuery);

var imgs = [
	'images/tt.png',
	'images/tt_small.png',
	'images/bg.jpg',
	'images/bg_portrait.jpg',
	'images/bg_landscape.jpg',
	'images/legal/billingblock.png'
];

var index = 0,
	len = imgs.length,
	$progress = $('.progress-custom');

$.preload(imgs, {
	each: function (count) {

		var increaseWidth = Math.round((count) / len * 100) + '%';
		$('.progres-bar').css('width', increaseWidth);
		$('.progress-text').html(increaseWidth);
	},
	all: function () {
		//$('.loading').hide();
		$('.progres-bar').css('width', '100%');
		$('.progress-text').html('100%');
		$('#wrapper').css('display', 'block');
		initSite();
		//console.log(initSiteValue);


	}
})
