var sycaAllBasicDataHome= {};
sycaAllBasicDataHome = {
    "syca_movieURLHome": "https://www.spacejam.com/",
    "syca_movieDirectURLHome": "https://www.spacejam.com/",
    "movieNameHome": "Space Jam: A New Legacy",
    "countryListHome": "us",
    "countryListForShowsHome": "us",
    "setMovieIDHome": "44",
    "countryNameHome": "United States",
    "cityName": "Washington",
    "coutryLatitudeHome": "47.751076",
    "coutryLongitudeHome": "-120.740135",
    "siteReferrerTextHome": "direct_dev",
    "siteReferrerTextHomeLive": "direct",
    "siteCampaignTextHome": "none_dev",
    "siteCampaignTextHomeLive": "none",
    "countryCodeTextHome":"test",
    "ticketingSectionOnOff":false,  
    "siteIsForESB":false,  
    "geoLocationurlHome":{     
        "getCityIpDetailsURL":"https://devshowtimes.wbpsites.com/api/ticketing/GetSiteData"
    },
    "geoLocationurlHomeLive":{     
        "getCityIpDetailsURL":"https://showtimes.wbpsites.com/api/ticketing/GetSiteData"
    },
    "apicallsurlHome":{
        "postTrackingURL":"https://devshowtimes.wbpsites.com/api/Analytics/AddData"
    },
    "apicallsurlHomeLive":{
        "postTrackingURL":"https://showtimes.wbpsites.com/api/Analytics/AddData"
    },
   
}

if(sycaAllBasicDataHome.ticketingSectionOnOff){
        console.log("Ticketing CSS Called");

        var link_customeCss = document.createElement('link');
        link_customeCss.setAttribute('rel', 'stylesheet');
        link_customeCss.setAttribute('type', 'text/css');
        link_customeCss.setAttribute('href', 'assets/css/common.css');
        document.getElementsByTagName('head')[0].appendChild(link_customeCss);

        var link_styleCss = document.createElement('link');
        link_styleCss.setAttribute('rel', 'stylesheet');
        link_styleCss.setAttribute('type', 'text/css');
        link_styleCss.setAttribute('href', 'assets/css/style.css');
        document.getElementsByTagName('head')[0].appendChild(link_styleCss);

        var link_googlemapCss = document.createElement('link');
        link_googlemapCss.setAttribute('rel', 'stylesheet');
        link_googlemapCss.setAttribute('type', 'text/css');
        link_googlemapCss.setAttribute('href', 'assets/css/googlemap.css');
        document.getElementsByTagName('head')[0].appendChild(link_googlemapCss);

        var link_jscrollpaneCss = document.createElement('link');
        link_jscrollpaneCss.setAttribute('rel', 'stylesheet');
        link_jscrollpaneCss.setAttribute('type', 'text/css');
        link_jscrollpaneCss.setAttribute('href', 'assets/css/jquery.jscrollpane.css');
        link_jscrollpaneCss.setAttribute('media', 'all');
        document.getElementsByTagName('head')[0].appendChild(link_jscrollpaneCss);

}