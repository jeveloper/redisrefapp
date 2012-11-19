



__exports = (function() {
	var view = Ti.UI.createView({
		backgroundImage : 'images/640_bg.png'

	});
	
	
	
	view.menuButton = Ti.UI.createButton({
		left : 10,
		top : 10,
		width : 30,
		height : 30,
		backgroundImage : 'images/icon_list_bullets.png'
	});
	view.add(view.menuButton);

	// table view , searchable

	//TODO add label from language file L('pull_down_to_reload')
	view.searchbar = Titanium.UI.createSearchBar({

		barColor : 'black',
		showCancel : false,
		hintText : 'Search commands within bookmarks',
		backgroundColor : 'transparent'

	});

	// create table view
	view.table = Titanium.UI.createTableView({
		search : view.searchbar,
		searchHidden : true,
		top : 42,
		left : 0,
		right : 0,
		bottom : 0,
		scrollable : true,
		separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
	

		//style : Titanium.UI.iPhone.TableViewStyle.GROUPED //TODO test GROUPED is NOT supported in Android
	});

	view.add(view.table);


	return view;
})();
