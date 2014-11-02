var Market = (function (Market) {
    
    Market.Router = Backbone.Router.extend({
	routes: {
	    "" : "home",
	    "add" : "addMedium",
	    "media/:id": "showMedium"
	},

	addMedium: function() {
	    console.log("Loading add Medium");
	    $("#content").empty();
	    new Market.Views.AddMediumView();
	},

	showMedium: function(id) {
	    console.log("Routed show");
	    console.log("id: " + id);
	    var medium = new Market.Model.Medium({id: id});
	    medium.fetch({
		success:function(medium){
		    console.log(medium);
		    console.log("Got medium");
		    $("#content").empty();
		    new Market.Views.MediumDetailView({model: medium});
		},
		error:function() {
		    console.log("Error");
		}
	    });
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
	}
    });

    Backbone.history.start();
    Market.router = new Market.Router();

    return Market;
})(Market || {});
