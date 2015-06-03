define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "b3f8327bfe194e6ea5daf9b8a7b83a54",
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "Maryland adopted new Congressional districts on October 20. 2011 (per <a href='http://www.usconstitution.net/xconst_A1Sec2.html'><b>U.S. Constitution Article I, Section 2</b></a>) and new State Legislative districts on February 24, 2012 (per <a href='http://msa.maryland.gov/msa/mdmanual/43const/html/03art3.html'><b>Maryland Constitution Article III, Section 5</b></a>) based on the changes in population reported<br/> in the 2010 U.S. Census and in accordance with Maryland's <a href='http://planning.maryland.gov/Redistricting/2010/newLaw.shtml'><b>'No Representation Without Population Act'</b></a> of 2010.<br/><br/>The Maryland Department of Planning (MDP) is the repository of the 2011 Congressional and 2012 Legislative districts as well as historical reapportionment and redistricting maps and data. MDP is Maryland's designated State Agency coordinator for the Census Redistricting Data Program with the U.S. Bureau of the Census.<br/><br/>This interactive map provides a common platform to view Maryland Congressional and Legislative Districts.<br/><br/>The map automatically loads data layers based on the map selected by the user. Layers can be selected by clicking on the layers button and checking the box next to the layer<br/> you are interested in.<br/>  Additional tools are available at the top and the left of the map, including a search, find my location, and zoom to statewide extents. Users can<br/> 'click' on a feature to activate a<br/> popup window that will provide the district numbers for the location clicked. Depending on the number of layers that are turned on multiple 'popup' windows may be accessible. The arrow (>) button can be used to page through the different popups.<br/><br/>Questions?-<br/> <a href='mailto:DLMDP-GIS_MDP@maryland.gov'><b>GIS_MDP@maryland.gov<br/><br/><a href='http://planning.maryland.gov/Redistricting/'><b>Maryland Redistricting Website",
    "defaultPanel": "legend",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableShareDialog": true,
    "enableBookmarks": true,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": true,
    "enableMoreInfo": true,
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "notesLayer": {
        "id": "mapNotes_7330"
    },
    "swipeLayer": {
        "id": "Weather_Warnings_Watches_Advisories_Statements_2563"
    },
    "swipeType":"vertical",
    "swipeInvertPlacement":true,
    "hideNotesLayerPopups": true,
    "enableInstagram": true,
    "instagramVisible": false,
    "enableFlickr": true,
    "flickrVisible": false,
    "flickrSearch": "",
    "enableTwitter": true,
    "twitterVisible": false,
    "twitterSearch": "",
    "enableWebcams": true,
    "webcamsVisible": false,
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
    "twitterUrl": location.protocol + "//tmappsevents.esri.com/website/twitter-oauth-proxy-php/index.php",
    "twitterSigninUrl": location.protocol + "//tmappsevents.esri.com/website/twitter-oauth-proxy-php/sign_in.php",
    "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
    "webcams_key": "65939add1ebe8bc9cc4180763f5df2ca",
    "instagram_key": "288c36a1a42c49de9a2480a05d054619",
    /*
    "bannedUsersService": location.protocol + "//services.arcgis.com/QJfoC7c7Z2icolha/ArcGIS/rest/services/fai/FeatureServer/2",
    "bannedWordsService": location.protocol + "//tmservices1.esri.com/ArcGIS/rest/services/SharedTools/Filter/MapServer/1",
    "flagMailServer": location.protocol + "//tmappsevents.esri.com/Website/pim_fai/fai.php",
    */
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you 
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties. 
    "queryForOrg": true,
    // This template is localized. Keep true.
    "localize": true,
    // custom URL parameters for this template
    "urlItems": [
        "extent"
    ],
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
           }]
    }
});