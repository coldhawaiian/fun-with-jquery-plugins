(function ($, _) {'use strict';
  // The `jQuery.fn` property is really just an alias for `jQuery.prototype`.
  // See https://github.com/jquery/jquery/blob/1.11.0/src/core.js#L36.

  // Define `greenify()`,
  // http://learn.jquery.com/plugins/basic-plugin-creation/#basic-plugin-authoring
  $.prototype.greenify = function (options) {
    // Use default options
    var settings = $.extend({ color: '#556b2f' }, options);

    // To enable method chaning for this method, return the jQuery object:
    return this.css({ color: settings.color });
  };

  /*
   * Various ways to iterate and map over collections:
   *
   * [].forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   * [].map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   * _.map: http://underscorejs.org/#map
  */
  $.panic = function () {
    var messages = _.map(['PANIC', 'WARNING', 'DANGER'], function (message) {
      var p = document.createElement('p');
      p.appendChild(document.createTextNode(message + '!'));

      var panicClass = document.createAttribute('class');
      panicClass.nodeValue = 'panic';
      p.setAttributeNode(panicClass);

      return p;
    });

    $('#container').append(messages);
  };

})(window.jQuery, window._);
