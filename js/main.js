var winheight = $(window).height();
var syca_getWindowURLTeaser = window.location.href;
var syca_lastParaOfUrlTeaser = syca_getWindowURLTeaser.substring(syca_getWindowURLTeaser.lastIndexOf('/') + 1);
var syca_getSplitParaTeaser = syca_lastParaOfUrlTeaser.split("?");
if (isMobile || isTablet || isiPad || isAndroidTablet) {
	//	console.log("You are using Mobile");
	var value = "Mobile";
} else {
	//console.log("You are using Desktop");
	var value = "Desktop";
}


$(document).ready(function () {

	if (mp4Player == 'false') {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	} // Init YT if MP4 Player is off

	$('body').on("click mousedown mouseup focus blur keydown change mouseup click dblclick mousemove mouseover mouseout mousewheel keydown keyup keypress textInput touchstart touchmove touchend touchcancel resize scroll zoom focus blur select change submit reset", function (e) {
//		console.clear();
	});

	// IE block	
	function isIE() {
		var myNav = navigator.userAgent.toLowerCase();
		return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() && isIE() <= 10) {
		// is IE version less than 10

		document.getElementById('olderbrowser').style.display = "block";
		document.getElementsByTagName("body")[0].style.overflow = 'hidden';


	} else {
		document.getElementById('olderbrowser').style.display = "none";
	}


}); //End Document Ready

$(function () {
	$('#navIcon').click(function () {
		setTimeout(function () {
			$('#navIcon').toggleClass('open');
			$('nav').toggleClass('activatedMenus');

			if (isMobile || isTablet || isiPad || isAndroidTablet || isIPadPro) {
				$('body').css('overflow-y', 'hidden');
			}
		}, 100);
	});

	$(".nav-container").click(function (e) {
		var target = $(e.target);

		if (($(window).width() <= 1024 || $(window).width() == 1138) && target.is(".press-anchor")) {
			$(".sub-menu").toggleClass("sub-menu-toggle");

		} else {
			$("#navIcon").toggleClass('open');
			$(".sub-menu").addClass("sub-menu-toggle");
			$('nav').toggleClass('activatedMenus');
			if (isMobile || isTablet || isiPad || isAndroidTablet || isIPadPro) {
				$('body').css('overflow-y', 'auto');
			}
		}
	});

	// Credits
	$("#btnCredits").on("click", function () {
		$("#containerCredits").slideToggle();
	});

	$("#btnCreditsCenter").on("click", function () {
		$("#containerCredits").slideToggle();
	});
	$("#closeCredits").on("click", function () {
		creditClick = true;
		$("#containerCredits").slideToggle();
		$("#home>div>div").removeClass("hidden");
	});

	// Share
	$("#btnShare, #btnShareMobile").on("click", function () {
		$("#containerShare").slideToggle();
	});
	$("#closeShare").on('click', function () {

		$("#containerShare").slideToggle();
	});

	// Save to Calender
	$(".save-btn-wrapper")
		.mouseout(function () {
			$(this).css("transform", "translateY(0)");
		})
		.mouseover(function () {
			$(this).css("transform", "translateY(-100%)");
		});

	var checkCalenderClickOpen = true;

	$(".cta-save-btn").click(function () {
		$(".save-btn-wrapper").css("transform", "translateY(-100%)");
		checkCalenderClickOpen = false;
		setTimeout(function () {
			checkCalenderClickOpen = true;
		}, 200);
	});
	$(".home-wrapper,body").click(function () {
		if (checkCalenderClickOpen) {
			$(".save-btn-wrapper").css("transform", "translateY(0)");
		}

	});


	/*Code to change url on click and make outer link anchor tag active*/

	/*$(".outer-link a").on("click", function () {
	    var target_link = $(this).data('link');
	    window.open(target_link);
	    $(".nav-li.active").removeClass("active");
	    $('.nav-ul li a[href="#home"]').tab('show');
	    $(".nav-li.active").removeClass("active");
	    $(this).parents(".outer-link").addClass("active");
	});*/

	//Add clicked tab at the end of url

	/*var hash = window.location.hash;
	if (hash) {
	    $('.nav-ul li a[href="' + hash + '"]').tab('show');
	}

	$('.nav-li a').click(function (e) {
	    window.location.hash = this.hash;
	});*/
	/*Code to change url on click and make outer link anchor tag active*/

	var partnersId = document.getElementById('partners');
	var partnerScrollPos = partnersId.scrollTop;

	partnersId.onscroll = function () {
		myFunction();
	};

	function myFunction() {
		partnerScrollPos = partnersId.scrollTop;

	}

	var gamesId = document.getElementById('games');
	var gamesScrollPos = gamesId.scrollTop;

	gamesId.onscroll = function () {
		myGamesFunction();
	};

	function myGamesFunction() {
		gamesScrollPos = gamesId.scrollTop;

	}

	var synopsisId = document.getElementById('synopsis');
	var synopsisScrollPos = synopsisId.scrollTop;

	synopsisId.onscroll = function () {
		mySynopsisFunction();
	};

	function mySynopsisFunction() {
		synopsisScrollPos = synopsisId.scrollTop;

	}



	$('.nav-ul').on('click', '.navigation-check', function (e) {
		//console.log(target)
		target = $(e.target).attr("href");
		if (!window.BKTAG) {

			window.bk_async = function () {
				window.bk_allow_multiple_calls = true;
				window.bk_use_multiple_iframes = true;
				bkDataToSend(target.substring(target.indexOf('#') + 1, target.length));
			}

		} else {

			bkDataToSend(target.substring(target.indexOf('#') + 1, target.length));
		}
		//bluKieTagging(target.substring(target.indexOf('#') + 1, target.length));
		//bluKieTagging('synopsis');
		if (target == '#tickets' && !($(".check-tickets").hasClass("active"))) {
			if (syca_ticketingInitLoad) {
				syca_ticketingInitLoad = false;
			}
		}

		$(".nav-container .nav-li").removeClass("active");
		$(".nav-container .nav-li").find('a').removeClass("active");
		this.parentNode.classList.add("active");


		setTimeout(function () {
			$(".nav-li").removeAttr("style");
			$('.nav-ul').find('.active').css('background-color', navactivetabcolor);

		}, 50);
		//console.log("mp4Player :"+ mp4Player)
		if (mp4Player == 'true' && target != '#trailer') {
			videoPlayerHtml.pause();
		} else if (mp4Player == 'true' && target == '#trailer') {
			videoPlayerHtml.play();
		}
		if (target == '#partners' || target == '#synopsis' || target == '#games' || target == '#home' || target == '#trailer' || target == '#gallery' || target == '#characterart' || target == '#shop' || target == '#tickets') {
			//create Deeplink
			if (target == '#home') {
				console.log("Condition Home Click", syca_homeTrackingFlagOnOff);
				if (syca_homeTrackingFlagOnOff) {
					// createFloodlightTagHome();
					syca_homeTrackingFlagOnOff = false;
				}
				window.history.pushState({
					"html": (window.location.href.split('?')[0]),
					"pageTitle": ""
				}, "", (window.location.href.split('?')[0]));
			} else {
				var dvalue = target.substring(target.indexOf('#') + 1, target.length);
				window.history.pushState({
					"html": "?" + dvalue,
					"pageTitle": ""
				}, "", "?" + dvalue);
			}

			checkHeight();
		}


		if (target == '#partners' || target == '#synopsis' || target == '#games' || target == '#home' || target == '#trailer' || target == '#gallery' || target == '#characterart' || target == '#tickets') {

			window.scrollTo(0, 0);
			if (gamesScrollPos != 0) {
				gamesId.scrollTop = 0;
			}
			if (partnerScrollPos != 0) {
				partnersId.scrollTop = 0;
			}
			if (synopsisScrollPos != 0) {
				synopsisId.scrollTop = 0;
			}
		}


		if (target == '#gallery') {
			Gallery.init();
			var galleryImage = [
				'images/gallery/img1.jpg',
				'images/gallery/img2.jpg',
				'images/gallery/img3.jpg',
				'images/gallery/img4.jpg',
				'images/gallery/img5.jpg',
				'images/gallery/img6.jpg',
				'images/gallery/img7.jpg',
				'images/gallery/img8.jpg',
				'images/gallery/img9.jpg'
			]

			loadImages(galleryImage);
			//$(".footer").hide();

			//when other link clicked then stop the video
			if (flag1 == 1) {
				stopVideo();
			}

		} else if (target == '#trailer') {

			//$(".footer").hide();

			if (flag1 == 0) { //when video gallery first time loads
				utilsController.init();
				var apiReady = utilsController.checkYouTube();
				thumbnailController = thumbController.init();
				thumbnailController.configVideoThumbs();
				vidController.showVid();

			} else {

				//when click on video gallery button by clicking other link

				/*video_mode = "carousel";*/
				utilsController.init();
				var apiReady = utilsController.checkYouTube();
				thumbnailController.configVideoThumbs();
				vidController.showVid();

			}


		} else if (target == '#tickets') {
			$(".footer").show();

			//when other link clicked then stop the video
			if (flag1 == 1) {
				stopVideo();
			}

		} else {

			if (deepLinkFlag == 1) {
				$(".footer").show();
			}

			if (flag1 == 1) //when other link clicked then stop the video
			{
				$(".footer").show();
			}

			$(".footer").show();

			if (trailerVidPlayer) {
				stopVideo();
			}

		}

	});


});

function loadImages(imgArr) {
	for (var i = 0; i < imgArr.length; i++) {
		//console.log(imgArr[i]);
		var img = new Image();
		img.src = imgArr[i];
	}
}

function changeSection(section) {

	$(".nav-li a").each(function () {
		var syca_checkHashTickets = this.href.split("#")[1];
		if (syca_checkHashTickets == section) {
			$('.nav-li a[href="#' + section + '"]').tab('show');

			$(".nav-container .nav-li").removeClass("active");
			$(".nav-container .nav-li").find('a').removeClass("active");
			this.parentNode.classList.add("active");



			if (section == 'trailer') {

				if (flag1 == 0) {

					//when video gallery first time loads
					utilsController.init();
					var apiReady = utilsController.checkYouTube();
					thumbnailController = thumbController.init();
					thumbnailController.configVideoThumbs();
					vidController.showVid();

				} else {

					//when click on video gallery button by clicking other link
					utilsController.init();
					var apiReady = utilsController.checkYouTube();
					thumbnailController.configVideoThumbs();
					vidController.showVid();

				}

				window.history.pushState({
					"html": "?" + 'trailer',
					"pageTitle": ""
				}, "", "?" + 'trailer');
			}
		}
	});
}


//Desktop Watch Trailer Button
$("#watchTrailerButton, #watchTrailerButtonMobile").click(function () {
	changeSection('trailer');
});


if (isMobile || isTablet || isiPad || isAndroidTablet || isIPadPro) {
	$("body").css("overflow", "auto");
}

function checkHeight() {
	var footerHeight = $('.footer-centered').outerHeight();
	var navHeight = $('.header').outerHeight();
	var closeBtnHeight = $('#trailer-close').outerHeight();
	var reqViewportHeight = window.innerHeight - (footerHeight + navHeight);
	var IntroTrailerHeight = window.innerHeight - (closeBtnHeight + closeBtnHeight);

	$('#trailer-overlay .outer').css({
		'height': IntroTrailerHeight + 'px',
		'top': closeBtnHeight + 'px'
	});

	$('.siteBackground, #home>div').css({
		'height': reqViewportHeight + 'px',
		'top': navHeight + 'px'
	});

	if (isMobile && (window.innerWidth > window.innerHeight)) {
		$('#trailer, #gallery, #synopsis').css({
			'height': window.innerHeight + 'px',
		});
	} else {
		$('#trailer, #gallery, #synopsis').css({
			'height': reqViewportHeight + 'px'
		});
	}

}

$(window).resize(function () {
	if ($(window).width() <= 1024) {
		$('#navIcon').removeClass('open');
		$('nav').removeClass('activatedMenus');
	}
	checkHeight();
	setTimeout(function () {
		checkHeight();
	}, 350);
});


function scollPos() {

	if ($(".syca_mtsDetailsPanelForScrollMob").scrollTop() > 50) {
		// > 100px from top - show div
		if (($(window).width() <= 1024)) {
			$('.mapDirectionOption').addClass('mapDirectionOptionMob');
			$('.syca_mapCloseOnlyForMbile').addClass('syca_mapCloseOnlyForMbileAdjust');
		}
	} else {
		// <= 100px from top - hide div
		if (($(window).width() <= 1024)) {
			$('.mapDirectionOption').removeClass('mapDirectionOptionMob');
			$('.syca_mapCloseOnlyForMbile').removeClass('syca_mapCloseOnlyForMbileAdjust');
		}
	}
}

/*To remove touch event from gallery comment this.addEventListener('touchstart', onTouchStart, false);  */
