// JavaScript Document
var introFlag = 1;
function getIntroTrailerID() {

	var introID = [];
	var hasIntro = false;
	var video = $(XML).find('Videos').find('Trailer');

	for (var i = 0; i < video.length; i++) {
		var temp = $(XML).find('Videos').find('Trailer')[i];

		if ($(temp).attr('visible') == 'true' && $(temp).attr('introvideo') == 'true') {

			introID.push(youtube_parser($(temp).attr('file')));
			isIntroTrailer = true;

		}

	} // end For Loop

	activeIntroVideoCount = introID.length;
	if (isIntroTrailer == true && isDeeplink == false) {
		return introID[0];
	} else {
		return false;
	}


} //End getIntroTrailerID


function initIntroTrailer() {

//	$('#videoPlayer').html('<a href="https://youtu.be/jBa_aHwCbC4" target="_blank"><img src="images/trailer.jpg" class="img-responsive" alt="Intro Trailer" style="height: 100%;width: 100%;object-fit: contain;"></a>');
//	$('#trailer-overlay').modal('show');
//	$('#loader-overlay').modal('hide');

	$('#videoPlayer').html("");
	var yhost = '';

	window.YT.ready(function () {
		//var val = OnetrustActiveGroups;
		//if ( (val.indexOf(",tpv,") > -1)) {
			//yhost = 'https://www.youtube.com';
		//} else {
			//yhost = 'https://www.youtube-nocookie.com';
		//}
		player = new window.YT.Player('videoPlayer', {
			videoId: youtubeId,
			host: 'https://www.youtube-nocookie.com',
			playerVars: {
				'autoplay': 0,
				'playsinline':1,
				'enablejsapi': 1,
				'version': 3,
				'rel': 0
			},
			events: {
				'onReady': onYTPlayerReady,
				'onStateChange': onYTPlayerStateChange
			}
		});
	});
	return true;
} // End Of initIntroTrailer

/*function onYouTubeIframeAPIReady() {
	//console.log(youtubeId);
  
}*/

function onYTPlayerReady(event) {
	//console.log("isIntro ***");

	if (isIntroTrailer) {
		if (player) {
			$('#trailer-overlay').modal('show');
			$('#loader-overlay').modal('hide');
			player.playVideo();

		}
	}
}

function onYTPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {

		if (introFlag === 1) {
			if (player) {
				//player.loadVideoById("");
				introFlag++;
			}
		}
		//console.log("Intro Falg 2....");
		// if (isIntroTrailer) {
		// 	player.pauseVideo();
		// 	$('#trailer-overlay').modal('hide');
		// 	if (legalpopup == 'true') {
		// 		$("#containerCredits").slideToggle();
		// 		setTimeout(function () {
		// 			if (creditClick == false) {
		// 				$("#containerCredits").slideToggle();
		// 			}
		// 		}, 3000);
		// 	}
		// 	isIntroTrailer = false;
		// }

	}
}

$(document).on("visibilitychange", function () {
	if (isIntroTrailer) {
		if (player) {
			if (document.hidden) {
				player.pauseVideo();
			}
		}
	}
});
$(document).on("visibilitychange", function () {
	if (player) {
		if (document.hidden) {
			player.pauseVideo();
		}
	}
});

$("#trailer-close").click(function () {

	if (player) {
		//For YT Player

		$('#videoPlayer').attr("src", "");
		player.pauseVideo();
	} else {
		//For MP4 Player
		$('#videoPlayer').html('');
	}

	if (isIntroTrailer == true) {
		if (!isMobile && !isTablet && !isiPad && !isAndroidTablet && backgroundvideo == 'true') {
			var bgVidVar = _x('bgVidPlayer');
			bgVidVar.play();
		}
		if (legalpopup == 'true') {
			$("#containerCredits").slideToggle();
			setTimeout(function () {
				if (creditClick == false) {
					$("#containerCredits").slideToggle();
					$("#home>div>div").removeClass("hidden");
				}
			}, 3000);
		} else {
			setTimeout(function () {
				$("#home>div>div").removeClass("hidden");
			}, 300);
		}
		isIntroTrailer = false;
	}
	isIntroTrailer = false;
	registerExternalLinks();
});
