var sycaAllBasicData= {};
sycaAllBasicData = {
    "showPopUpForNewTabLink": false,
    "timeFormat":"12",
    "distanceFormat":"km",
    "setDistanceRange":15,
    "getResultPagePara":1,
    "syca_showBanner":false,
    "syca_googleMapKey":"AIzaSyDm98sjdh2tfy60qObg33kVkcLybq7KxQQ",
    "ticketingSiteTextCase":"uppercase",
    "commontext": {
        "searchByTitle": "Enter Location",
        "dateSelectTitle": "select a day",
        "formatFilterTitle": "Select a preferred format",
        "timingFilterTitle": "select time of day",
        "searchInputPlaceHolder": "CITY / ZIP CODE",
        "moreInfoTitle": "OTHER CITIES WITH ADDITIONAL SHOWTIMES",
        "selectTimeTitle": "select format and time",
        "purchaseTicketTitle": "Select where you want to purchase your tickets",
        "getDirTitle": "get directions",
        "clickForDirTitle": "Click here for directions",
        "mobileMapCloseText": "Close",
        "directionErrorMsg": "NO ROUTE AVAILABLE",
        "sameNodesDirectionErrorMsg": "SOURCE POINT AND DESTINATION POINT ARE SAME",
        "loadMoreText": "SHOW MORE CITIES WITH SHOWTIMES",
        "noDataOnFilter": "No data found",
        "formatTextTitle":"Format",
        "dataNotFoundTextForOtherWordSearch": {
            "dnfOtherWord1": "No showtimes found for the location entered. Please try a different location.",
            "dnfOtherWord2": ""
        },
        "dataNotFoundText": {
            "dnf1": "No showtimes found for the location entered. Please try a different location.",
            "dnf2": ""
        },
        "dataNotFoundTextWithGeoLocation": {
            "dnfWithGeo1": "It looks like you are not in UK. This page is intended for users in UK. Please enter a location in UK.",
            "dnfWithGeo2": ""
        },
        "googleMapPopupText": {
            "copyText": "The link will open in a new browser tab",
            "buttonText": "Open"
        },
        "vendorPopupText": {
            "copyText": "The link will open in a new browser tab",
            "buttonText": "Open"
        },
        "distanceText": {
            "long": "KM",
            "short": "KM"
        }
    },
    "apicallsurl":{     
        "theaterDataURL":"https://d2zqulwfed01s4.cloudfront.net/preview/"+getCustomJsonDataHome.countryListForShowsHome+"/"+getCustomJsonDataHome.setMovieIDHome+"/json/theaterlist.json",
        "getSiteResultDataURL":"https://devshowtimes.wbpsites.com/api/ticketing/GetSiteResults",
        "setAutoCompleteURL":"https://devshowtimes.wbpsites.com/api/Ticketing/getCities",        
        "getTheaterIcon":"https://d2zqulwfed01s4.cloudfront.net/preview/icons/white/",        
        "getMapIcon":"https://d2zqulwfed01s4.cloudfront.net/preview/icons/white/",        
        "getVendorIcon":"https://d2zqulwfed01s4.cloudfront.net/preview/icons/white/"
    },
    "apicallsurlLive":{    
        "theaterDataURL":"https://d2zqulwfed01s4.cloudfront.net/"+getCustomJsonDataHome.countryListForShowsHome+"/"+getCustomJsonDataHome.setMovieIDHome+"/json/theaterlist.json",
        "getSiteResultDataURL":"https://showtimes.wbpsites.com/api/ticketing/GetSiteResults",
        "setAutoCompleteURL":"https://showtimes.wbpsites.com/api/Ticketing/getCities",        
        "getTheaterIcon":"https://d2zqulwfed01s4.cloudfront.net/icons/white/",        
        "getMapIcon":"https://d2zqulwfed01s4.cloudfront.net/icons/white/",        
        "getVendorIcon":"https://d2zqulwfed01s4.cloudfront.net/icons/white/"
    },
    "mapcolor": {
        "geometry": "#7aac8d",
        "labelsTextFill": "#FFFFFF",
        "labelsTextStroke": "#000000",
        "geometryStroke": "#d8d8d8",
        "administrativeLandParcel": "#73a1d8",
        "landParcelLabelsTextFill": "#73a1d8",
        "landscapeNatural": "#7aac8d",
        "poiLabelsTextFill": "#73a1d8",
        "poiPark": "none",
        "poiParkLabelsTextFill": "#ffffff",
        "road": "#c26e58",
        "roadHighway": "#c26e58",
        "roadHighwayControlledAccess": "none",
        "roadHighwayControlledAccessGeometryStroke": "none",
        "roadLocalLabelsTextFill": "fefefe",
        "water": "#4e2319",
        "waterLabelsTextFill": "#FFFFFF",
        "directionPathColor": "#cf7512"
    },
    "filtertext": {
        "formatFilter": "Any Format",
        "timingFilter": "Any Time",
        "lateText": "Late",
        "morningText": "Morning",
        "afternoonText": "Afternoon",
        "eveningText": "Evening"
    },
    "days": {
        "sunday": "sun",
        "monday": "mon",
        "tuesday": "tue",
        "wednesday": "wed",
        "thursday": "thu",
        "friday": "fri",
        "saturday": "sat"
    },
    "months": {
        "january": "jan",
        "february": "feb",
        "march": "mar",
        "april": "apr",
        "may": "may",
        "june": "jun",
        "july": "jul",
        "august": "aug",
        "september": "sep",
        "october": "oct",
        "november": "nov",
        "december": "dec"
    }
}

if(sycaAllBasicDataHome.ticketingSectionOnOff){
    setTimeout(function(){
        console.log("Ticketing JS Called");
        var scriptTag_scriptJS = document.createElement('script');
        scriptTag_scriptJS.setAttribute("type","text/javascript");
        scriptTag_scriptJS.setAttribute("src","assets/js/script-JS.js");
        scriptTag_scriptJS.setAttribute("defer","defer");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag_scriptJS);

        var scriptTag_mousewheel = document.createElement('script');
        scriptTag_mousewheel.setAttribute("type","text/javascript");
        scriptTag_mousewheel.setAttribute("src","assets/js/jquery.mousewheel.js");
        scriptTag_mousewheel.setAttribute("defer","defer");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag_mousewheel);

        var scriptTag_jscrollpane = document.createElement('script');
        scriptTag_jscrollpane.setAttribute("type","text/javascript");
        scriptTag_jscrollpane.setAttribute("src","assets/js/jquery.jscrollpane.min.js");
        scriptTag_jscrollpane.setAttribute("defer","defer");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag_jscrollpane);

    },50);
}