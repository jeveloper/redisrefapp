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

__exports.markBookmarked = function(_commandid, _catid) {

	this.view.table.getData().forEach(function process(section) {

		//itearting through sections

		if (section.categoryID == _catid) {

			section.rows.forEach(function process(row) {

				if (row.id == _commandid) {

					row.getChildren().forEach(function process(obj) {
						if (obj.id && obj.id == 'star') {

							obj.setVisible(true);
							return true;
						}

					});
					//children components
				}//if commandid

			});
			//rows

		}// if category matched
	});
};

//Needs to have bookmarks loaded
__exports.showStars = function() {

	this.view.table.getData().forEach(function process(section) {

		//itearting through sections

		section.rows.forEach(function process(row) {

			row.getChildren().forEach(function process(obj) {
				if (obj.id && obj.id == 'star') {

					if (Datastore.isBookmarked(row.id)) {
						obj.setVisible(true);
					} else {
						obj.setVisible(false);
					}
				}

			});

		});

	});

};

