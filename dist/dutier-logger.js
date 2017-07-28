/**
  * @name dutier
  * @description Logger for Dutier.
  * @author Luis Vinícius
  * @email luis@uilabs.me
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Logger = factory());
}(this, (function () { 'use strict';

// the logger
var index = (function (_ref) {
  var action = _ref.action,
      oldState = _ref.oldState,
      state = _ref.state;

  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliseconds = time.getMilliseconds();
  console.groupCollapsed('%caction %c' + action.type + ' %c@' + hour + ':' + minutes + ':' + seconds + ':' + milliseconds, 'color: #898989; font-size: 13px; font-weight: 500;', 'color: #333; font-size: 13px; font-weight: bold;', 'color: #898989; font-size: 13px; font-weight: 500;');
  console.log('%c prev state ', 'color: #888; font-size: 13px; font-weight: 500;', oldState);
  console.log('%c action ', 'color: #0098f9; font-size: 13px; font-weight: 500;', action);
  console.log('%c next state ', 'color: #00c34e; font-size: 13px; font-weight: 500;', state);
  console.groupEnd();
});

return index;

})));
//# sourceMappingURL=dutier-logger.js.map
