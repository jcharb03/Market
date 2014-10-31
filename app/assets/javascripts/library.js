
var LibraryView = Backbone.View.extend({
    el:"#content",
    initialize: function () {
	this.template = _.template($("#library-template").html());
	this.render();
    },
    render: function() {
	var data = [1, 2, 3, 4];
	this.$el.html(this.template({data: data}));
	return this;
    }
});



templateLoader.on("load:templates", function () {

    

    new LibraryView();
});


