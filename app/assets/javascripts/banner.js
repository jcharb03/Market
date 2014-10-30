
var BannerView = Backbone.View.extend({
    el: "#banner",
    initialize: function() {
	this.template = _.template($("#banner-template").html());
	this.render();
    }, 
    render: function() {
	this.$el.html(this.template());
	return this;
    }
});


$(function() {
    console.log(templateLoader);
    templateLoader.on("load:templates", function () {
	new BannerView();
	console.log("Hello");
    });
});
