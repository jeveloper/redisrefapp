Titanium.App.addEventListener('app:updateuserlist', function() {

	if (Titanium.Network.online) {
		Users.updateCloudUser({}, function(e) {
		});
	}
});

//ALL THIS DOES is rebuilds the table view for bookmarks page
Titanium.App.addEventListener('app:loadbookmarks', function() {
	Fe.controllers.Bookmarks.populate();
});

Titanium.App.addEventListener('app:showbookmarksui', function() {
	Fe.controllers.Frame.switchController(Fe.controllers.Bookmarks);
});

Titanium.App.addEventListener('app:showcommandssui', function() {
	Fe.controllers.Frame.switchController(Fe.controllers.CommandList);
});

Titanium.App.addEventListener('app:markbookmarkstar', function(data) {
	Fe.controllers.CommandList.markBookmarked(data.id, data.categoryid);
});

