var flag1 = 0;
var noThumbs = false;
//console.log(video_mode)

function onYouTubeIframeAPIReady() {

	utilsController.youtubeReady(), vidController.initVid(ytID)
}

function onPlayerReady(e) {
	isLoaded = true;
}

function onPlayerStateChange(e) {
	0 === e.data && (_winFocus = false)
}

function stopVideo() {
	if (mp4Player == 'false') {
		trailerVidPlayer.stopVideo()
	}
}

function pauseVideo() {
	if (mp4Player == 'false') {
		trailerVidPlayer.pauseVideo()
	} else {
		videoPlayerHtml.pause();
	}
}

function playVideo() {
	if (mp4Player == 'false') {
		trailerVidPlayer.playVideo()
	}
}
var trailerVidPlayer, globalController = {},
	vidController, isLoaded = false,
	ytID = "",
	_navInit = false;


var utilsController = (function () {
	var _obj = {};
	var apiReady = false;
	var title, description, siteUrl;

	function _init() {
		//console.log('utils init');

		//    window.addEventListener("blur", function() {
		//     //console.log('onblur');
		//     //if(isLoaded && _winFocus) 
		//     try {
		//         pauseVideo();
		//         pauseHomeVideo();
		//     } catch (err) {}

		// });
		// Set the name of the hidden property and the change event for visibility
		var hidden, visibilityChange;
		if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
			hidden = "hidden";
			visibilityChange = "visibilitychange";
		} else if (typeof document.msHidden !== "undefined") {
			hidden = "msHidden";
			visibilityChange = "msvisibilitychange";
		} else if (typeof document.webkitHidden !== "undefined") {
			hidden = "webkitHidden";
			visibilityChange = "webkitvisibilitychange";
		}


		// If the page is hidden, pause the video;
		// if the page is shown, play the video
		function handleVisibilityChange() {
			if (document[hidden]) {
				try {
					pauseVideo();
				} catch (err) { }


			} else { }
		}

		// Warn if the browser doesn't support addEventListener or the Page Visibility API
		if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {
			console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
		} else {
			// Handle page visibility change   
			document.addEventListener(visibilityChange, handleVisibilityChange, false);
		}
		window.onfocus = function () {
			//console.log('onfocus');
			$('a').blur();
			// $('.mouse-over').blur();
			//if(isLoaded && _winFocus) playVideo();
		}

	}



	function _youtubeReady() {
		apiReady = true;
	}

	function _checkYouTube() {
		return apiReady;
	}


	_obj.init = _init;
	_obj.youtubeReady = _youtubeReady;
	_obj.checkYouTube = _checkYouTube;



	return _obj;

}());





vidController = function () {
	function _init() {
		_vidInit = true;
		/**/
		_win = $(window);
		_trailer = $("#trailer");
		_trailerVid = $("#trailerVid");
		_trailerWrap = _trailer.find('.trailer-wrap');
		_trailerNav = $('#trailerNav');
		_trailerToggle = _trailer.find('.trailer-toggle');
		_trailerLinks = _trailerNav.find('.trailer-link');

		//$("#in-depth-trailer");
		//$("#reg-trailer");
		_trailerLinks.on("mouseenter", function () { /*to mahe hover effect*/
			$(this).find(".trailer-title").css("opacity", 1)
		});
		_trailerLinks.on("mouseleave", function () {
			$(this).find(".trailer-title").css("opacity", 0)
		});
		_trailerLinks.on("click", function () {
			_trailerLinks.removeClass("active");
			$(this).addClass("active");
			_initVid($(this).attr("vid-id"), '140');
		});
		if (flag1 == 0) {
			ytID = $(".trailer-link:first-child").attr("vid-id");
			_initVid(ytID);

		}
		flag1 = 1;
		/*alert($(".trailer-link:first-child").attr("vid-id"));*/


		_trailerToggle.on("click", function () {

			$(this).toggleClass('open');
			$(this).toggleClass('closed');

			_trailerNav.toggleClass('hide');
			$("#trailer #trailer-buttons").toggleClass('hide');

			if (video_mode == 'carousel') {
				video_mode = "fullscreen";

			} else if (video_mode = "fullscreen") {
				video_mode = 'carousel';

			}
			//resize();

			if (video_mode == 'carousel') {
				var openHeight = _win.height() - (_trailerNav.height() + $('.header').height() + $('.footer-centered').outerHeight() + _trailerToggle.height());
				_trailerWrap.css('height', (openHeight - 25));

			} else {
				var openHeight = _win.height() - ($('.header').height() + $('.footer-centered').outerHeight() + _trailerToggle.height());
				_trailerWrap.css('height', (openHeight - 25));


			}


		});

		var openHeight = _win.height() - _trailerNav.height();
		_trailerWrap.css('height', (openHeight - 90));

		$(window).resize(function () {

			resize();

		});
		/*_vidInit = true;*/
	}

	function checkApiNow() {
		apiReady = utilsController.checkYouTube();
		if (apiReady) {
			_initVid(ytID);
			clearInterval(checkApi);
		}
	}

	var videoYTSection = _x('trailerVid');
	var videoMp4Section = _x('trailerVidDefault');

	function _initVid(vidId) {

		if (mp4Player == 'false') {

			trailerVidPlayer && trailerVidPlayer.loadVideoById ? trailerVidPlayer.loadVideoById(vidId) :
				window.YT.ready(function () {
				var youtubehost = '';
				//var val = OnetrustActiveGroups;
				//if ( (val.indexOf(",tpv,") > -1)) {
					//youtubehost = 'https://www.youtube.com';
				//}
				//else {
					//youtubehost = 'https://www.youtube-nocookie.com';
				//}
					trailerVidPlayer = new window.YT.Player("trailerVid", {
						height: "100%",
						width: "100%",
						videoId: vidId,
						host: 'https://www.youtube-nocookie.com',
						playerVars: {
							html5: 1,
							rel: 0,
							playsinline: 1,
							controls: 1,
							enablejsapi: 1,
							showinfo: 0,
							suggestedQuality: "hd720",
							wmode: "transparent",
							autoplay: 0
						},
						events: {
							onReady: onPlayerReady,
							onStateChange: onPlayerStateChange
						}
					})
				});

		} else {
			videoYTSection.style.display = 'none';
			videoMp4Section.style.display = 'block';
			var vidPlayer = videoMp4Section.getElementsByTagName('video')[0];
			vidPlayer.src = vidId;

		}

	} // End of Init Vid

	function resize() {

		getVideoHeight();
	}

	function getVideoHeight() {

		if (video_mode == 'carousel') {

			setTimeout(function () {
				var openHeight = _win.height() - (_trailerNav.height() + $('.header').height() + $('.footer-centered').outerHeight() + _trailerToggle.height());
				_trailerWrap.css('height', (openHeight - 21));
			}, 1500);


		} else {
			var openHeight = _win.height() - ($('.header').height() + $('.footer-centered').outerHeight() + _trailerToggle.height());

			/*_trailerWrap.css('height', (openHeight - 100));*/
			/*if(isMobile){
				_trailerWrap.css('height', '92%');
				}else{*/
			/*_trailerWrap.css('height', '95%');*/
			_trailerWrap.css('height', (openHeight - 25));
			//}

		}
	}

	function checkApiNow() {

		apiReady = utilsController.checkYouTube();
		if (apiReady) {

			_initVid(ytID);
			clearInterval(checkApi);
		}
	}
	var _obj = {};
	var _win, _trailer, _trailerVid, _trailerWrap, _trailerNav, _trailerLinks, _trailerToggle;
	var _vidInit = false,
		checkApi;

	_obj.init = _init;
	_obj.setVideo = function (id, i) {
		setTimeout(function () {
			var ytID = $("#" + id);
			_trailerNav.find(".trailer-link").removeClass("active"), _trailer.addClass("active"), _initVid(_trailer.attr("vid-id")), globalController.checkVisible(i)
		}, 10);
	};

	_obj.setVid = function (id, autoplay, youtube) {
		console.log('_setVid', id);
		console.log("autoplay", autoplay);
		ytID = id;
		_youtube = youtube;
		autoPlay = autoplay;
		var apiReady = utilsController.checkYouTube();
		if (apiReady) {

			_initVid(ytID);

		} else {
			checkApi = setInterval(checkApiNow, 1000);
		}

	};
	_obj.showVid = function () {


		if (_vidInit || _init(), _winFocus = true, isLoaded) {

			if ($("body").hasClass("outdated")) return; /*to make change for ie*/
			playVideo();
			_winFocus = true;
		}
		resize();
	};
	_obj.hideVid = function () {
		_winFocus = false, isLoaded && stopVideo()
	};
	/*setTimeout(function(){
		_obj.initVid = _initVid;
		console.log("In....")
	},150);*/
	var myVar = checkStatusMp4Value();

	if (myVar == 'false' || myVar == 'true') {

		_obj.initVid = _initVid;

	}

	return _obj;


}();

function checkStatusMp4Value() {

	if (typeof mp4Player !== "undefined") {
		return mp4Player;
	} else {
		setTimeout(function () {
			checkStatusMp4Value()
		}, 2000)
	}

}
thumbController = function () {
	var e, o, i, t, _obj = {};

	function _init() {
		return true, $(window), _currentIndex = 0, _movement = 0, _max_moves = 0, _last_move = 0, _moves = 0, _position = 0, _window_width = 0, _videos = $("#trailerNav").find(".trailer-link"), $("#trailerVid"), _videoThumbs = {
			numSlides: _videos.length,
			movement: 0,
			max_moves: 0,
			position: 0,
			last_move: 0
		}, _videos.eq(0).addClass("active"), _configVideoThumbs = function () {
			var e = window.innerWidth;
			_window_width = e;
			var o = e > 1024 ? 336 : 146; /*need too bechange*/
			if (_videoThumbs.moves = 0, _videoThumbs.position = 0, $("#trailerNav").css("transform", "translateX(0)"), _videoThumbs.numSlides * o <= e) $("#trailerNav").removeClass("carousel"), $("#trailer-back").css("opacity", 0), $("#trailer-back").css("pointer-events", "none"), $("#trailer-forward").css("opacity", 0), $("#trailer-forward").css("pointer-events", "none");
			else {
				$("#trailerNav").addClass("carousel"), $("#trailer-forward").css("opacity", 1), $("#trailer-forward").css("pointer-events", "auto"), $("#trailer-back").css("opacity", 0), $("#trailer-back").css("pointer-events", "none");
				var i = Math.floor(e / o),
					t = _videoThumbs.numSlides * o;
				_videoThumbs.movement = i * o, _videoThumbs.max_moves = Math.ceil(t / _videoThumbs.movement) - 1, _videoThumbs.last_move = t - _videoThumbs.max_moves * _videoThumbs.movement - (e - _videoThumbs.movement)
			}
		}, _checkVisible = function (e) {
			var o = window.innerWidth;
			_window_width = o;
			var i = o >= 700 ? 306 : 186;
			moves = Math.ceil(i * e / _videoThumbs.movement) - 1, moves > _videoThumbs.max_moves && (moves = _videoThumbs.max_moves), moves >= 1 && (_videoThumbs.moves = moves, _videoThumbs.moves >= 1 && ($("#trailer-back").css("opacity", 1), $("#trailer-back").css("pointer-events", "auto")), _videoThumbs.moves === _videoThumbs.max_moves ? (_videoThumbs.position = _videoThumbs.movement * (moves - 1) + _videoThumbs.last_move, $("#trailer-forward").css("opacity", 0), $("#trailer-forward").css("pointer-events", "none")) : _videoThumbs.position = _videoThumbs.movement * moves, $("#trailerNav").css("transform", "translateX(-" + _videoThumbs.position + "px)"))
		}, $("#trailer-back").on("click", function () {
			_videoThumbs.moves > 0 && (_videoThumbs.moves--, _videoThumbs.moves === _videoThumbs.max_moves - 1 ? ($("#trailer-forward").css("opacity", 1), $("#trailer-forward").css("pointer-events", "auto"), _videoThumbs.position = _videoThumbs.position - _videoThumbs.last_move) : _videoThumbs.position = _videoThumbs.position - _videoThumbs.movement, 0 === _videoThumbs.moves && ($("#trailer-back").css("opacity", 0), $("#trailer-back").css("pointer-events", "none")), $("#trailerNav").css("transform", "translateX(-" + _videoThumbs.position + "px)"))
		}), $("#trailer-forward").on("click", function () {
			_videoThumbs.moves < _videoThumbs.max_moves && (_videoThumbs.moves++, 1 === _videoThumbs.moves && ($("#trailer-back").css("opacity", 1), $("#trailer-back").css("pointer-events", "auto")), _videoThumbs.moves === _videoThumbs.max_moves ? (_videoThumbs.position = _videoThumbs.position + _videoThumbs.last_move, $("#trailer-forward").css("opacity", 0), $("#trailer-forward").css("pointer-events", "none")) : _videoThumbs.position = _videoThumbs.position + _videoThumbs.movement, $("#trailerNav").css("transform", "translateX(-" + _videoThumbs.position + "px)"))
		}), setTimeout(function () {
			_configVideoThumbs()
		}, 50), $(window).resize(function () {
			setTimeout(function () {
				window.innerWidth !== _window_width && (_configVideoThumbs())
			}, 10)
		}), {
			configVideoThumbs: _configVideoThumbs,
			checkVisible: _checkVisible
		};
	}
	_obj.init = _init;

	return _obj;

}();
