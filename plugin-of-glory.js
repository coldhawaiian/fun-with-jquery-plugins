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

  /*
   * Various ways to iterate and map over collections:
   *
   * [].forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   * [].map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   * _.map: http://underscorejs.org/#map
  */
  $.panic = function () {
    var panicClass, messages = [];

    for (var i = 0; i < 3; i++) {
      messages.push(document.createElement('p'));

      panicClass = document.createAttribute('class');
      panicClass.nodeValue = 'panic';
      messages[i].setAttributeNode(panicClass);
    }
    messages[0].appendChild(document.createTextNode('PANIC!'));
    messages[1].appendChild(document.createTextNode('WARNING!'));
    messages[2].appendChild(document.createTextNode('DANGER!'));

    $('#container').append(messages);
  };

})(window.jQuery);
