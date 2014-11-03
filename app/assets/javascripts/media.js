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
		.pick("title","author", "created_at", "created", "aux", "kind", "owner", "id")
		.value();
	}
    });
    
    Market.Model.Media = Backbone.Collection.extend({
	model: Market.Model.Medium
    });


    //Bind the Media Views
    Market.Views.MediumDetailView = Backbone.View.extend({
	el: '#content',
	initialize: function() {
	    this.template = _.template($("#media-template").html());
	    this.missingTemplate = _.template($("#missing-media-template").html());
	    this.render();
	},
	
	render : function () {
	    var template = this.model ? 
		this.template : 
		this.missingTemplate;
	    this.$el.html(template(this.bindVar()));
	    return this;
	},

	bindVar: function () {
	    const kind = this.model ? this.model.get("kind") : "";
	    const authorLabel = this.model && this.model.get("kind");

	    return _.chain(this.model ? this.model.attributes : {})
		.clone()
		.extend({
		    authorLabel: getAuthorLabel(kind),
		    createdLabel:'Year created',
		    glyphicon: getGlyph(kind)
		    
		})
		.value();
	}
	
    });

    Market.Views.AddMediumView = Backbone.View.extend({
	el: '#content',

	events: {
	    "change select": "updateLabels"
	},
	initialize: function() {
	    this.template = _.template($("#add-media-template").html());
	    this.render();

	    this.authorLabel = this.$("#author-label");
	    this.auxLabel = this.$("#aux-label");
	},
	
	render : function () {
	    this.$el.html(this.template());
	    return this;
	},

	updateLabels: function() {
	    var val = this.$('select').val()
	    var kind = this.$('select option[value="'+val+'"]').html();
	    kind = kind.toLowerCase();
	    this.authorLabel.html(capitalize(getAuthorLabel(kind)));
	    this.auxLabel.html(capitalize(getAuxLabel(kind)));
	}
    });


    var cell = Backbone.View.extend({
	initialize: function() {
	    this.template = _.template($("#medium-cell-template").html());
	    this.render();
	},
	render: function () {
	    this.$el.html(this.template(getVariables(this.model)));
	}
    });

    Market.Views.MediumCell = cell;

    templateLoader.on("load:templates", function() {
	var standard = new Market.Model.Medium({id: window.mediumId});
	standard.fetch({
	    success: function (standard) {
		new Market.Views.MediumDetailView({ model: standard });
	    }
	});
    });

    return Market;

    function getAuthorLabel(kind) {
	return {
	    music: 'artist',
	    movie: 'director',
	    game:  'studio',
	}[kind] || 'author';
    }

    function getAuxLabel(kind) {
	return {
	    music: "album",
	    game: "platform"
	}[kind] || "genre";
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

    function capitalize(str) {
	return str[0].toUpperCase() +
	    str.substring(1).toLowerCase();
    }

    function getVariables(model) {
	const kind = model ? model.get("kind") : "";
	return _.chain(model ? model.attributes : {})
	    .clone()
	    .extend({
		authorLabel: getAuthorLabel(kind),
		createdLabel:'Year created',
		glyphicon: getGlyph(kind)
	    })
	    .value();
    }
})(Market || {});



