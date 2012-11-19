function capitaliseFirstLetter(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

function log(str) {
	Ti.API.log("Logging " + str);
}

function isBlank(str) {
	return (!str || /^\s*$/.test(str));
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function undef(param) {
	if ( typeof param === 'undefined')
		return true;
	else {
		if (isBlank(param))
			return true;
		else
			return false;
	}
}

function notifyOkDialog(message, title) {
	var diag = Ti.UI.createAlertDialog({
		message : message,
		ok : 'Okay',
		title : title
	})

	return diag;

}

