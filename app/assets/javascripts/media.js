var Market = (function (Market) {
    //Bind the model

    Market.Model = Market.Model || {};
    
    Market.Model.Medium = Backbone.Model.extend({
	defaults: {
	    title: "",
	    author: "",
	    type: "",
	    aux: "",
	    created: "",
	    owner: -1pp
	}
    });
    
    Market.Model.Media = Backbone.Collection.extend({
	model: Medium
    });


    //Bind the Media Vies
    var MediumDetailView = Backbone.View.extend({
	initialize: function() {
	    this.template = _.template($("#media-template").html());
	    this.render();
	}
	
	render : function () {
	    this.$el.html(this.template());
	}
	
    });

    
    
    return Market;


    function getGlyph(type) {
	var elem, glyphType;
	const defaultGlyphType = "glyphicon-ban-circle";

	glyphType = ({
	    music: "glyphicon-music",
	    movie: "glyphicon-film",
	    book:  "glyphicon-book",
	    game:  "glyphicon-tower"
	}[type]) || defaultGlyphType;
	
	elem = $("<span></span>");
	elem.addClass("glyphicon");
	elem.addClass(glyphType);
	
	return elem;
    }

})(Market || {});



