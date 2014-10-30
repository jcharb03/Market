
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


templateLoader.on("load:templates", function () {
    console.log("Initializing banner");
    window.bannerView = new BannerView();
});
