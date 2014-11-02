var Market = (function (Market) {
    Market.Views = Market.Views || {};

    Market.Views.LibraryView = Backbone.View.extend({
	el:"#content",
	initialize: function () {
	    this.template = _.template($("#library-template").html());
	    this.render();
	},
	render: function() {
	    var data = [1, 2, 3, 4];
	    this.$el.html(this.template({data: data}));

	    var library = this.model.library();
	    library.fetch({
		success:function(library){
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
