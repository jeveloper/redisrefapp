exports.createCloudUser = function(data, callback) {

	var username = "";
	if (!undef(data.username)) {
		username = data.username.trim();

	} else {
		var randomnumber = Math.floor(Math.random() * 100001);
		username = 'rds' + randomnumber;
	}

	Cloud.Users.create({
		username : username,
		password : 'changeme',
		password_confirmation : 'changeme',
		custom_fields : {
			bookmarkids : BOOKMARKS_IDS
		}
	}, function(e) {
		if (e.success) {

			var user = e.users[0];

			Ti.App.Properties.setString('userid', user.id);
			Ti.App.Properties.setString('username', username);

			callback(e);

		} else {
			//alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));

			callback(e);
		}
	});

};

exports.loginCloudUser = function(userdata, callback) {

	var username = userdata.username;

	if (!undef(userdata.username)) {
		username = Titanium.App.Properties.getString("username");
	}

	Cloud.Users.login({
		login : username,
		password : 'changeme'
	}, function(e) {
		if (e.success) {
			var user = e.users[0];

			Titanium.App.Properties.setString("username",username);

			//LOADED bookmarks from cloud
			Ti.App.Properties.setList(BOOKMARKS_NAME, user.custom_fields.bookmarkids);
			BOOKMARKS_IDS = user.custom_fields.bookmarkids;
			//TODO check if this is assingment or copy

			callback(e);

			//alert('Success:\\n' + 'id: ' + user.id + '\\n' + 'first name: ' + user.first_name + '\\n' + 'last name: ' + user.last_name);
		} else {
			//alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			callback(e);
		}
	});

};

exports.updateCloudUser = function(userdata, callback) {

	//UPDATE LIST
	Cloud.Users.update({

		custom_fields : {
			bookmarkids : BOOKMARKS_IDS
		}
	}, function(e) {
		if (e.success) {

			callback(e);
		} else {
			callback(e);
		}
	});

};

exports.setUserKeyValue = function(userdata, callback) {

	Cloud.KeyValues.set({
		name : userdata.name,
		type : 'string',
		value : userdata.value,
		access_private : true,
		user_id : Titanium.App.Properties.getString("userid")
	}, function(e) {
		if (e.success) {
			callback();
		} else {
			var err = e.message;
			callback(err);
		}
	});

};
