function LoggerMiddleware() {
  var timer = typeof window.performance !== 'undefined' && typeof window.performance.now === 'function' ? window.performance : Date;
  var console = window.console;

  return middleware;

  function middleware(store) {
    return function (next) {
      return function (action) {
        var time = new Date();

        var started = timer.now();
        var prevState = store.getState();

        var returnValue = next(action);
        var took = timer.now() - started;

        var nextState = store.getState();

        var formattedTime = ' @ ' + new Intl.DateTimeFormat().format(time);
        var formattedDuration = ' in ' + took.toFixed(2) + ' ms';
        var formattedAction = action;
        var message = 'action ' + formattedAction.type + formattedTime + formattedDuration;

        var shouldCollapse = typeof console.groupCollapsed === 'function';

        if (shouldCollapse) {
          console.groupCollapsed(message);
        } else {
          console.debug(message);
        }

        console.debug('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
        console.debug('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
        console.debug('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

        if (shouldCollapse) {
          console.groupEnd();
        }

        return returnValue;
      };
    };
  }
}
