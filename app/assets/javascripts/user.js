var Market = (function (Market) {
    var User = Backbone.Model.extend({
	urlRoot: "/users",
	defaults : {
	    name: null,
	    phone: null,
	    zipcode: null,
	    email: null
	},
	hasBeenFetched: false,
	library: function() {
	    return this.get("library") || getNewLibrary.call(this);
	    function getNewLibrary() {
		console.log("creating library");
		var url = "/users/"+this.get("id")+"/media";
		var myLibrary = new Market.Model.Media();
		myLibrary.url = url;
		this.set("library", myLibrary);
		var self = this;
		myLibrary.fetch({
		    success: function() {
			self.hasBeenFetched = true;
		    }
		});
		return myLibrary;
	    }
	}
    });

    User.getCurrentUser = function () {
	var id = _.isNumber(window.uid) ? window.uid : null;
	return id && new User({id: id});
    }

    //export 
    Market.Model = Market.Model || {};
    Market.Views = Market.Views || {};

    Market.Model.User = User;

    return Market;
})(Market || {});
