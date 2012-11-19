__exports = (function() {
	var view = Ti.UI.createView({
		backgroundColor : '#fafafa',
		layout : 'vertical'
	});

	//LAYOUT set to vertical, that means we dont need to set top offsets

	//Create a bar (view with two buttons)

	view.topview = Ti.UI.createView({
		width : 'auto', //used to specify fe.screenWidth
		height : '40',
		//backgroundColor : '#fafafa',
		layout : 'horizontal',
		//borderWidth: 1, borderColor: 'black',
		horizontalWrap : true
	});

	view.backtolistbtn = Ti.UI.createButton({
		left : 10,
		top : 5,
		width : 86,
		height : 30,

		backgroundImage : 'images/wicked_arrow.png'
	});

	view.topview.add(view.backtolistbtn);

	//pushing favourite button to the very right : set left property : Whole Screen width (derived from TI.defs ) , minus already used width of an element before it (eg button)
	// minus the current button width

	view.favButton = Ti.UI.createButton({
		left : Fe.screenWidth - (96 + 26),
		top : 5,
		width : '26',
		height : '26',
		backgroundDisabledImage : 'images/star_enabled.png',
		backgroundImage : 'images/28-star.png'
	});

	view.topview.add(view.favButton);

	view.add(view.topview);

	view.webview = Ti.UI.createWebView({
		url : 'template.html',
		height : 'auto',
		width : Fe.screenWidth,
		top : 10,
		willHandleTouches : false

	});

	view.webview.scalesPageToFit = false;
	//this looks like if true

	//THIS PREPARES the template for any calls to it, its a TRICK
	view.webview.evalJS(" ");

	//after this i can fire events and script in the template will be activated

	view.add(view.webview);

	return view;
})();

