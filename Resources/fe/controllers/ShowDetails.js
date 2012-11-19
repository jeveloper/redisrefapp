var currentRefId;
var currentRefCatId;

__exports.viewLoaded = function() {

	var self = this;

	this.view.webview.addEventListener('swipe', function(e) {
		if (e.direction == 'right') {
			Fe.controllers.Frame.switchController(Fe.controllers.CommandList);
		}
		
		//pop used to work coz we came from bookmarks and not command list
	});

	this.view.backtolistbtn.addEventListener('click', function(e) {
		Fe.controllers.Frame.switchController(Fe.controllers.CommandList);
	});

	this.view.favButton.addEventListener('click', function(e) {

		//TODO check if its in properties , if it is remove and change the button

		if (Titanium.App.Properties.hasProperty("userid")) {

			BOOKMARKS_IDS.push(currentRefId);

			//update properties
			Ti.App.Properties.setList(BOOKMARKS_NAME, BOOKMARKS_IDS);

			self.view.favButton.setEnabled(false);

			Ti.App.fireEvent("app:markbookmarkstar", {
				id : currentRefId,
				categoryid : currentRefCatId
			});
			Ti.App.fireEvent("app:updateuserlist");

		}

	});
	//check if its in bookmarks

	//right means swipe from left to right , popcontroller will go back to prvious
};

__exports.populateWithData = function(_id, _categoryid) {

	currentRefId = _id;
	currentRefCatId = _categoryid;

	Datastore.getCommandById(_id, function(command) {
		//renders at template.html
		Ti.App.fireEvent('ui:showdetails', command);
	});

	if (Datastore.isBookmarked(currentRefId)) {
		//we disable it
		//if we already have it bookmarked
		this.view.favButton.setEnabled(false);

	} else {
		//THIS MEANS WE DONT HAVE THAT KEY

		this.view.favButton.setEnabled(true);

	}

};

