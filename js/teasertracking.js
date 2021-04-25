var getCustomJsonDataHome = [];
var geoInfoRowJsonHome;
var syca_movieIDHome = [];
var syca_movieIDHomeArray = [];
var syca_getGeoLoactionInfoHome;
var syca_trackingFormatTextHome = "";
var syca_trackingTimingTextHome = "";
var syca_trackingDateHome = "";
var syca_trackingSearchTextHome  = "";
var syca_trackingReferrerTextHome;
var syca_defaultReferrerTextHome;
var syca_trackingCampaignTextHome;
var syca_defaultCampaignTextHome;
var syca_sessionValueHome;
var syca_sessionValueHomeForCheck;
var syca_movieNameHome;
var syca_checkActiveSessionValueHome = false;
var syca_geoIpDataURLHome;
var syca_getIPURLHome;
var syca_postTrackingURLHome;
var syca_safariBrowserDetectHome;
var syca_ticketingPageLoadCount = false;

//Assign custom data
getCustomJsonDataHome = sycaAllBasicDataHome;
//console.log("getCustomJsonDataHome", getCustomJsonDataHome);

var syca_deviceName;
var syca_OSName;
var syca_browserName = "";
var isMobile = navigator.userAgent.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i) != null;
var isAndroidTablet = (navigator.userAgent.match(/android/i) && !isMobile) != null;
var isiPad = navigator.userAgent.match(/iPad|Macintosh/i) != null;
var isTablet = navigator.userAgent.match(/Galaxy|iPad/i) != null;
var syca_isMacOS = false;
if (navigator.appVersion.indexOf("Mac") != -1) syca_isMacOS = true;
var isiPadNew = (/iPad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
var androidMobileiPad = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));


if ((window.location.href.indexOf(getCustomJsonDataHome.syca_movieURLHome) > -1) || (window.location.href.indexOf(getCustomJsonDataHome.syca_movieDirectURLHome) > -1)) {
    console.log("Geo Live");
    syca_geoIpDataURLHome = getCustomJsonDataHome.geoLocationurlHomeLive.getCityIpDetailsURL;
}
else {
    console.log(" Geo stage");
    syca_geoIpDataURLHome = getCustomJsonDataHome.geoLocationurlHome.getCityIpDetailsURL;
}

$(document).ready(function () {
if(!sycaAllBasicDataHome.siteIsForESB){
    getGeoIpDataHome();
    syca_getDeviceWithOSHome();
}
});

/*  
 @ What Function does - get geo data from api 
*/
function getGeoIpDataHome() {
    try {
        $.ajax({
            type: 'GET',
            url: syca_geoIpDataURLHome,
            data: { sycamovieid: getCustomJsonDataHome.setMovieIDHome, countrycode: getCustomJsonDataHome.countryListHome, code: getCustomJsonDataHome.countryCodeTextHome },
            dataType: 'json',

            error: function (xhr, status) {
                syca_geoLocationHome = {
                    latitude: getCustomJsonDataHome.coutryLatitudeHome,
                    longitude: getCustomJsonDataHome.coutryLongitudeHome
                };
                myLtLg = { lat: getCustomJsonDataHome.coutryLatitudeHome, lng: getCustomJsonDataHome.coutryLongitudeHome };
                gLatIn = getCustomJsonDataHome.coutryLatitudeHome;
                gLonIn = getCustomJsonDataHome.coutryLongitudeHome;
                syca_getGeoLocCityEng = getCustomJsonDataHome.cityName;
                syca_getGeoLocCountryEng = getCustomJsonDataHome.countryNameHome;
                syca_getGeoLoactionInfoHome = syca_getGeoLocCityEng + ", " + syca_getGeoLocCountryEng;
                syca_loadTicketingSectionHome();

            },
            success: function (data) {

                geoInfoRowJsonHome = data;
                //console.log("NewR Row data", syca_clientIPAddressHome, getCustomJsonDataHome.countryListHome, getCustomJsonDataHome.countryCodeTextHome, getCustomJsonDataHome.coutryLatitudeHome, getCustomJsonDataHome.coutryLongitudeHome, getCustomJsonDataHome.CityName,  getCustomJsonDataHome.countryNameHome);
                
                syca_clientIPAddressHome = geoInfoRowJsonHome.CityInfo.IPAddress;
                $.each(Object.keys(geoInfoRowJsonHome.Movies), function (k, mID) {
                    syca_movieIDHomeArray[k] = mID;
                
                 });
                syca_geoLocationHome = {
                    latitude: geoInfoRowJsonHome.CityInfo.Latitude,
                    longitude: geoInfoRowJsonHome.CityInfo.Longitude
                };
                myLtLg = { lat: geoInfoRowJsonHome.CityInfo.Latitude, lng: geoInfoRowJsonHome.CityInfo.Longitude };
                gLatIn = geoInfoRowJsonHome.CityInfo.Latitude;
                gLonIn = geoInfoRowJsonHome.CityInfo.Longitude;
                if (geoInfoRowJsonHome.CityInfo.CityName != null) {
                    syca_getGeoLocCityEng = geoInfoRowJsonHome.CityInfo.CityName;
                    syca_getGeoLocCountryEng = geoInfoRowJsonHome.CityInfo.Country;
                }
                else if (geoInfoRowJsonHome.CityInfo.SubdivisionName != null) {
                    syca_getGeoLocCityEng = geoInfoRowJsonHome.CityInfo.SubdivisionName;
                    syca_getGeoLocCountryEng = geoInfoRowJsonHome.CityInfo.Country;
                }
                else {
                    syca_getGeoLocCityEng = "No Data";
                    syca_getGeoLocCountryEng = geoInfoRowJsonHome.CityInfo.Country;
                }
                syca_getGeoLoactionInfoHome = syca_getGeoLocCityEng + ", " + syca_getGeoLocCountryEng;
                syca_loadTicketingSectionHome();
            }
        });

    } catch (e) {
        console.log("[getScreensInfoRawJson] Para: searchText=" + searchText + " , Exception " + e.toString());
    }
}

function syca_loadTicketingSectionHome() {
    syca_sessionValueHomeForCheck = syca_getSessionCookieHome("mtsessioncookie");
    if (syca_sessionValueHomeForCheck == "" && iniFrameHome()) {
        syca_sessionValueHomeForCheck = syaca_generateSessionIDHome();
        syca_checkActiveSessionValueHome = true;
    }
    getCustomDataHome();  
}

/*  
@ What Function does - set session cookie
*/
function syca_setSessionCookieHome(cookieName, cookieValue, cookieExdays) {
    var d = new Date();
    d.setTime(d.getTime() + (cookieExdays * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/*  
@ What Function does - get session cookie
*/
function syca_getSessionCookieHome(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


/*  
@ What Function does - to get device info, OS info, mobile check, cookie info screen sizes etc.
*/
function syca_getDeviceWithOSHome() {

    (function (window) {
        {
            var unknown = '-';

            // screen
            var screenSize = '';
            if (screen.width) {
                width = (screen.width) ? screen.width : '';
                height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }

            // browser
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Opera Next
            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            // Edge
            else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 5);
            }
             // Edge New
             else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 5);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            // mobile version
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

            // cookie
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }

            // system
            var os = unknown;
            var clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }

        }

        window.syca = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled
        };
    }(this));


    var fbios_Check = "FBIOS";
    var fbios_mCheck = "FBAN";
    var instagram_Check = "Instagram";
    var snapchat_Check = " Snapchat";
    var browserCancatString = syca.browser;
    var navigatorUserAgentString = navigator.userAgent;

    if (browserCancatString.indexOf(fbios_Check) != -1) {
        browserCancatString = "Facebook iOS Browser";
    } else if (navigatorUserAgentString.indexOf(fbios_mCheck) != -1) {
        browserCancatString = "Facebook iOS Browser";
    } else if (navigatorUserAgentString.indexOf(instagram_Check) != -1) {
        browserCancatString = "Instagram";
    } else if (navigatorUserAgentString.indexOf(snapchat_Check) != -1) {
        browserCancatString = "Snapchat";
    }

    syca_browserName = browserCancatString + " | " + syca.os + ' ' + syca.osVersion + " | " + syca.browser + ' ' + syca.browserMajorVersion + ' (' + syca.browserVersion + ") | " + syca.mobile + " | " + syca.cookies + " | " + syca.screen + " | " + navigator.userAgent;
    syca_safariBrowserDetectHome = syca.browser;

    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['Macintosh','iPhone', 'iPad', 'iPod'],
        iosPlatformsNew = ['Macintosh','MacIntel'],
        os = null;
    var userBrowser = [{ name: "MSIE", value: "Internet Explorer" }, { name: "Chrome", value: "Chrome" },
    { name: "Opera", value: "Opera" }, { name: "Android", value: "Android Webkit Browser" },
    { name: "Firefox", value: "Firefox" }, { name: "Safari", value: "Safari" }];
    for (var n = 0; n < userBrowser.length; n++) {
        if (userAgent.indexOf(userBrowser[n].name) !== -1) {
            // syca_browserName = userBrowser[n].value + " | " + syca.os +' '+ syca.osVersion + " | " + syca.browser +' '+ syca.browserMajorVersion + ' (' + syca.browserVersion + ") | " + syca.mobile + " | " + syca.cookies + " | " + syca.screen + " | " + navigator.userAgent;
            // console.log("syca_browserName", syca_browserName);
            // break;
        }
    }

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    }else if (iosPlatformsNew.indexOf(platform) !== -1 && window.matchMedia('(min-width: 1280px)').matches) {
        os = 'Mac OS'; 
    } else if (iosPlatformsNew.indexOf(platform) !== -1 && window.matchMedia('(max-width: 1279px)').matches) {
        os = 'iOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    syca_OSName = os;

    if (isMobile) {
        syca_deviceName = "Mobile Device";
    } else if (isiPad) {
        syca_deviceName = "iPad Device";
    } else if (isAndroidTablet) {
        syca_deviceName = "Android Tablet Device";   
    } else if (isiPadNew && window.matchMedia('(min-width: 1280px)').matches) {
        syca_deviceName = "Desktop"; 
    } else if (isiPadNew && window.matchMedia('(max-width: 1279px)').matches) {
        syca_deviceName = "iPad Device"; 
    } else {
        syca_deviceName = "Desktop";
    }
}


/*  
 @ What Function does - get static data from json 
*/
function getCustomDataHome() {
    try {
        bindCustomDataHome();
    } catch (e) {
        console.log("[getCustomDataHome] Exception " + e.toString());
    }
}

/*  
 @ What Function does - bind static data to respective div / tags / select dropdown 
*/
function bindCustomDataHome() {
    //API calls 
    if ((window.location.href.indexOf(getCustomJsonDataHome.syca_movieURLHome) > -1) || (window.location.href.indexOf(getCustomJsonDataHome.syca_movieDirectURLHome) > -1)) {
        console.log("Home API Live");
        syca_postTrackingURLHome = getCustomJsonDataHome.apicallsurlHomeLive.postTrackingURL;
        syca_defaultReferrerTextHome = getCustomJsonDataHome.siteReferrerTextHomeLive;
        syca_defaultCampaignTextHome = getCustomJsonDataHome.siteCampaignTextHomeLive;
    }
    else {
        console.log("Home API Stage");
        syca_postTrackingURLHome = getCustomJsonDataHome.apicallsurlHome.postTrackingURL;
        syca_defaultReferrerTextHome = getCustomJsonDataHome.siteReferrerTextHome;
        syca_defaultCampaignTextHome = getCustomJsonDataHome.siteCampaignTextHome;
    }   
   


    syca_countryListHome = String(getCustomJsonDataHome.countryListHome).split(",");
    countryListForShowsHome = String(getCustomJsonDataHome.countryListForShowsHome).split(",");
    syca_movieNameHome = getCustomJsonDataHome.movieNameHome;    
    getcoutryLatitudeHome = getCustomJsonDataHome.coutryLatitudeHome;
    getcoutryLongitudeHome = getCustomJsonDataHome.coutryLongitudeHome;
    getMovieIDDataHome(syca_movieIDHomeArray);
}

function bindCampaignDataHome() {
    //API calls 
    if ((window.location.href.indexOf(getCustomJsonDataHome.syca_movieURLHome) > -1) || (window.location.href.indexOf(getCustomJsonDataHome.syca_movieDirectURLHome) > -1)) {       
        syca_defaultCampaignTextHome = getCustomJsonDataHome.siteCampaignTextHomeLive;
        syca_defaultReferrerTextHome = getCustomJsonDataHome.siteReferrerTextHomeLive;
    }
    else {      
        syca_defaultCampaignTextHome = getCustomJsonDataHome.siteCampaignTextHome;
        syca_defaultReferrerTextHome = getCustomJsonDataHome.siteReferrerTextHome;
    } 
}



/*  
@ What Function does - referrer text
*/
function getReferrerTextHome() {
    var referrer = document.referrer;
    var referrerResult = referrer.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    if (referrer == "") {
        syca_trackingReferrerTextHome = syca_defaultReferrerTextHome;
    }
    else {
        syca_trackingReferrerTextHome = referrerResult;
    }
}

 /*  
@ What Function does - campaign text
*/
function getCampaignTextHome(){
    function getQueryStringValueHome(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }
    var campaignHome = getQueryStringValueHome("campaign");   
   // console.log("campaign Home",campaignHome);
    if (campaignHome == "") {
        syca_trackingCampaignTextHome = syca_defaultCampaignTextHome;
        syca_trackingCampaignText = syca_defaultCampaignTextHome;
       // console.log("syca_trackingCampaignTextHome 1", syca_trackingCampaignTextHome);
    }
    else {
        syca_trackingCampaignTextHome = campaignHome;
        syca_trackingCampaignText = campaignHome;
       // console.log("syca_trackingCampaignTextHome 2", syca_trackingCampaignTextHome);
    }
}

/*  
 @ What Function does - get Movie ID data from api 
*/
function getMovieIDDataHome(data) {
           
                syca_movieIDHome = data;
                  //  syca_allClickTrackingHome(syca_movieIDHome.join(","), "18", "Home Page Load");  

                    var urlBrowser = window.location.href;
                    var deeplinkvalueTrack = urlBrowser.substring(urlBrowser.indexOf("?") + 1, urlBrowser.length);
                    var deeplinkTrack;

                    var indexValueTrack = deeplinkvalueTrack.indexOf('&');
                    if (indexValueTrack >= 0) {
                        deeplinkTrack = deeplinkvalueTrack.substring(0, indexValueTrack);
                    } else {
                        deeplinkTrack = deeplinkvalueTrack;
                    }

                 // console.log("deeplink", deeplinkTrack);
                  
					
                  switch (deeplinkTrack){
                      case 'trailer':
                          syca_allClickTrackingHome(syca_movieIDHome.join(","), "22", "Trailer");
                          break;
                          
                      case 'synopsis':
                          syca_allClickTrackingHome(syca_movieIDHome.join(","), "23", "Synopsis");
                          break;
                          
                      case 'gallery':
                          syca_allClickTrackingHome(syca_movieIDHome.join(","), "24", "Gallery");
                          break;
                          
                      case 'tickets':
                          syca_allClickTrackingHome(syca_movieIDHome.join(","), "25", "Get Tickets");
                          break;
                          
                    case 'castandcrew':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "26", "Cast and crew");
                        break;
                          
                    case 'partners':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "27", "Partners");
                        break;                       
                          
                      case 'coloringsheets':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "28", "Coloring Sheet");
                        break;                 
                          
                    case 'shop':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "29", "Shops");
                        break;
                          
                    case 'games':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "30", "Game");
                        break;
                    case 'characterart':
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "36", "Character Art");
                        break;
                      default:
                          syca_allClickTrackingHome(syca_movieIDHome.join(","), "18", "Home Page Load");
                  }
}

$('.nav-ul').on('click', function (e) {
    if(!sycaAllBasicDataHome.siteIsForESB && !($(e.target).parents('.optional-nav').length)){   
    targetNew = $(e.target).attr("href");
    if(!$(targetNew).hasClass("active")){
           // console.log("1");
        //console.log(target)
        target = $(e.target).attr("href");
            
        console.log("Page Name new",target.substring(target.indexOf('#') + 1, target.length), target);

        if (target == '#trailer' || target == '#videos') {
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "22", "Trailer");
        }
        else if(target == '#synopsis' || target == '#about'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "23", "Synopsis");
        }
        else if(target == '#gallery'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "24", "Gallery");
        }		
        else if(target == '#tickets'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "25", "Get Tickets");
        }		
        else if(target == '#castAndCrew' || target == '#castandcrew'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "26", "Cast and crew");
        }		
        else if(target == '#partners'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "27", "Partners");
        }
        else if(target == '#coloringsheets'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "28", "Coloring Sheet");
        }
        else if(target == '#shop'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "29", "Shops");
        }
        else if(target == '#games'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "30", "Game");
        }
        else if(target == '#characterart'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "36", "Character Art");
        }
        else if(target == '#home'){
            syca_allClickTrackingHome(syca_movieIDHome.join(","), "18", "Home Page Load");
        }
    }
}
});



function syaca_generateSessionIDHome() {
    var dt = new Date().getTime();
    var ssID = 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return ssID;
}


function iniFrameHome() {
    var iOSForCookieCheck = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (window.location !== window.parent.location && iOSForCookieCheck) {
        return false;
    }
    else {
        return true;
    }
}
$(".googleCalendarTrack").on('click', function () {
    if(!sycaAllBasicDataHome.siteIsForESB){
    syca_allClickTrackingHome(syca_movieIDHome.join(","), "19", "Google Calendar");
    }
});

$(".iosCalendarTrack").on('click', function () {
    if(!sycaAllBasicDataHome.siteIsForESB){
    syca_allClickTrackingHome(syca_movieIDHome.join(","), "20", "IOS Calendar");
    }
});

$(".outlookCalendarTrack").on('click', function () {
    if(!sycaAllBasicDataHome.siteIsForESB){
    syca_allClickTrackingHome(syca_movieIDHome.join(","), "21", "Outlook Calendar");
    }
});

$(".watchTrailerTrack").on('click', function () {
    if(!sycaAllBasicDataHome.siteIsForESB){
    syca_allClickTrackingHome(syca_movieIDHome.join(","), "31", "Watch Trailer");
    }
});

$(".syca_spotAWitchClick").on('click', function () {
    if(!sycaAllBasicDataHome.siteIsForESB){
    syca_allClickTrackingHome(syca_movieIDHome.join(","), "38", "Spot A Witch");
    }
});


// function officialSiteTracking(){ 
    
//    var officialSiteLink = $(".officialSiteTrack").data("url");
//    if(!sycaAllBasicDataHome.siteIsForESB){
//    syca_allClickTrackingHome(syca_movieIDHome.join(","), "34", "Official Site");
// }
//    window.open(officialSiteLink);
   
// }

function optionalNavTracking(ssID, trackStr, navLink){
	if(!sycaAllBasicDataHome.siteIsForESB){
		syca_allClickTrackingHome(syca_movieIDHome.join(","), ssID, trackStr);
	}	
	window.open(navLink);
}


/*  
 @ What Function does - function for tracking
*/

function syca_allClickTrackingHome(t_movieID, t_ssID, t_analyticValue) {
    try {
        syca_sessionValueHome = syca_getSessionCookieHome("mtsessioncookie");
        var cookieEnabled = navigator.cookieEnabled;
        if (cookieEnabled == true && iniFrameHome()) {
            if (syca_sessionValueHome != syca_sessionValueHomeForCheck) {
                syca_sessionValueHome = syaca_generateSessionIDHome(); // "sessionstart";
                syca_sessionValueHomeForCheck = syca_sessionValueHome;
                if (syca_sessionValueHome != "" && syca_sessionValueHome != null) {
                    syca_setSessionCookieHome("mtsessioncookie", syca_sessionValueHome, 30);
                    syca_checkActiveSessionValueHome = true;
                }
            }
        }
        //if (syca_checkActiveSessionValueHome && (t_ssID == "18" || t_ssID == "22" || t_ssID == "23" || t_ssID == "24" || t_ssID == "25")) {
            if (syca_checkActiveSessionValueHome) {
            syca_checkActiveSessionValueHome = false;
           
            syca_trackValueSend(syca_movieIDHome.join(","),"17","Home Session");
            syca_trackValueSend(syca_movieIDHome.join(","),"1","Session");
            syca_trackValueSend(t_movieID,t_ssID,t_analyticValue);
            function syca_trackValueSend(movieid_value,ssid_value,ana_value){
                $.ajax({
                    type: 'POST',
                    url: syca_postTrackingURLHome,
                    data: {
                        "movie_id": movieid_value, "ss_id": ssid_value, "analytic_value": ana_value, "device": syca_deviceName, "geo_info": syca_getGeoLoactionInfoHome,
                        "ip_address": syca_clientIPAddressHome, "browser_info": syca_browserName, "os_info": syca_OSName, "referral": syca_trackingReferrerTextHome,
                        "search_text": syca_trackingSearchTextHome, "format": syca_trackingFormatTextHome, "selected_date": syca_trackingDateHome, "session_id": syca_sessionValueHome,
                        "country_code": syca_countryListHome.join(","), "campaign_tag": syca_trackingCampaignTextHome, "daytime": syca_trackingTimingTextHome
                    },
                    success: function () {
                    //console.log("Tracking Done  session page", movieid_value, ssid_value, ana_value, syca_deviceName, syca_getGeoLoactionInfoHome, syca_clientIPAddressHome, syca_browserName + " | " + syca_trackingReferrerTextHome,  syca_OSName, syca_trackingReferrerTextHome, syca_trackingSearchTextHome, syca_trackingFormatTextHome, syca_trackingDateHome, syca_sessionValueHome, syca_countryListHome.join(","),syca_trackingCampaignTextHome, syca_trackingTimingTextHome);
    
                    }
                });
                }
        }
        else {
            $.ajax({
                type: 'POST',
                url: syca_postTrackingURLHome,
                data: {
                    "movie_id": t_movieID, "ss_id": t_ssID, "analytic_value": t_analyticValue, "device": syca_deviceName, "geo_info": syca_getGeoLoactionInfoHome,
                    "ip_address": syca_clientIPAddressHome, "browser_info": syca_browserName, "os_info": syca_OSName, "referral": syca_trackingReferrerTextHome,
                    "search_text": syca_trackingSearchTextHome, "format": syca_trackingFormatTextHome, "selected_date": syca_trackingDateHome, "session_id": syca_sessionValueHome,
                    "country_code": syca_countryListHome.join(","), "campaign_tag": syca_trackingCampaignTextHome, "daytime": syca_trackingTimingTextHome
                },
                
                success: function () {
                  //          console.log("Tracking Done Home", t_movieID, t_ssID, t_analyticValue, syca_deviceName, syca_getGeoLoactionInfoHome, syca_clientIPAddressHome, syca_browserName + " | " + syca_trackingReferrerTextHome,  syca_OSName, syca_trackingReferrerTextHome, syca_trackingSearchTextHome, syca_trackingFormatTextHome, syca_trackingDateHome, syca_sessionValueHome, syca_countryListHome.join(","),syca_trackingCampaignTextHome, syca_trackingTimingTextHome);

                    if(t_ssID == "18" || t_ssID == "22" || t_ssID == "23" || t_ssID == "24" || t_ssID == "25" || t_ssID == "26" || t_ssID == "27" || t_ssID == "28" || t_ssID == "29" || t_ssID == "30" || t_ssID == "36"){
                        syca_ticketingPageLoadCount = false;
                        syca_allClickTrackingHome(syca_movieIDHome.join(","), "2", "Page Load");
                    }
                    if (syca_checkActiveSessionValueHome) {
                        syca_checkActiveSessionValueHome = false;
                        syca_trackValueSendAfter(syca_movieIDHome.join(","),"17","Home Session");
                        syca_trackValueSendAfter(syca_movieIDHome.join(","),"1","Session");
                        function syca_trackValueSendAfter(movieid_value,ssid_value,ana_value){
                            $.ajax({
                                type: 'POST',
                                url: syca_postTrackingURLHome,
                                data: {
                                    "movie_id": movieid_value, "ss_id": ssid_value, "analytic_value": ana_value, "device": syca_deviceName, "geo_info": syca_getGeoLoactionInfoHome,
                                    "ip_address": syca_clientIPAddressHome, "browser_info": syca_browserName, "os_info": syca_OSName, "referral": syca_trackingReferrerTextHome,
                                    "search_text": syca_trackingSearchTextHome, "format": syca_trackingFormatTextHome, "selected_date": syca_trackingDateHome, "session_id": syca_sessionValueHome,
                                    "country_code": syca_countryListHome.join(","), "campaign_tag": syca_trackingCampaignTextHome, "daytime": syca_trackingTimingTextHome
                                },
                                success: function () {
                                //console.log("Tracking Done  session page", movieid_value, ssid_value, ana_value, syca_deviceName, syca_getGeoLoactionInfoHome, syca_clientIPAddressHome, syca_browserName + " | " + syca_trackingReferrerTextHome,  syca_OSName, syca_trackingReferrerTextHome, syca_trackingSearchTextHome, syca_trackingFormatTextHome, syca_trackingDateHome, syca_sessionValueHome, syca_countryListHome.join(","),syca_trackingCampaignTextHome, syca_trackingTimingTextHome);
                
                                }
                            });
                            }
                    }
                }
            });
        }
    } catch (e) {
        console.log("[syca_allClickTrackingHome] Exception " + e.toString());
    }
}