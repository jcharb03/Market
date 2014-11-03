var Market = (function (Market) {
    Market.Views = Market.Views || {};

    Market.Views.LibraryView = Backbone.View.extend({
	el:"#content",
	initialize: function () {
	    this.template = _.template($("#library-template").html());
	    this.render();
	},
	render: function() {
	    var self = this
	    this.$el.html(this.template());

	    this.model.library.fetch({
		success:function(library){
		    var views = library.map(function(medium) {
			var view = new Market.Views.MediumCell({
			    model: medium
			});
			view.$("a").first().attr("href", "/#/media/"+medium.get("id"));
			console.log(medium.attributes);
			return view;
		    });
		    
		    views.forEach(function(view) {
			self.$el.find("#mediaList").append(view.$el);
		    });

		    console.log("Rendered library");
		},
		error:function(library){
		    console.log("render error");
		}
	    });

	    return this;
	}
    });

    return Market;
})(Market || {});
