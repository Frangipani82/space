// variable Global declairation
var XML, textentries, navbgcolor, navhovercolor, navtextcolor, navbgcolormobile, navactivetabcolor, navsymbolcolor, footerbgcolor, footerlinktextcolor, footercopyrightcolor, footercenterlogo, footerlinkhovercolor, footertypecenter, synopsistextcolor, synopsisbgcolor, synopsisscrollbarcolor, synopsistitletextcolor;
var backgroundvideo, backgroundvideopath, desktopPosition, taglineimage_d_v, ttimage_d_v, releasedateimage_d_v, taglineimagemobile_m_v, ttimagemobile_m_v, releasedateimagemobile_m_v;
var partner_pagebgcolor, partner_pagetitletextcolor, partner_logobordercolor, partner_logobgcolor, partner_pagetextcolor, app_pagebgcolor, app_pagetitletextcolor, app_logobordercolor, app_pagetextcolor, app_logobgcolor, button_color, popupboxbuttoncolor, popupboxtextcolor, popupboxbgcolor, popupboxbordercolor;
var shoptextcolor, shoptitletextcolor, shoptitlebordercolor, shopbuttoncolor, shopbuttontextcolor, Buynowtext, Buynowtextfontsize, shopbuttonbordercolor, productbordercolor, taglinetextcolor, titletextcolor;
var press_textColor, press_bgColor, press_hoverColor;
var billingbgcolor, billingtextcolor, billingtexthovercolor, billingcopyrighttextcolor, billingxcolor;
var bgImageSetting_bgpos = '';
var bgImageSetting_bgsize = '';
var socialFollow = {};
var legalpopup;
var mp4Player;
var mp4PlayerState;
var videoPlayerHtml = document.getElementById('htmlPlayer');
var syca_homeTrackingFlagOnOff = true;
var syca_ticketsTrackingFlagOnOff = true;

//Intro Trailer Declairation
var player;
var videoarray = [];
var youtubeId = "";
var mp4PlayerPath = "";
var isIntroTrailer = false;
var checkIntroTrailerValue, checkIntroTrailerPath;
var activeIntroVideoCount = 0;
var activeVideoCount = 0;
var video_mode = "carousel";
var partnerData = [];
var creditClick = false;
var isDeeplink = false;
var mp4PlayerFlag = 0;
var popupExternalLink = document.getElementById('externalLinkPopup');
var goBackBtn = document.getElementsByClassName('go-back')[0];
var continueBtn = document.getElementsByClassName('continue')[0];
var continueAnchor = continueBtn.getElementsByTagName('a')[0];
//Deeplink 
var deepLinkFlag = 0;
var urlBrowser = window.location.href;


var deeplink;
if (sycaAllBasicDataHome.ticketingSectionOnOff) {
	if (syca_ticketsTrackingFlagOnOff) {
		//createFloodlightTagTickets();
		syca_ticketsTrackingFlagOnOff = false;
	}

	bindCampaignDataHome();
	getCampaignTextHome();
	getReferrerTextHome();
	console.log("Condition 1");
	if (urlBrowser.indexOf("?") > -1) {
		if (urlBrowser.indexOf("?campaign") > -1) {
			console.log("Condition 2");
			deeplink = "tickets";
			window.history.pushState({
				"html": "?" + "tickets",
				"pageTitle": ""
			}, "", "?" + "tickets");
		} else {
			console.log("Condition 3");
			// var deeplinkvalue = urlBrowser.substring(urlBrowser.indexOf("?") + 1, urlBrowser.length);
			// var indexValue = deeplinkvalue.indexOf('&');
			// if (indexValue >= 0) {
			// 	deeplink = deeplinkvalue.substring(0, indexValue);
			// } else {
			// 	deeplink = deeplinkvalue;
			// }
			var deeplinkvalue = urlBrowser.substring(urlBrowser.indexOf("?") + 1, urlBrowser.length);
			console.log("deeplinkvalue",deeplinkvalue);
			//if(deeplinkvalue == "synopsis" || deeplinkvalue == "gallery" || deeplinkvalue == "trailer"){
				if((urlBrowser.indexOf("?synopsis") > -1) || (urlBrowser.indexOf("?gallery") > -1) || (urlBrowser.indexOf("?trailer") > -1)){
				console.log("Condition 31");
			
				var indexValue = deeplinkvalue.indexOf('&');
				if (indexValue >= 0) {
					deeplink = deeplinkvalue.substring(0, indexValue);
				} else {
					deeplink = deeplinkvalue;
				}

			}
			else{
				console.log("Condition 32");
				deeplink = "tickets";
				window.history.pushState({
				"html": "?" + "tickets",
				"pageTitle": ""
			}, "", "?" + "tickets");

			}


			
		}
	} else {
		console.log("Condition 4");
		deeplink = "tickets";
		window.history.pushState({
			"html": "?" + "tickets",
			"pageTitle": ""
		}, "", "?" + "tickets");
	}

}
else {
	if (syca_homeTrackingFlagOnOff) {
		//createFloodlightTagHome();
		syca_homeTrackingFlagOnOff = false;
	}
	if (!sycaAllBasicDataHome.siteIsForESB) {
		bindCampaignDataHome();
		getCampaignTextHome();
		getReferrerTextHome();
	}
	console.log("Condition 5");
	var deeplinkvalue = urlBrowser.substring(urlBrowser.indexOf("?") + 1, urlBrowser.length);
	var deeplink;
	var syca_ticketingInitLoad = true;

	var indexValue = deeplinkvalue.indexOf('&');
	if (indexValue >= 0) {
		deeplink = deeplinkvalue.substring(0, indexValue);

	} else {
		deeplink = deeplinkvalue;
	}

}


var syca_ticketingInitLoad = true;


/*if(deeplink === 'trailer' || deeplink === 'synopsis' || deeplink === 'gallery' || deeplink === 'partners' || deeplink === 'games'){
		isDeeplink = true;
	}*/

//Device Detection
var isIPadPro = /Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;
var isAndroidTablet = (navigator.userAgent.match(/android/i) && !isMobile) != null;
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isTablet = navigator.userAgent.match(/Galaxy|iPad/i) != null;
var isMobile = navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i) != null;

function initSite() {

	//call xml for initialisation
	$.ajax({
		type: "GET",
		url: "xml/index.xml",
		dataType: "xml",
		error: function () {
			//location.reload();
		},
		success: function (xml) {
			XML = xml;
			textentries = $(XML).find('TextEntries');
			var settings = $(textentries).find('settings');

			//BG Image Settings
			bgImageSetting_bgpos = $(settings).find('bgimage_settings').find('navbgsettings').text();
			bgImageSetting_bgsize = $(settings).find('bgimage_settings').find('navbgsizesettings').text();

			//MP4 Player
			mp4Player = $(settings).find('mp4_settings').find('nav').attr('visible');

			//Legal pop up
			legalpopup = $(settings).find('legalpopup_settings').find('nav').attr('visible');

			//navigation settings
			navbgcolor = $(settings).find('navigation_settings').find('navbgcolor').text();
			navhovercolor = $(settings).find('navigation_settings').find('navhovercolor').text();
			navtextcolor = $(settings).find('navigation_settings').find('navtextcolor').text();
			navbgcolormobile = $(settings).find('navigation_settings').find('navbgcolormobile').text();
			navactivetabcolor = $(settings).find('navigation_settings').find('navactivetabcolor').text();
			navsymbolcolor = $(settings).find('navigation_settings').find('navsymbolcolor').text();

			press_textColor = $(settings).find('press-multilevel-settings').find('navtextcolor').text();
			press_bgColor = $(settings).find('press-multilevel-settings').find('navbgcolor').text();
			press_hoverColor = $(settings).find('press-multilevel-settings').find('navhovercolor').text();

			//Social Follow
			socialFollow.fb = $(settings).find('social_follow_settings').find('fb').find('navbgcolor').text();
			socialFollow.fbhover = $(settings).find('social_follow_settings').find('fb').find('navhovercolor').text();
			socialFollow.twitter = $(settings).find('social_follow_settings').find('twitter').find('navbgcolor').text();
			socialFollow.twitterhover = $(settings).find('social_follow_settings').find('twitter').find('navhovercolor').text();
			socialFollow.gplus = $(settings).find('social_follow_settings').find('gplus').find('navbgcolor').text();
			socialFollow.gplushover = $(settings).find('social_follow_settings').find('gplus').find('navhovercolor').text();
			socialFollow.insta = $(settings).find('social_follow_settings').find('insta').find('navbgcolor').text();
			socialFollow.instahover = $(settings).find('social_follow_settings').find('insta').find('navhovercolor').text();
			socialFollow.ytube = $(settings).find('social_follow_settings').find('ytube').find('navbgcolor').text();
			socialFollow.ytubehover = $(settings).find('social_follow_settings').find('ytube').find('navhovercolor').text();

			//footer settings
			footertypecenter = $(settings).find('footer_settings').find('footertypecenter').attr('visible');
			footercenterlogo = $(settings).find('footer_settings').find('footercenterlogo').attr('visible');
			footerbgcolor = $(settings).find('footer_settings').find('footerbgcolor').text();
			footerlinktextcolor = $(settings).find('footer_settings').find('footertextcolor').text();
			footercopyrightcolor = $(settings).find('footer_settings').find('footercopyrighttextcolor').text();
			footerlinkhovercolor = $(settings).find('footer_settings').find('footertexthovercolor').text();

			//Credits / Billing Settings
			billingbgcolor = $(settings).find('footer_settings').find('billingblock').find('billingbgcolor').text();
			billingtextcolor = $(settings).find('footer_settings').find('billingblock').find('billingtextcolor').text();
			billingtexthovercolor = $(settings).find('footer_settings').find('billingblock').find('billingtexthovercolor').text();
			billingcopyrighttextcolor = $(settings).find('footer_settings').find('billingblock').find('billingcopyrighttextcolor').text();
			billingxcolor = $(settings).find('footer_settings').find('billingblock').find('billingxcolor').text();

			//Synopsis settings
			synopsistextcolor = $(settings).find('synopsis_settings').find('synopsistextcolor').text();
			synopsisbgcolor = $(settings).find('synopsis_settings').find('synopsisbgcolor').text();
			synopsistitletextcolor = $(settings).find('synopsis_settings').find('synopsistitletextcolor').text();

			//background video
			backgroundvideo = $(settings).find('background_video_settings').find('backgroundvideo').attr('visible');
			backgroundvideopath = $(settings).find('background_video_settings').find('backgroundvideo').text();

			//TT, Tag-line, release date position
			//desktop
			desktopPosition = $(settings).find('background_image_settings').find('imagePosition').text();
			taglineimage_d_v = $(settings).find('background_image_settings').find('taglineimage').attr('visible');
			ttimage_d_v = $(settings).find('background_image_settings').find('ttimage').attr('visible');
			releasedateimage_d_v = $(settings).find('background_image_settings').find('releasedateimage').attr('visible');

			//mobile
			taglineimagemobile_m_v = $(settings).find('background_image_settings').find('taglineimagemobile').attr('visible');
			ttimagemobile_m_v = $(settings).find('background_image_settings').find('ttimagemobile').attr('visible');
			releasedateimagemobile_m_v = $(settings).find('background_image_settings').find('releasedateimagemobile').attr('visible');

			//Partner Page Settings
			partner_pagetitletextcolor = $(settings).find('partner_page_settings').find('partnertitletextcolor').text()
			partner_pagebgcolor = $(settings).find('partner_page_settings').find('pagebgcolor').text();
			partner_logobordercolor = $(settings).find('partner_page_settings').find('logobordercolor').text();
			partner_logobgcolor = $(settings).find('partner_page_settings').find('logobgcolor').text();
			partner_pagetextcolor = $(settings).find('partner_page_settings').find('pagetextcolor').text();
			popupboxbuttoncolor = $(settings).find('partner_page_settings').find('popupboxbuttoncolor').text();
			popupboxtextcolor = $(settings).find('partner_page_settings').find('popupboxtextcolor').text();
			popupboxbgcolor = $(settings).find('partner_page_settings').find('popupboxbgcolor').text();
			popupboxbordercolor = $(settings).find('partner_page_settings').find('popupboxbordercolor').text();

			//App/Game Page Settings
			app_pagetitletextcolor = $(settings).find('App_page_settings').find('gametitletextcolor').text();
			app_pagebgcolor = $(settings).find('App_page_settings').find('pagebgcolor').text();
			app_logobordercolor = $(settings).find('App_page_settings').find('logobordercolor').text();
			app_logobgcolor = $(settings).find('App_page_settings').find('logobgcolor').text();
			app_pagetextcolor = $(settings).find('App_page_settings').find('pagetextcolor').text();

			//Shop Section
			shoptextcolor = $(settings).find('shop_page_settings').find('shoptextcolor').text();
			shoptitletextcolor = $(settings).find('shop_page_settings').find('shoptitletextcolor').text();
			shoptitlebordercolor = $(settings).find('shop_page_settings').find('shoptitlebordercolor').text();
			shopbuttoncolor = $(settings).find('shop_page_settings').find('shopbuttoncolor').text();
			shopbuttontextcolor = $(settings).find('shop_page_settings').find('shopbuttontextcolor').text();
			Buynowtext = $(textentries).find("shop").find('shoptext').find('buynow').text();
			Buynowtextfontsize = $(textentries).find("shop").find('shoptext').find('buynow').attr('size') + 'px';
			shopbuttonbordercolor = $(settings).find('shop_page_settings').find('shopbuttonbordercolor').text();
			productbordercolor = $(settings).find('shop_page_settings').find('productbordercolor').text();
			taglinetextcolor = $(settings).find('shop_page_settings').find('taglinetextcolor').text();
			titletextcolor = $(settings).find('shop_page_settings').find('titletextcolor').text();

			//Button Color
			button_color = $(settings).find('site_button_color').find('navbgcolor').text();

			if (footertypecenter == 'false') {
				$('.footer-default').removeClass('hidden');
				$('.footer-centered').addClass('hidden');
			} else if (footertypecenter == 'true') {
				$('.footer-default').addClass('hidden');
				$('.footer-centered').removeClass('hidden');
			}

			var xmlText = xmlDrivenText();

			//Set Video Mode fullscreen/carousel
			if (activeVideoCount <= 1) {
				video_mode = "fullscreen";
				$('#trailerNav').css('display', 'none');
				$('.trailer-toggle').css('display', 'none');
			} else {
				video_mode = "carousel";
			}

			if (mp4Player == 'false') {
				//YT Player Settings
				checkIntroTrailerValue = getIntroTrailerID();

				var ytState;
				var settingsvalue = applySettings();

				if (checkIntroTrailerValue && settingsvalue == true && xmlText == true) {
					youtubeId = checkIntroTrailerValue;
					setTimeout(function () { ytState = initIntroTrailer(); }, 2500);

				} else {
					if (activeIntroVideoCount == 0 && checkIntroTrailerValue == false) {

						if (!player) {
							$('#loader-overlay').modal('hide');
							if (legalpopup == 'true') {
								$("#containerCredits").slideToggle();
								setTimeout(function () {
									if (creditClick == false) {
										$("#containerCredits").slideToggle();
										$("#home>div>div").removeClass("hidden");
									}
								}, 3000);
							}
							isIntroTrailer = false;
							registerExternalLinks();
						}
					} else if (isDeeplink == true && checkIntroTrailerValue == false) {

						if (!player) {
							$('#loader-overlay').modal('hide');
							if (legalpopup == 'true') {
								$("#containerCredits").slideToggle();
								setTimeout(function () {
									if (creditClick == false) {
										$("#containerCredits").slideToggle();
										$("#home>div>div").removeClass("hidden");
									}
								}, 3000);
							}
							isIntroTrailer = false;
						}
					} // End of Else

				}
			} else {
				//MP4 Player Settings
				checkIntroTrailerPath = getIntroTrailerPath();
				var settingsvaluemp4 = applySettings();
				if (checkIntroTrailerPath && settingsvaluemp4 == true && xmlText == true) {
					mp4PlayerPath = checkIntroTrailerPath;
					mp4PlayerState = initIntroMp4Player();
				} else {

					if (activeIntroVideoCount == 0 && checkIntroTrailerPath == false) {
						$('#loader-overlay').modal('hide');

						if (legalpopup == 'true') {
							$("#containerCredits").slideToggle();
							setTimeout(function () {
								if (creditClick == false) {
									$("#containerCredits").slideToggle();
								}
							}, 3000);
						}
					} else if (isDeeplink == true && checkIntroTrailerPath == false) {
						$('#loader-overlay').modal('hide');

						if (legalpopup == 'true') {
							$("#containerCredits").slideToggle();
							setTimeout(function () {
								if (creditClick == false) {
									$("#containerCredits").slideToggle();
								}
							}, 3000);
						}
					} // End of Else
				}
			}

			//Deeplink Execution
			if (isDeeplink) {
				if (deeplink == 'trailer' || deeplink == 'gallery') {
					checkHeight();

					if (deeplink == 'gallery') {
						Gallery.init();
					} else if (deeplink == 'trailer') {
						utilsController.init();
						var apiReady = utilsController.checkYouTube();
						thumbnailController = thumbController.init();
						thumbnailController.configVideoThumbs()
						vidController.showVid();
					}

					//$(".footer").hide();
					$('#home').removeClass('in active');
					$('#' + deeplink).addClass('in active');
					deepLinkFlag = 1;
				} else {
					$('#home').removeClass('in active');
					if (deeplink == "tickets") {
						if (syca_ticketingInitLoad) {
							syca_ticketingInitLoad = false;
						} 
					}
					$('#' + deeplink).addClass('in active');
					checkHeight();
				}

				registerExternalLinks();
			}
		} // End Of Success Func		

	}); // end of ajax call



} //Init Site Function End

function youtube_parser(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);
	if (match && match[7].length == 11) {
		return match[7];
	} else {
		alert("Url Is Incorrect");
	}
}

function _x(id) {
	return document.getElementById(id);
}

function _t(tag) {
	return document.getElementsByTagName(tag)[0];
}



function applySettings() {

	//NavBar Settings
	var header = _t('header');
	header.style.backgroundColor = navbgcolor;
	//mobile hamburger menu
	var mobileHam = _x('navIcon');
	mobileHam.style.background = navbgcolormobile;
	var hamsymbol = mobileHam.getElementsByTagName('span');
	for (var hm = 0; hm < hamsymbol.length; hm++) {
		hamsymbol[hm].style.backgroundColor = navsymbolcolor;
	}

	var lis = header.getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var li = lis[i];
		li.getElementsByTagName("a")[0].style.color = navtextcolor;

		li.addEventListener('mouseover', function () {
			if (this.classList.contains('press-release')) {
				return false;
			} else {
				if (!this.classList.contains('social-container') && !this.classList.contains('hashtag') && !this.classList.contains('sub-menu-li')) {
					this.getElementsByTagName('a')[0].style.backgroundColor = navhovercolor;
				}
			}
		});
		li.addEventListener('mouseout', function () {
			if (this.classList.contains('press-release')) { } else {
				if (!this.classList.contains('social-container') && !this.classList.contains('hashtag')) {
					this.getElementsByTagName('a')[0].style.backgroundColor = 'transparent';
				}
			}
		});

	} // End OF For Loop

	//Sub Menu Hover 
	if ($(textentries).find('press-multilevel-menu').find('menu-text').find('nav').attr('visible') == 'true') {
		var dropDown = document.getElementsByClassName('press-release')[0];
		dropDown.addEventListener('mouseover', function () {
			this.style.backgroundColor = navhovercolor;
		});
		dropDown.addEventListener('mouseout', function () {
			this.style.backgroundColor = 'transparent';
		});

		var subMenu = document.getElementsByClassName('sub-menu')[0];
		var subMenulis = subMenu.getElementsByTagName("li");
		for (var j = 0; j < subMenulis.length; j++) {
			var lisub = subMenulis[j];
			lisub.style.backgroundColor = press_bgColor;
			lisub.getElementsByTagName("a")[0].style.color = press_textColor;
			lisub.addEventListener('mouseover', function () {
				//console.log(this);
				this.style.backgroundColor = press_hoverColor;
			});
			lisub.addEventListener('mouseout', function () {
				//console.log(this);
				this.style.backgroundColor = press_bgColor;
			});
		} //End For
	}

	//Social Follow Hover and Bg color
	var socialFollowVar = document.getElementsByClassName('social-container')[0];
	var socialAnchor = socialFollowVar.getElementsByTagName('a');
	for (var so = 0; so < socialAnchor.length; so++) {
		var className = socialAnchor[so].classList[0];
		socialAnchor[so].style.backgroundColor = socialFollow[className];

		socialAnchor[so].addEventListener('mouseover', function () {
			var soTemp = this.classList[0] + 'hover';
			this.style.backgroundColor = socialFollow[soTemp];
		});
		socialAnchor[so].addEventListener('mouseout', function () {
			var soTemp = this.classList[0];
			this.style.backgroundColor = socialFollow[soTemp];
		});
	} //For Loop End

	//Footer Settings
	var footer = _t('footer');


	if (footertypecenter == 'false') {
		footer.style.background = footerbgcolor;
		//copyrights
		var cpright = document.getElementsByClassName('copyright')[0];
		cpright.getElementsByTagName('p')[0].style.color = footercopyrightcolor;

		//Footer Links
		var mainFt = document.getElementsByClassName('main-footer')[0];
		var ftlinks = mainFt.getElementsByClassName('footer-links');

		for (var f = 0; f < ftlinks.length; f++) {
			var anchors = ftlinks[f].getElementsByTagName('a');

			for (var fl = 0; fl < anchors.length; fl++) {
				anchors[fl].style.color = footerlinktextcolor;

				if (isMobile || isAndroidTablet || isiPad || isTablet) { } else {
					anchors[fl].addEventListener('mouseover', function () {
						console.log()
						this.style.color = footerlinkhovercolor;
					});
					anchors[fl].addEventListener('mouseout', function () {
						this.style.color = footerlinktextcolor;
					});

				}
			}
		} // End Of For Loop
	} else if (footertypecenter == 'true') {

		var ftcenter = document.getElementsByClassName('footer-centered')[0];
		ftcenter.style.background = footerbgcolor;

		//Logo Settings
		var legallogo = document.getElementsByClassName('legal-logos')[0];
		footercenterlogo == 'false' ? legallogo.style.display = 'none' : legallogo.style.display = 'block';

		//copyrights
		var cprightcenter = ftcenter.getElementsByClassName('copyright')[0]
		cprightcenter.getElementsByTagName('p')[0].style.color = footercopyrightcolor;

		//Footer Links
		var ftlinkcenter = ftcenter.getElementsByClassName('footer-links');

		for (var f = 0; f < ftlinkcenter.length; f++) {
			var anchorscenter = ftlinkcenter[f].getElementsByTagName('a');

			for (var fl = 0; fl < anchorscenter.length; fl++) {
				anchorscenter[fl].style.color = footerlinktextcolor;

				if (isMobile || isAndroidTablet || isiPad || isTablet) { } else {
					anchorscenter[fl].addEventListener('mouseover', function () {
						this.style.color = footerlinkhovercolor;
					});
					anchorscenter[fl].addEventListener('mouseout', function () {
						this.style.color = footerlinktextcolor;
					});

				}
			}
		} // End Of For Loop

		var creditsBtnCenter = _x('btnCreditsCenter');
		creditsBtnCenter.addEventListener('mouseover', function () {
			this.style.color = footerlinkhovercolor;
		});
		creditsBtnCenter.addEventListener('mouseout', function () {
			this.style.color = footerlinktextcolor;
		});
	}

	//Credit Container
	var creditContainer = _x('containerCredits');
	creditContainer.style.backgroundColor = billingbgcolor;

	var closeCreditsBtn = _x('closeCredits');
	var closeLine = closeCreditsBtn.getElementsByTagName('span');

	for (var c = 0; c < closeLine.length; c++) {
		closeLine[c].style.backgroundColor = billingxcolor;
	}


	var creditCopyRight = creditContainer.getElementsByClassName('copyright');
	creditCopyRight[0].getElementsByTagName('p')[0].style.color = billingcopyrighttextcolor;
	var creditsFooterLinks = creditContainer.getElementsByClassName('footer-links');
	var creditAnchores = creditsFooterLinks[0].getElementsByTagName('a');

	for (var b = 0; b < creditAnchores.length; b++) {
		creditAnchores[b].style.color = billingtextcolor;

		if (isMobile || isAndroidTablet || isiPad || isTablet) { } else {
			creditAnchores[b].addEventListener('mouseover', function () {
				this.style.color = billingtexthovercolor;
			});
			creditAnchores[b].addEventListener('mouseout', function () {
				this.style.color = billingtextcolor;
			});
		}
	}

	//Synopsis Settings 
	var synopsis = _x('synopsis');
	var synopsisContainer = synopsis.getElementsByClassName('synopsis_content')[0];
	var synopsisTitle = synopsisContainer.getElementsByClassName('movie-title')[0];


	synopsistextcolor == "" ? synopsisContainer.style.color = '#fff' : synopsisContainer.style.color = synopsistextcolor;
	synopsistitletextcolor == "" ? synopsisTitle.style.color = '#fff' : synopsisTitle.style.color = synopsistitletextcolor;
	synopsisbgcolor == "" ? synopsisContainer.style.backgroundColor = "transparent" : synopsisContainer.style.backgroundColor = synopsisbgcolor;

	//background video
	var bgVidDiv = document.getElementsByClassName('siteBackground')[0];

	if (bgImageSetting_bgpos != "") {
		bgVidDiv.style.backgroundPosition = bgImageSetting_bgpos;
	}

	if (bgImageSetting_bgsize != "") {
		bgVidDiv.style.backgroundSize = bgImageSetting_bgsize;
	}

	if (backgroundvideo == 'true') {
		var vidTag = document.createElement('video');
		var source = document.createElement('source');

		if (!isMobile && !isTablet && !isiPad && !isAndroidTablet && isDeeplink == true) {

			vidTag.autoplay = true;
			vidTag.muted = true;
			vidTag.loop = true;
			source.src = backgroundvideopath;
			source.type = "video/mp4";
			vidTag.appendChild(source);
			bgVidDiv.appendChild(vidTag);

		} else if (!isMobile && !isTablet && !isiPad && !isAndroidTablet && isDeeplink == false) {

			vidTag.id = 'bgVidPlayer';
			vidTag.autoplay = false;
			vidTag.muted = true;
			vidTag.loop = true;
			source.src = backgroundvideopath;
			source.type = "video/mp4";
			vidTag.appendChild(source);
			bgVidDiv.appendChild(vidTag);
		}
	}


	//Image Position
	var posDesktop = _x('homeDesktop');
	var posMobile = _x('homeMobile');

	//Set Position
	if (desktopPosition.toLowerCase() == "left") {
		posDesktop.classList.remove('home-centered', 'home-left-aligned', 'home-right-aligned');
		posDesktop.classList.add('home-left-aligned');
	} else if (desktopPosition.toLowerCase() == "right") {
		posDesktop.classList.remove('home-centered', 'home-left-aligned', 'home-right-aligned');
		posDesktop.classList.add('home-right-aligned');
	} else if (desktopPosition.toLowerCase() == "center") {
		posDesktop.classList.remove('home-centered', 'home-left-aligned', 'home-right-aligned');
		posDesktop.classList.add('home-centered');
	} else {
		posDesktop.classList.remove('home-centered', 'home-left-aligned', 'home-right-aligned');
		posDesktop.classList.add('home-centered');
	}

	/*if(isMobile || isTablet || isiPad || isAndroidTablet){*/

	//Image On Off Device
	if (taglineimagemobile_m_v == 'false') {
		var tagImageDivDevice = posMobile.getElementsByClassName('home-content-top')[0];
		tagImageDivDevice.style.display = 'none';
	}
	if (ttimagemobile_m_v == 'false') {
		var ttImageDivDevice = posMobile.getElementsByClassName('home-content-middle')[0];
		ttImageDivDevice.style.display = 'none';
	}
	if (releasedateimagemobile_m_v == 'false') {
		var releaseDateImageDivDevice = posMobile.getElementsByClassName('home-content-bottom')[0];
		releaseDateImageDivDevice.style.display = 'none';
	}

	/*}else{*/
	//Image On Off Desktop
	if (taglineimage_d_v == 'false') {
		var tagImageDiv = posDesktop.getElementsByClassName('home-content-top')[0];
		tagImageDiv.style.display = 'none';
	}
	if (ttimage_d_v == 'false') {
		var ttImageDiv = posDesktop.getElementsByClassName('home-content-middle')[0];
		ttImageDiv.style.display = 'none';
	}
	if (releasedateimage_d_v == 'false') {
		var releaseDateImageDiv = posDesktop.getElementsByClassName('home-content-bottom')[0];
		releaseDateImageDiv.style.display = 'none';
	}
	/*}*/

	//Partner Page Settings 

	var partnerDiv = _x('partners');

	var partnerTitle = partnerDiv.getElementsByTagName('h2')[0];
	partner_pagetextcolor == "" ? partnerDiv.style.color = '#fff' : partnerDiv.style.color = partner_pagetextcolor;
	partner_pagetitletextcolor == "" ? partnerTitle.style.color = '#fff' : partnerTitle.style.color = partner_pagetitletextcolor;
	partner_pagebgcolor == "" ? partnerDiv.style.backgroundColor = "transparent" : partnerDiv.style.backgroundColor = partner_pagebgcolor;
	var boxBorder = partnerDiv.querySelectorAll('.section-box');

	for (var x = 0; x < boxBorder.length; x++) {
		boxBorder[x].style.borderColor = partner_logobordercolor;
		boxBorder[x].style.backgroundColor = partner_logobgcolor;
	}

	//partnerPopUp setttings
	var pp_bordercolor = "";
	popupboxbordercolor == "" ? pp_bordercolor = '5px solid #fff' : pp_bordercolor = '5px solid' + popupboxbordercolor;
	var popupBoxBorder = document.getElementsByClassName('section-overlay-container')[0];
	popupBoxBorder.style.border = pp_bordercolor;
	popupBoxBorder.style.color = popupboxtextcolor;
	popupBoxBorder.style.backgroundColor = popupboxbgcolor;
	var popupBoxCloseButton = document.getElementsByClassName('section-close')[0];
	popupBoxCloseButton.style.backgroundColor = popupboxbuttoncolor;
	var visitSiteButtonPopUp = document.getElementsByClassName('overlay-visit-btn')[0];
	visitSiteButtonPopUp.style.backgroundColor = popupboxbuttoncolor;
	visitSiteButtonPopUp.style.border = '2px solid' + popupboxbuttoncolor;
	visitSiteButtonPopUp.style.color = popupboxtextcolor;
	//Partner Page Settings

	// App/Game Page Settings 
	var gameDiv = _x('games');
	var gameTitle = gameDiv.getElementsByTagName('h2')[0];

	/*app_pagetextcolor == "" ? gameDiv.style.color = '#fff' : gameDiv.style.color = app_pagetextcolor;*/
	app_pagetitletextcolor == "" ? gameTitle.style.color = '#fff' : gameTitle.style.color = app_pagetitletextcolor;
	app_pagebgcolor == "" ? gameDiv.style.backgroundColor = "transparent" : gameDiv.style.backgroundColor = app_pagebgcolor;
	var appBoxBorder = gameDiv.querySelectorAll('.section-box');

	for (var a = 0; a < appBoxBorder.length; a++) {
		appBoxBorder[a].style.borderColor = app_logobordercolor;
		appBoxBorder[a].querySelector('.game-caption').style.backgroundColor = app_logobgcolor;
		app_pagetextcolor == "" ? appBoxBorder[a].querySelector('.game-caption').style.color = '#fff' : appBoxBorder[a].querySelector('.game-caption').style.color = app_pagetextcolor;
	}

	//trailer-close button 
	var trailer_close_button = _x('trailer-close');
	var shop_modal_close = _x('shop-close')
	trailer_close_button.style.backgroundColor = button_color;
	shop_modal_close.style.backgroundColor = button_color;


	return true;
} // End Of Apply Setting Function


//initSite();
