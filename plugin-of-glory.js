(function ($) {'use strict';
  // The `jQuery.fn` property is really just an alias for `jQuery.prototype`.
  // See https://github.com/jquery/jquery/blob/1.11.0/src/core.js#L36.

  // Define `greenify()`,
  // http://learn.jquery.com/plugins/basic-plugin-creation/#basic-plugin-authoring
  $.prototype.greenify = function () {
    this.css('color', 'rgb(0, 179, 0)');

    // To enable method chaning for this method, return the jQuery object:
    return this;
  };

  $.monetize = function () {
    alert('SHOW ME THE $$$!');
  };

})(window.jQuery);
