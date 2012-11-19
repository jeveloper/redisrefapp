__exports.viewLoaded = function() {

	var self = this;

	this.view.signupbtn.addEventListener("click", function(e) {

		var email = self.view.emailbox.getValue();

		//you might already have an account, in future ill add
		//	if (!Titanium.App.Properties.hasProperty("userid")) {

		//process

		//check if online
		if (Titanium.Network.online) {

			if (validateEmail(email)) {
				Users.createCloudUser({}, function(e) {
					if (e.success) {
						log("Success signup");

						//SMART logic

						//if there are no bookmarks , lenght 0 , dont go to bookmarks page, go to commands instead

						if (BOOKMARKS_IDS.length > 0) {

							Ti.App.fireEvent("app:showbookmarksui");

						} else {
							Ti.App.fireEvent("app:showcommandssui");
						}

					} else {
						notifyOkDialog('Could not signup, sorry', "App").show();
					}
				});

			} else {
				notifyOkDialog('Please enter email address', "Input").show();
			}

		} else {
			notifyOkDialog('Please go online to signup', "Connection").show();
		}

		//if not show alert that you arent online

		//if online

		//validateEmail == true

		//if not valid, show an alert

		//if valid

		//create cloud user

		//in case of failure , suggest another email address since its taken

		//if success , load bookmarks, set all properties settings, userid, username

	});

	this.view.loginbtn.addEventListener("click", function(e) {

		var email = self.view.emailbox.getValue();

		//check if online
		if (Titanium.Network.online) {

			if (validateEmail(email)) {
				Users.loginCloudUser({
					username : email
				}, function(e) {
					if (e.success) {
						log("logged in");

						//SET ALL THE VALUES, username????
						Titanium.App.Properties.setString("username", email);

						Ti.App.fireEvent("app:reloadbookmarks");
						Ti.App.fireEvent("app:showbookmarksui");

					} else
						notifyOkDialog('Could not login', "App").show();
				});

			} else {
				notifyOkDialog('Please enter email address', "Input").show();
			}

		} else {
			notifyOkDialog('Please go online to login', "Connection").show();
		}

		//after login , set the local properties

	});

};
