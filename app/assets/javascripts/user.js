var Market = (function (Market) {
    var User = Backbone.Model.extend({
	urlRoot: "/users",
	defaults : {
	    name: null,
	    phone: null,
	    zipcode: null,
	    email: null
	},
	library: function() {
	    var url = "/users/"+this.get("id")+"/media";
	    console.log(url);
	    var ret = new Market.Model.Media();
	    ret.url = url;
	    return ret;
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
