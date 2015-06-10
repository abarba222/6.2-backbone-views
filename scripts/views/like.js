var LikeButtonView = BaseButtonView.extend ({

  template: _.template($('#like-button').html()),

  events:{
    "click .icon": "toggleLike",
  },

  initialize: function(options) {
    BaseButtonView.prototype.initialize.call(this, options);
    this.likeButton = this.$("button.icon");
    this.model.on('change:liked', this._updateView, this);
  },

  render: function() {
    BaseButtonView.prototype.render.call(this);
    this.likeButton.addClass(this.model.isLiked ? "liked", "unliked");
  },

  toggleLike: function() {
    this.model.set('liked', !this.model.get('liked'));
  },

  _updateView: function() {
    if (this.model.get('liked')) {
      this._showLikedState();
    } else {
      this._showUnlikedState();
    }
  }
});
