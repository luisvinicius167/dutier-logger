// the logger
export default ({action, oldState, state}) => {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();
  console.groupCollapsed(`%caction %c${action.type} %c@${hour}:${minutes}:${seconds}:${milliseconds}`, 'color: #898989; font-size: 13px; font-weight: 500;', 'color: #333; font-size: 13px; font-weight: bold;', 'color: #898989; font-size: 13px; font-weight: 500;');
  console.log('%c prev state ', 'color: #888; font-size: 13px; font-weight: 500;', oldState )
  console.log('%c action ', 'color: #0098f9; font-size: 13px; font-weight: 500;', action);
  console.log('%c next state ', 'color: #00c34e; font-size: 13px; font-weight: 500;', state)
  console.groupEnd();
}