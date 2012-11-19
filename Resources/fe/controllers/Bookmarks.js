__exports.showDetails = function(_refId, _catid) {

	Fe.controllers.ShowDetails.populateWithData(_refId, _catid);

	Fe.controllers.Frame.switchController(Fe.controllers.ShowDetails);

};

__exports.viewLoaded = function() {

	var self = this;

	this.view.searchbar.addEventListener('change', function(e) {
		e.value // search string as user types
	});
	this.view.searchbar.addEventListener('return', function(e) {
		self.view.searchbar.blur();
	});
	this.view.searchbar.addEventListener('cancel', function(e) {
		self.view.searchbar.blur();
	});

	this.view.menuButton.addEventListener('click', function() {
		Fe.controllers.Frame.toggleMenu();
	});

	//event handler on click on the data table

	this.view.table.addEventListener('click', function(e) {

		self.showDetails(e.rowData.id, e.rowData.categoryID);

	});

};

__exports.populate = function() {


var data = [];
	Datastore.getBookmarkedCommands().forEach(function process(command) {


		var commandid = command._id.$oid;

		var row = Ti.UI.createTableViewRow({
			height : 60,
			className : 'row', //IMPROVES PERFORMANCE

			id : commandid,
			backgroundColor : '#FEFEFE',
			title : command.name + ' ' + command.params,
			color : "black",
			font : {

				fontSize : 22
			},
		});

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

		//TODO for android it'll be simple UI
		data.push(row);

	});

	this.view.table.setData(data);
	this.view.table.finishLayout();

};
