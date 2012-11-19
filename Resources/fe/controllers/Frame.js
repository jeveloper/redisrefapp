__exports.viewLoaded = function() {

	var self = this;

	this.view.mainFrame.layouting = function(block) {
		this.startLayout();
		block();
		this.finishLayout();
	};

	this.switchController(Fe.controllers.CommandList);

	this.view.mainMenu.bookmarksButton.addEventListener('click', function() {

		//if user isnt set , we can show the signup/login menu
		if (!Titanium.App.Properties.hasProperty("userid")) {
			self.switchController(Fe.controllers.Settings);
		} else {
			//rebuild the UI tableview only when called
			Ti.App.fireEvent("app:loadbookmarks");
			Ti.App.fireEvent("app:showbookmarksui");
		}
	});

	this.view.mainMenu.commandsButton.addEventListener('click', function() {
		self.switchController(Fe.controllers.CommandList);
	});

};

__exports.switchController = function(controller) {

	var self = this;

	if (this.controller == controller) {
		this.closeMenu();
		return;
	}

	if (this.controller === undefined) {
		this.controller = controller;
		this.view.mainFrame.layouting(function() {
			self.controller.view.left = Fe.screenWidth;
			self.view.mainFrame.add(self.controller.view);
		});
		return;
	}

	var previous = this.controller;
	this.controller = controller;

	this.view.mainFrame.animate({
		duration : Fe.changeControllerDuration,
		left : 0,
		top : 0
	}, function() {
		self.view.mainFrame.layouting(function() {
			self.view.mainFrame.left = 0;
			self.controller.view.left = Fe.screenWidth;

			self.view.mainFrame.remove(previous.view);
			self.view.mainFrame.add(self.controller.view);
		});

		self.view.mainFrame.animate({
			duration : Fe.changeControllerDuration,
			left : -Fe.screenWidth,
			top : 0
		}, function() {
			self.view.mainFrame.left = -Fe.screenWidth;
		});
	});
};

__exports.isMenuOpen = function() {
	return (this.view.mainFrame.left == -Fe.screenWidth);
}

__exports.toggleMenu = function(block) {
	if (this.isMenuOpen()) {
		this.openMenu(block);
	} else {
		this.closeMenu(block);
	}
};

__exports.closeMenu = function(block) {
	var self = this;

	this.view.mainFrame.animate({
		duration : Fe.changeControllerDuration,
		left : -Fe.screenWidth,
		top : 0
	}, function() {
		self.view.mainFrame.left = -Fe.screenWidth;

		if (block !== undefined)
			block();
	});
};

__exports.openMenu = function(block) {
	var self = this;

	this.view.mainFrame.animate({
		duration : Fe.changeControllerDuration,
		left : -Fe.screenWidth / 2,
		top : 0
	}, function() {
		self.view.mainFrame.left = -Fe.screenWidth / 2;

		if (block !== undefined)
			block();
	});
};
