__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor : '#000'
	});

	view.mainFrame = Titanium.UI.createView({
		left : -Fe.screenWidth,
		top : 0,
		width : Fe.screenWidth * 2,
		height : Fe.screenHeight
	});

	view.add(view.mainFrame);

	view.mainMenu = Titanium.UI.createView({
		title : 'Menu',
		left : 0,
		top : 0,
		width : Fe.screenWidth,
		height : Fe.screenHeight,
		backgroundImage : 'images/dot_bg.png'
		//backgroundColor : '#FFCCAA'
	});


	view.mainFrame.add(view.mainMenu);

	view.mainMenu.bookmarksButton = Ti.UI.createButton({
		left : Fe.screenWidth / 2 + 10,
		top : 10,
		width : Fe.screenWidth / 2 - 20, //130,
		height : 30,
		title : 'Bookmarks'
	});

	view.mainMenu.add(view.mainMenu.bookmarksButton);

	view.mainMenu.commandsButton = Ti.UI.createButton({
		left : Fe.screenWidth / 2 + 10,
		top : 50,
		width : Fe.screenWidth / 2 - 20, //130,
		height : 30,
		title : 'All Commands'
	});

	view.mainMenu.add(view.mainMenu.commandsButton);

	return view;
})();
