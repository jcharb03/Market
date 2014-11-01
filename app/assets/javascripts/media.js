var Market = (function (Market) {
    //Bind the model

    Market.Model = Market.Model || {};
    
    Market.Model.Medium = Backbone.Model.extend({
	urlRoot: '/media',
	defaults: {
	    title: "",
	    author: "",
	    kind: "",
	    aux: "",
	    created: "",
	    owner: -1
	},
	
	parse: function (res) {
	    return _.chain(res)
		.extend({
		    created: res.year_created,
		    aux: res.secondary_info,
		    owner: res.user_id
		})
		.pick("title","author", "created_at", "created", "aux", "kind", "owner")
		.value();
	}
    });
    
    Market.Model.Media = Backbone.Collection.extend({
	model: Market.Model.Medium
    });


    //Bind the Media Vies
    var MediumDetailView = Backbone.View.extend({
	el: '#content',
	initialize: function() {
	    this.template = _.template($("#media-template").html());
	    this.render();
	},
	
	render : function () {
	    this.$el.html(this.template(this.bindVar()));
	    return this;
	},

	bindVar: function () {
	    return _.chain(this.model.attributes)
		.clone()
		.extend({
		    authorLabel: getAuthorLabel(this.model.get("kind")),
		    createdLabel:'Year created',
		    glyphicon: getGlyph(this.model.get("kind"))
		    
		})
		.value();
	}
	
    });

    var AddMediumView = Backbone.View.extend({
	el: '#content',
	initialize: function() {
	    this.template = _.template($("#add-media-template").html());
	    this.render();
	},
	
	render : function () {
	    this.$el.html(this.template());
	    return this;
	}
    });


    return Market;

    function getAuthorLabel(kind) {
	return {
	    music: 'artist',
	    movie: 'director',
	    game:  'studio',
	}[kind] || 'author';
    }

    function getGlyph(type) {
	var elem, glyphType;
	const defaultGlyphType = "glyphicon-ban-circle";

	glyphType = ({
	    music: "glyphicon-music",
	    movie: "glyphicon-film",
	    book:  "glyphicon-book",
	    game:  "glyphicon-tower",
	}[type]) || defaultGlyphType;

	return "<span class='glyphicon "+glyphType+"'></span>";
    }

})(Market || {});



