define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    //"webmap": "1b5c7851b950452890f1487bbb95d637",
	"webmap": "b3f8327bfe194e6ea5daf9b8a7b83a54",
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "Priority Funding Areas are existing communities and places where local governments want State investment to support future growth. \
	<br><br>\
	The 1997 Priority Funding Areas Act capitalizes on the influence of State expenditures on economic growth and development. \
	Funding for projects in municipalities, other existing communities, industrial areas, and planned growth areas designated by counties receive priority State funding over other projects. \
	<br><br>For more information on the PFA certification process and criteria, go to:\
	<a href='http://planning.maryland.gov/OurWork/1997PFAAct.shtml' target='_blank'><b>1997 Priority Funding Areas Act</b></a>\
	<br><br><b>To search for a location</b>, type in the street address number, road name, and city. \
	<br><br><b>Questions?</b><br/>Email: <a href='mailto:DLMDP-GIS_MDP@maryland.gov?subject=Help with PFA Map'><b>DLMDP-GIS_MDP@maryland.gov</b></a>",
    
	"defaultPanel": "legend",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": false,
    "enableBasemapToggle": false,
	"enablePrintButton": true,
    "enableShareDialog": true,
    "enableBookmarks": true,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": false,
    "enableMoreInfo": false,
		"enablePrintButton": true,
    "defaultBasemap": "osm",
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
    "enableInstagram": false,
    "instagramVisible": false,
    "enableFlickr": false,
    "flickrVisible": false,
    "flickrSearch": "",
    "enableTwitter": false,
    "twitterVisible": false,
    "twitterSearch": "",
    "enableWebcams": false,
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
    "queryForOrg": false,
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
            "url": "http://geodata.md.gov/imap/rest/services/GeocodeServices/MD_CompositeLocator/GeocodeServer",
			"singleLineFieldName": "SingleLine",
			"placeholder": "Search for an Address",
			"placefinding": true
           }]
    }
});
