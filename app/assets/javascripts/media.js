var Media = Backbone.Model.extend({
    defaults: {
	title: "",
	author: "",
	type: "",
	aux: "",
	created: "",
	owner: -1;
    }
});



var MediaCellView = Backbone.Model.extend({

    initialize: function () {
	this.template = _.template($("media-cell-template").html());
	this.render();
    }
    
    render: function() {
	var data = _.chain(this.model.attributes())
	    .clone()
	    .tap(addGlph)
	    .value();


	this.$el.html(this.template(data));
	return this;
	    
	function addGlyph(data) {
	    data.glyph = this.glyphiconForMedia();
	};
    }

    glyphiconForMedia: function () {
	var type, elem, glyphType;
	type = this.model.get("type");
	elem = $('<span></span>'); 

	elem.addClass('glyphicon');

	switch ( type ) {
	case 'music':
	    glyphType = "glyphicon-music";
	    break;

	case 'movie':
	    glyphType = "glyphicon-film";
	    break;

	case 'book':
	    glyphType = "glyphicon-book";
	    break;

	case 'game':
	    glyphType = "glyphicon-tower";
	    break;


	default:
	    glyphType = "glyphicon-ban-circle";
	}
	elem.addClass(glyphType);
	return elem;
    }
});
