// this sets the background color of the master UIView (when there are no windows/tab groups on it)

// GLOBALS

//lets version 1.1 and big features 2.0
var app_version = '1.0';

var BOOKMARKS_NAME = "bookmarks";
var BOOKMARKS_IDS = [];

//TODO if IOS 6 hide status bar
//Titanium.UI.iPhone.hideStatusBar();


Ti.include('/fe/fe.js');

//Load DB
var Datastore = require('/fe/datastore');
var Map = require('/fe/base/hashmap');
var Users = require('/fe/users');

var Cloud = require('ti.cloud');
Cloud.debug = false;
//PROD is false

Titanium.include('/fe/utils.js', '/fe/listeners.js');

Fe.includeControllers(['CommandList', 'Bookmarks', 'Settings', 'ShowDetails', 'Frame']);

//Background IMAGES

//http://good-wallpapers.com/abstract/14509

/*
Updating layout in ONE operation
myView.updateLayout({
top: 50,
left: 50,
width: 200
});

GET RID OF WARNINGS

{height:Ti.UI.SIZE,width:Ti.UI.SIZE}

* */
/*
COOL effect pull head view

create view
var header = Ti.UI.createView({
width: "100%",
height: 107,
backgroundColor:'blue',
//backgroundImage: 'path.jpg',
top: 5
});

then assign it to table

headerPullView: header,

*
* */

// optional; if you add this line, set it to false for production

if (!Titanium.App.Properties.hasProperty(BOOKMARKS_NAME)) {

	Ti.App.Properties.setList(BOOKMARKS_NAME, []);
} else {

	//load it from properties
	BOOKMARKS_IDS = Ti.App.Properties.getList(BOOKMARKS_NAME);
}

/*
*
* note the exit on close
*
*
* var win = Ti.UI.createWindow({
title: 'Click window to output UI dimensions',
backgroundColor: 'white',
orientationModes: [ Titanium.UI.PORTRAIT ], // UI restricted to portrait mode
fullscreen: false,
exitOnClose: true
});
*
*/

//REDUCING CODE use this lib
//https://github.com/dawsontoth/Appcelerator-Titanium-Redux

//FONTS IN IOS and Android
//http://iosfonts.com/

//while connecting online we might not receive bookmarks_ids

//TESTING ONLY
//Ti.App.Properties.removeProperty('userid');

Fe.setRootController(Fe.controllers.Frame);
Fe.openWindow();

//whats .blur() callback on IOs

//
//fast load, get use the bookmarks from properties as list

if (Titanium.App.Properties.hasProperty(BOOKMARKS_NAME)) {
	BOOKMARKS_IDS = Ti.App.Properties.getList(BOOKMARKS_NAME);
}

//show stars will work if bookmarkids will exist
Fe.controllers.CommandList.showStars();




//if there is an account, login
//send event to login?

if (Titanium.Network.online && Titanium.App.Properties.getString("username")) {
	Users.loginCloudUser({
		username : Titanium.App.Properties.getString("username")
	}, function(e) {
		if (e.success) {

		}
	});

}

