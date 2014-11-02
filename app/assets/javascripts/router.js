var Market = (function (Market) {
    
    Market.Router = Backbone.Router.extend({
	routes: {
	    "" : "home",
	    "add" : "addMedium"
	},

	addMedium: function() {
	    console.log("Loading add Medium");
	    $("#content").empty();
	    new Market.Views.AddMediumView();
	},

	home: function() {
	    console.log("Loading home");
	    console.log("sample: " + window.mediumId);
	    var medium = new Market.Model.Medium({id: window.mediumId});
	    medium.fetch({
		success:function(medium){
		    console.log("success");
		    $("#content").empty();
		    new Market.Views.MediumDetailView({model: medium});
		},
		error: function() {
		    console.log("failed to fetch model");
		}
	    });
	},
	
	execute: function(cb, args) {
	    new BannerView();
	    new MenuView();
	    console.log("Switching");
	    cb.apply(args);
	}
    });

    Backbone.history.start();
    Market.router = new Market.Router();

    return Market;
})(Market || {});
