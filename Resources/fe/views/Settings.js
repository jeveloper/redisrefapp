__exports = (function() {
	var view = Ti.UI.createView({
		backgroundImage : 'images/640_bg.png',
		layout: "vertical",
		left:20, right: 20,
		

	});

	//TODO first label saying login or create account
	
		view.infolabel = Ti.UI.createLabel({
				text : "Create an account to access bookmarks & notes among devices",
				color : "#666",
				top : 15,
				bottom:15,
				textAlign : 'left',
				
				font : {
					fontFamily: 'Helvetica Neue',
					//fontFamily : 'Verdana',
					fontSize : 20
				},
				width : 'auto',
				height : 'auto'

			});

view.add(view.infolabel);



//text button

view.emailbox = Ti.UI.createTextField({
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
				hintText: "your@email.com",
				 bottom:25,
				color: 'gray',
				backgroundColor: 'white',
				width : '100%',
				height : '45',
				autocorrect: false,
				keyboardType: Ti.UI.KEYBOARD_EMAIL,
				
	
});

view.add(view.emailbox);

//two buttons , login , setup


view.loginbtn = Ti.UI.createButton({
	title: "Login",
	color: "gray",
	width : '100%',
	height : 'auto'

});

view.signupbtn = Ti.UI.createButton({
	title: "Create account",
	color: "gray",
	top: 15,
	
	width : '100%',
	height : 'auto'
	
	});


view.add(view.loginbtn);
view.add(view.signupbtn);




//validate that its an email?

//upon signup  - create user with array of bookmark ids

//upon login - get a list of bookmark ids from cloud




	return view;
})();
