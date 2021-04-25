function xmlDrivenText() {
	isDeeplink = checkDeepLink();
	if (isDeeplink) {
		//bluKieTagging(deeplink);

		if (!window.BKTAG) {

			window.bk_async = function () {
				window.bk_allow_multiple_calls = true;
				window.bk_use_multiple_iframes = true;
				setTimeout(function () {
					bkDataToSend(deeplink);
				}, 1000);
			}

		} else {
			setTimeout(function () {
				bkDataToSend(deeplink);
			}, 1000);
		}
	} else {
		if (!window.BKTAG) {

			window.bk_async = function () {
				window.bk_allow_multiple_calls = true;
				window.bk_use_multiple_iframes = true;
				setTimeout(function () {
					bkDataToSend("Home Page");
				}, 1000);
			}

		} else {
			setTimeout(function () {
				bkDataToSend("Home Page");
			}, 1000);
		}
	}
	//navigation
	var nav = "";
	var i = 0;
	var quote = "";
	$(textentries).find("Navigation").each(function () {
		$(this).find('navs').find("nav").each(function () {

			if ($(this).attr('visible') == 'false') {
				return;
			} else {

				if ($(this).attr('linktype') == 'internal') {
					if (isDeeplink) {
						if (deeplink === $(this).attr('navid')) {
							nav += '<li class="active nav-li check-' + $(this).attr('navid') + '" style="background-color:' + navactivetabcolor + '"><a href="' + quote + '#' + $(this).attr('navid') + quote + '" onclick="" title="' + $(this).text() + '" class="navigation-check" style="font-size:' + $(this).attr('size') + 'px;" data-toggle="tab">' + $(this).text() + '</a></li>';
						} else {
							nav += '<li class="nav-li check-' + $(this).attr('navid') + '"><a href="' + quote + '#' + $(this).attr('navid') + quote + '" onclick="" title="' + $(this).text() + '" class="navigation-check" style="font-size:' + $(this).attr('size') + 'px;" data-toggle="tab">' + $(this).text() + '</a></li>';
						}
					} else if (i == 0) {
						nav += '<li class="active nav-li check-' + $(this).attr('navid') + '" style="background-color:' + navactivetabcolor + '"><a href="' + quote + '#' + $(this).attr('navid') + quote + '" onclick="" title="' + $(this).text() + '" class="navigation-check" style="font-size:' + $(this).attr('size') + 'px;" data-toggle="tab">' + $(this).text() + '</a></li>';
					} else {
						nav += '<li class="nav-li check-' + $(this).attr('navid') + '"><a href="' + quote + '#' + $(this).attr('navid') + quote + '" onclick="" title="' + $(this).text() + '" class="navigation-check" style="font-size:' + $(this).attr('size') + 'px;" data-toggle="tab">' + $(this).text() + '</a></li>';
					}
				} else if ($(this).attr('linktype') == 'new') {
					if (i == 0) {
						nav += '<li class="active nav-li optional-nav" style="background-color:' + navactivetabcolor + '"><a href="javascript:void(0);" data-link="' + $(this).attr('url') + '" class="external-link" style="font-size:' + $(this).attr('size') + 'px;"  >' + $(this).text() + '</a></li>';
					} else {
						nav += '<li class="nav-li optional-nav"><a href="javascript:void(0);" data-link="' + $(this).attr('url') + '"  style="font-size:' + $(this).attr('size') + 'px;" class="external-link" onclick="" title="' + $(this).text() + '" >' + $(this).text() + '</a></li>';
					}
				} else if ($(this).attr('linktype') == 'popup') {

					var quotes = "'";
					var hw = quotes + 'height=' + $(this).attr('height') + ',width=' + $(this).attr('width') + '' + quotes;
					var winName = quotes + 'WB-' + $(this).text() + quotes;
					var url = quotes + $(this).attr('url') + quotes;

					if (i == 0) {
						nav += '<li class="active nav-li optional-nav" style="background-color:' + navactivetabcolor + '"><a onclick="popitup(' + url + ',' + winName + ', ' + hw + ')"  style="crusor:pointer; font-size:' + $(this).attr('size') + 'px;">' + $(this).text() + '</a></li>';
					} else {
						nav += '<li class="nav-li optional-nav"><a onclick="popitup(' + url + ',' + winName + ', ' + hw + ')" style="cursor: pointer; font-size:' + $(this).attr('size') + 'px;" >' + $(this).text() + '</a></li>';
					}
				} else if ($(this).attr('linktype') == 'tracking') {
					var trackDataArr = String($(this).attr('trackdata')).split(",");
					if (i == 0) {
						nav += '<li class="active nav-li optional-nav" style="background-color:' + navactivetabcolor + '"><a class="optionalNavTrack" style="font-size:' + $(this).attr('size') + 'px; cursor:pointer;"  target="_blank" onClick="optionalNavTracking(' + trackDataArr[0] + ',\'' + trackDataArr[1] + '\',\'' + $(this).attr('url') + '\');">' + $(this).text() + '</a></li>';
					} else {
						nav += '<li class="nav-li optional-nav"><a class="optionalNavTrack" style="font-size:' + $(this).attr('size') + 'px; cursor:pointer;" target="_blank" onClick="optionalNavTracking(' + trackDataArr[0] + ',\'' + trackDataArr[1] + '\',\'' + $(this).attr('url') + '\');">' + $(this).text() + '</a></li>';
					}
				}

			}
			i++;
		});
	}); //Loop End

	$('header').find('.nav-container').find('.nav-ul').html(nav);


	//HashTag
	var hashTag = $(textentries).find('hashtag').find('nav');
	if ($(textentries).find('hashtag').find('nav').attr('visible') == 'true') {
		$('header').find('.nav-container').find('.nav-ul').append('<li class="nav-li hashtag"><a tabindex="0" role="link" style="font-size:' + $(hashTag).attr('size') + 'px;">' + $(hashTag).text() + '</a>');
	}

	//Press Menu
	var pressRelease = $(textentries).find('press-multilevel-menu');

	if ($(pressRelease).find('menu-text').find('nav').attr('visible') == 'true') {

		var menu_part_1 = '<li class="nav-li press-release"><a class="press-anchor" style="font-size:' + $(pressRelease).find('menu-text').find('nav').attr('size') + 'px">' + $(pressRelease).find('menu-text').find('nav').text() + '</a><ul class="sub-menu sub-menu-toggle">';
		var menu_part_2 = '';
		var menu_part_3 = '';
		var menu_part_4 = '';

		$(textentries).find('press-multilevel-menu').each(function () {
			$(this).find('navs').find('nav').each(function () {

				if ($(this).attr('visible') == 'true') {

					menu_part_2 += '<li class="sub-menu-li"><a href="' + $(this).attr('url') + '" target="_blank" style="font-size:' + $(this).attr('size') + 'px;">' + $(this).text() + '</a> </li>';
				}
			});
		}); //End Loop
		menu_part_3 = '</ul></li>';
		menu_part_4 = menu_part_1 + menu_part_2 + menu_part_3;

		if ($('.nav-container').find('.nav-ul').find('li').hasClass('optional-nav') && $('.nav-container').find('.nav-ul').find('li').hasClass('hashtag')) {
			$(menu_part_4).insertBefore($('.optional-nav').first());
		} else if (!$('.nav-container').find('.nav-ul').find('li').hasClass('optional-nav') && $('.nav-container').find('.nav-ul').find('li').hasClass('hashtag')) {
			$(menu_part_4).insertBefore($('.nav-container').find('.nav-ul').find('.hashtag'));
		} else {
			$('header').find('.nav-container').find('.nav-ul').append(menu_part_4);
		}

	} //End Of IF



	//Social Follow
	var snav = "";

	$(textentries).find("follow").each(function () {
		$(this).find("nav").each(function () {

			if ($(this).attr('visible') == 'false') {
				return;
			} else {
				snav += '<a href="javascript:void(0);" data-link="' + $(this).attr('url') + '"  title="' + $(this).attr('esbname') + '" class="' + $(this).attr('help') + ' external-link"><img src="images/icons/' + $(this).attr('navid') + '.png" class="" alt="' + $(this).attr('esbname') + '"/></a>';
			}
		});
	}); //Loop End
	if (snav != "") {
		$('header').find('.nav-container').find('.nav-ul').append('<li class="nav-li social-container">' + snav + '</li>');
	}

	//End Of Navigation Section

	//Get Tickets Navigation
	if ($(textentries).find('getticketsnavigation').find('nav').attr('visible') === 'true') {
		$('header').find('.nav-container').find('.nav-ul').append('<li class="nav-li get-tickets" style="font-size:' + $(textentries).find('getticketsnavigation').find('nav').attr('size') + 'px"><a href="' + $(textentries).find('getticketsnavigation').find('nav').attr('url') + '" target="_blank" >' + $(textentries).find('getticketsnavigation').find('nav').text() + '</a></li>');
	}


	//footer

	//legal
	var ftLegal = "";
	var ftSize;
	$(textentries).find("LegalTerms").each(function () {
		$(this).find('footerlegal').find("legal").each(function () {
			if ($(this).attr('visible') == 'true') {
				if (isMobile) {
					ftSize = parseInt($(this).attr('size')) - parseInt(3);
				} else {
					ftSize = parseInt($(this).attr('size'));
				}
				if (footertypecenter == 'false') {
					ftLegal += '<a href="javascript:void(0);" data-link="' + $(this).attr('url') + '"  style="font-size:' + ftSize + 'px;" class="external-link">' + $(this).text() + '</a>';
				} else {
					ftLegal += '<li><a href="javascript:void(0);" data-link="' + $(this).attr('url') + '"  style="font-size:' + ftSize + 'px;" class="external-link">' + $(this).text() + '</a></li>'
				}
			}
		});
	}); //Loop End
	if (footertypecenter == 'false') {
		$('.main-footer').find('.footer-links').prepend(ftLegal);
	} else {
		$('.footer-centered').find('.footer-links').prepend(ftLegal);
	}

	//Copyright
	$('.copyright').find('p').html($(textentries).find('LegalTerms').find('copyright').text());
	$('.copyright').find('p').css('font-size', $(textentries).find('LegalTerms').find('copyright').attr('size') + 'px');

	//containerCredits
	var blLink = "";
	var ftSizeBl;
	$(textentries).find("LegalTerms").each(function () {
		$(this).find('billingLegal').find("legal").each(function () {
			if ($(this).attr('visible') == 'true') {
				if (isMobile) {
					ftSizeBl = parseInt($(this).attr('size')) - parseInt(3);
				} else {
					ftSizeBl = parseInt($(this).attr('size'));
				}
				blLink += '<a href="javascript:void(0);" data-link="' + $(this).attr('url') + '" style="font-size:' + ftSizeBl + 'px;" class="external-link">' + $(this).text() + '</a>';
			}
		});
	}); //Loop End
	$('#containerCredits').find('.footer-links').html(blLink);

	//Share
	if (footertypecenter == 'false') {
		if ($(textentries).find('LegalTerms').find('sharetext').attr('visible') == 'true') {
			$('#btnShareMobile').html($(textentries).find('LegalTerms').find('sharetext').text());
			$('#btnShareMobile').css('font-size', parseInt($(textentries).find('LegalTerms').find('sharetext').attr('size')) - parseInt(3) + 'px');
			$('#btnShare').html($(textentries).find('LegalTerms').find('sharetext').text());
			if (isMobile) {
				$('#btnShare').css('font-size', parseInt($(textentries).find('LegalTerms').find('sharetext').attr('size')) - parseInt(3) + 'px');
			} else {
				$('#btnShare').css('font-size', $(textentries).find('LegalTerms').find('sharetext').attr('size') + 'px');
			}
			$('#containerShare p').html($(textentries).find('LegalTerms').find('sharetext').text());
			if (isMobile) {
				$('#containerShare p').css('font-size', parseInt($(textentries).find('LegalTerms').find('sharetext').attr('size')) - parseInt(3) + 'px');
			} else {
				$('#containerShare p').css('font-size', $(textentries).find('LegalTerms').find('sharetext').attr('size') + 'px');
			}

			var ftShare = '';
			$(textentries).find("Share").each(function () {
				$(this).find("nav").each(function () {

					if ($(this).attr('visible') == 'true') {

						var shareText = encodeURI($(this).attr('url') + $(this).text());
						ftShare += '<a href="' + shareText + '" target="_blank"><img src="images/legal/' + $(this).attr('imagename') + '" alt="Share"></a>';
					}
				});
			}); //Loop End

			$('#containerShare').append(ftShare);
		} else {
			if (isMobile) {
				$('#btnShareMobile').css('display', 'none');
			} else {
				$('#btnShare').css('display', 'none');
			}
		}
	}
	if (footertypecenter == 'false') {
		$('#btnCredits').html($(textentries).find('LegalTerms').find('Credits').text());
		if (isMobile) {
			$('#btnCredits').css('font-size', parseInt($(textentries).find('LegalTerms').find('Credits').attr('size')) - parseInt(3) + 'px');
		} else {
			$('#btnCredits').css('font-size', $(textentries).find('LegalTerms').find('Credits').attr('size') + 'px');
		}
	} else if (footertypecenter == 'true') {
		$('#btnCreditsCenter').html($(textentries).find('LegalTerms').find('Credits').text());
		if (isMobile) {
			$('#btnCreditsCenter').css('font-size', parseInt($(textentries).find('LegalTerms').find('Credits').attr('size')) - parseInt(3) + 'px');
		} else {
			$('#btnCreditsCenter').css('font-size', $(textentries).find('LegalTerms').find('Credits').attr('size') + 'px');
		}
	}


	checkHeight();
	//End Footer

	//synopsis

	var synopsisVar = $(textentries).find('synopsis');
	$('#synopsis').find('.movie-title').html($(textentries).find('synopsis').find('synopsistitle').text());
	if (isiPad || isTablet || isMobile || isAndroidTablet) {
		$('#synopsis').find('.movie-title').css('font-size', parseInt($(textentries).find('synopsis').find('synopsistitle').attr('size')) - parseInt(10) + 'px');
	} else {
		$('#synopsis').find('.movie-title').css('font-size', $(textentries).find('synopsis').find('synopsistitle').attr('size') + 'px');
	}
	/*$('#synopsis').find('.movie-story').html($(textentries).find('synopsis').find('body').text());
	$('#synopsis').find('.movie-story').css('font-size',(textentries).find('synopsis').find('body').attr('size')+'px');*/

	//Partners


	var partnerCount = 0;
	var quotesImg = "'";
	var partnersVar = $(textentries).find('partners');
	$('#partners').find('.section-container').find('h2').html($(textentries).find('partners').find('title').find('nav').text());
	$('#partners').find('.section-container').find('h2').css('font-size', $(textentries).find('partners').find('title').find('nav').attr('size') + 'px');
	$('.overlay-visit-btn').html($(partnersVar).find('visit').find('nav').text());
	$('.overlay-visit-btn').css('font-size', $(partnersVar).find('visit').find('nav').attr('size') + 'px');

	var partnerLoop = '';
	$(partnersVar).find('navs').each(function () {
		$(this).find('nav').each(function () {

			if ($(this).attr('visible') == 'true') {
				partnerData.push({
					'data': $(this).text(),
					'size': $(this).attr('size') + 'px',
					'url': $(this).attr('url')
				})
				partnerLoop += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6"><div class="section-box animated fadeIn"><a href="javascript:void(0);"><img onclick="popUpBoxData(' + partnerCount + ',' + quotesImg + $(this).attr('imagename') + quotesImg + ')"src="images/partners/' + $(this).attr('imagename') + '" class="img-responsive center-block" alt="Movie Partner"></a></div></div>';
				partnerCount++;
			}
		});
	}); // End Loop

	$('#partners').find('.section-container').find('.row').html(partnerLoop);

	//Partners End

	//Games/App

	var gamesVar = $(textentries).find('games');
	$('#games').find('.section-container').find('h2').html($(gamesVar).find('title').find('nav').text());
	$('#games').find('.section-container').find('h2').css('font-size', $(gamesVar).find('title').find('nav').attr('size') + 'px');


	var gameLoop = '';

	$(gamesVar).find('navs').each(function () {
		$(this).find('nav').each(function () {

			if ($(this).attr('visible') == 'true') {
				if($(this).attr('linktype') == 'new'){
				gameLoop += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6"><div class="section-box"><a href="javascript:void(0);" data-link="' + $(this).attr('url') + '" class="external-link"><img src="images/games/' + $(this).attr('imagename') + '" class="img-responsive center-block" alt="Movie Game"> <div class="game-caption" style="font-size:' + $(this).attr('size') + 'px;">' + $(this).text() + '</div></a></div></div>';
			}else if($(this).attr('linktype') == 'internal'){
				gameLoop += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6"><div class="section-box"><a href="' + $(this).attr('url') + '" ><img src="images/games/' + $(this).attr('imagename') + '" class="img-responsive center-block" alt="Movie Game"> <div class="game-caption" style="font-size:' + $(this).attr('size') + 'px;">' + $(this).text() + '</div></a></div></div>';
			}
			}
		});
	}); // End Loop

	$('#games').find('.section-container').find('.row').html(gameLoop);


	// Video

	var counter = 0;
	var videomenusStr = '';
	$(XML).find("Videos").each(function () {
		$(this).find("Trailer").each(function () {

			if ($(this).attr('visible') == "true") {
				activeVideoCount++;
				if (mp4Player == 'false') {
					if (counter == 0) {
						videomenusStr += '<div class="trailer-link active" vid-id="' + youtube_parser($(this).attr('file')) + '" style="background-image: url(&#39;https://img.youtube.com/vi/' + youtube_parser($(this).attr('file')) + '/mqdefault.jpg&#39;)"><div class="trailer-title">' + $(this).find('navText').text() + '</div></div>';
					} else {
						videomenusStr += '<div class="trailer-link" vid-id="' + youtube_parser($(this).attr('file')) + '" style="background-image: url(&#39;https://img.youtube.com/vi/' + youtube_parser($(this).attr('file')) + '/mqdefault.jpg&#39;)"><div class="trailer-title">' + $(this).find('navText').text() + '</div></div>';
					}
				} else {
					if (counter == 0) {
						videomenusStr += '<div class="trailer-link active" vid-id="' + $(this).attr('esbprefilepath') + '" style="background-image: url(&#39;' + $(this).attr('thumbnail') + '&#39;)"><div class="trailer-title">' + $(this).find('navText').text() + '</div></div>';
					} else {
						videomenusStr += '<div class="trailer-link" vid-id="' + $(this).attr('esbprefilepath') + '" style="background-image: url(&#39;' + $(this).attr('thumbnail') + '&#39;)"><div class="trailer-title">' + $(this).find('navText').text() + '</div></div>';
					}

				}

				counter++;
			}


		});
	});

	$('#trailerNav').html(videomenusStr);

	//Shop Section

	$('.shop_content').find('.movie-title').html($(textentries).find("shop").find('shoptext').find('titletext').text());
	$('.shop_content').find('h3').html($(textentries).find("shop").find('shoptext').find('taglinetext').text());
	$('.shop_content').css('color', shoptextcolor);
	$('.shop_content').find('.tagline-shop').css('color', taglinetextcolor); //.css('font-size',$(textentries).find("shop").find('shoptext').find('taglinetext').attr('size')+'px');
	$('.shop_content').find('.movie-title').css('color', titletextcolor);
	$('.shop_content').find('.movie-title').css('font-size', $(textentries).find("shop").find('shoptext').find('titletext').attr('size') + 'px');

	var shopDiv = "";
	var quotesImg = "'";
	var shopCounter = 0;

	$(textentries).find("shop").each(function () {
		$(this).find("product").each(function () {

			if ($(this).find('navtitle').attr('visible') == 'true') {

				if (shopCounter % 2 == 0) {

					if (shopCounter == 0) {
						shopDiv += '<div class="row"><div class="col-lg-6 col-md-6 col-sm-6 product-box">' +
							'<div class="col-lg-6 col-md-12 col-sm-12">' +
							'<img src="images/shop/' + $(this).find('navdesc').attr('imagename') + '" onclick="popUpBoxShopData(' + quotesImg + $(this).find('navdesc').attr('imagename') + quotesImg + ')" class="img-responsive" alt="Movie Product"/>' +
							'</div>' +
							'<div class="col-lg-6 col-md-12 col-sm-12 product-desc">' +
							'<h4 style="color:' + shoptitletextcolor + '; border-bottom:1px solid ' + shoptitlebordercolor + ';">' + $(this).find('navtitle').text() + '</h4>' +
							'<p style="font-size:' + $(this).find('navdesc').attr('size') + 'px;">' + $(this).find('navdesc').text() + '</p>' +
							'<a href="' + $(this).find('navdesc').attr('url') + '" target="_blank" style="background:' + shopbuttoncolor + '; color:' + shopbuttontextcolor + '; border: 1px solid ' + shopbuttonbordercolor + ';"><span style="font-size: ' + Buynowtextfontsize + ';">' + Buynowtext + '</span></a></div></div>';
					} else {
						shopDiv += '<div class="row"><div class="col-lg-6 col-md-6 col-sm-6 product-box">' +
							'<div class="col-lg-6 col-md-12 col-sm-12">' +
							'<img src="images/shop/' + $(this).find('navdesc').attr('imagename') + '" onclick="popUpBoxShopData(' + quotesImg + $(this).find('navdesc').attr('imagename') + quotesImg + ')" class="img-responsive" alt="Movie Product"/>' +
							'</div>' +
							'<div class="col-lg-6 col-md-12 col-sm-12 product-desc">' +
							'<h4 style="color:' + shoptitletextcolor + '; border-bottom:1px solid ' + shoptitlebordercolor + '">' + $(this).find('navtitle').text() + '</h4>' +
							'<p style="font-size:' + $(this).find('navdesc').attr('size') + 'px;">' + $(this).find('navdesc').text() + '</p>' +
							'<a href="' + $(this).find('navdesc').attr('url') + '" target="_blank" style="background:' + shopbuttoncolor + '; color:' + shopbuttontextcolor + '; border: 1px solid ' + shopbuttonbordercolor + ';"><span style="font-size: ' + Buynowtextfontsize + ';">' + Buynowtext + '</span></a></div></div>';
					}
				} else {

					shopDiv += '<div class="col-lg-6 col-md-6 col-sm-6 product-box">' +
						'<div class="col-lg-6 col-md-12 col-sm-12">' +
						'<img src="images/shop/' + $(this).find('navdesc').attr('imagename') + '" onclick="popUpBoxShopData(' + quotesImg + $(this).find('navdesc').attr('imagename') + quotesImg + ')" class="img-responsive" alt="Movie Product"/>' +
						'</div>' +
						'<div class="col-lg-6 col-md-12 col-sm-12 product-desc">' +
						'<h4 style="color:' + shoptitletextcolor + '; border-bottom:1px solid ' + shoptitlebordercolor + '">' + $(this).find('navtitle').text() + '</h4>' +
						'<p style="font-size:' + $(this).find('navdesc').attr('size') + 'px;">' + $(this).find('navdesc').text() + '</p>' +
						'<a href="' + $(this).find('navdesc').attr('url') + '" target="_blank" style="background:' + shopbuttoncolor + '; color:' + shopbuttontextcolor + '; border: 1px solid ' + shopbuttonbordercolor + ';"><span style="font-size: ' + Buynowtextfontsize + ';">' + Buynowtext + '</span></a></div></div></div>';

				}

				shopCounter++;
			}
		});
	});
	$('.shop_content').append(shopDiv);

	$('.product-box img').hover(function () {
		$(this).css('border', '2px solid' + productbordercolor);
	}, function () {
		$(this).css('border', '2px solid rgba(0,0,0,0.00)');
	})

	return true;

} // End xmlDrivenText

function checkDeepLink() {
	var returnValue = false;
	$(textentries).find("Navigation").each(function () {
		$(this).find('navs').find("nav").each(function () {
			if ($(this).attr('visible') == 'true' && $(this).attr('linktype') == 'internal') {
				if (deeplink == $(this).attr('navid')) {
					returnValue = true;
				}
			}
		});
	});

	return returnValue;

} //End OF checkDeepLink

function popitup(url, windowName, hw) {
	newwindow = window.open(url, windowName, hw);
	if (window.focus) {
		newwindow.focus()
	}
	return false;
} // end of popitup

function popUpBoxData(pos, imgName) {

	$('.section-overlay-container').find('p').html(partnerData[pos].data);
	$('.section-overlay-container').find('p').css('font-size', partnerData[pos].size);
	$('.section-overlay-box').find('img').attr('src', 'images/partners/' + imgName);
	$('.overlay-visit-btn').attr('href', partnerData[pos].url);
	$('#partner-1').modal('show');

} // End of popUpBoxData

function popUpBoxShopData(imgName) {
	$('#shop-overlay').find('.middle').find('img').attr('src', 'images/shop/' + imgName);
	$('#shop-overlay').modal('show');
} //End popUpBoxData

var sendExternalLink = function(link){
	window.open(link, "_blank");
	
}

function registerExternalLinks (){
	var externalLinks = document.getElementsByClassName('external-link');
	
	for(var e=0; e<externalLinks.length; e++){
		externalLinks[e].addEventListener('click', externalLinkFunc, false)
	}
	
}

function externalLinkFunc(){
	var link = this.getAttribute('data-link');
	popupExternalLink.style.display = 'block';

	goBackBtn.addEventListener('click', function(){
		popupExternalLink.style.display = 'none';
		link = "";
		return false;
	}, false);
	continueBtn.addEventListener('click', function(ec){
		continueBtn.href = link;
		popupExternalLink.style.display = 'none';
		link = "";
	}, false);
	
}