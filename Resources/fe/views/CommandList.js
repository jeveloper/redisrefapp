__exports = (function() {
	var view = Ti.UI.createView({
		backgroundImage : 'images/640_bg.png'

	});

	/*
	 *
	 * CORNER BUTTON

	 view.addButton = Ti.UI.createButton({
	 right : 10,
	 top : 10,
	 width : 100,
	 height : 30,
	 title : 'Add'
	 });
	 view.add(view.addButton);
	 */
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
		hintText : 'Search command',
		backgroundColor : 'transparent'

	});

	// create table view
	view.table = Titanium.UI.createTableView({
		//translucent:true,
		//backgroundImage
		backgroundColor : 'transparent',
		search : view.searchbar,
		searchHidden : true,
		top : 42,
		left : 0,
		right : 0,
		bottom : 0,
		scrollable : true,
		editable : false,
		separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,

		style : Titanium.UI.iPhone.TableViewStyle.GROUPED //TODO test GROUPED is NOT supported in Android
	});

	view.add(view.table);

	//SECTION HEADER STYLING
	//http://developer.appcelerator.com/question/21591/can-you-style-grouped-table-view-headers-
	(function() {

		var map = new Map.HashMap();

		//#1 get all categories

		//#2 iterate thru , add to array of sections

		Datastore.getAllCategories().forEach(function process(category) {

			var customView = Ti.UI.createView({
				height : 'auto',
				layout : 'horizontal'
			});

			var customLabel = Ti.UI.createLabel({
				left : 10,
				height : 'auto',
				text : category.catname,
				font : {
					fontFamily : 'sans-serif',
					fontSize : 26
					//,fontWeight : 'bold'
				},
				color : '#d3d3d3'

			});
			customView.add(customLabel);

			map.put(category._id, Ti.UI.createTableViewSection({
				headerView : customView,
				//CUSTOM OBJECT
				categoryID : category._id

			}));
		});
		//END forEach categories

		//reusable objects

		Datastore.getAllCommands().forEach(function process(command) {

			var commandid = command._id.$oid;

			var row = Ti.UI.createTableViewRow({
				height : 60,
				className : 'row', //IMPROVES PERFORMANCE

				//id, categoryID too is a custom field , not native to Ti.UI
				categoryID : command.catid,
				id : commandid,
				backgroundColor : '#FEFEFE',
				title : command.name + ' ' + command.params,
				color : "black",
				font : {
					fontSize : 22
				}
			});

			//set it as disabled
			//later we can re-render data after bookmarks are loaded
			//animate from opacity 0.0 to 0.3

			var star = Ti.UI.createImageView({
				id : 'star',
				left : '90%',
				top : '2',
				image : 'images/star_enabled.png',
				width : '26',
				height : '26',
				opacity : 0.3,
				visible : false,
				touchEnabled : false

			});
			row.add(star);

			var label = Ti.UI.createLabel({
				text : command.shortdesc,
				color : "#666",
				top : 40,
				textAlign : 'left',
				left : 30,
				font : {
					//fontFamily : 'Verdana',
					fontSize : 12
				},
				width : 'auto',
				height : 'auto'

			});

			row.add(label);

			//#4 now we add row to section based on catid

			//check if it exist in the first place
			if (!(map.get(command.catid) === undefined)) {
				//category exists
				map.get(command.catid).add(row);

			}

			//TODO for android it'll be simple UI
			//data.push(row);

		});

		view.table.setData(map.toArray());
		view.table.finishLayout();
	})();

	return view;
})();
