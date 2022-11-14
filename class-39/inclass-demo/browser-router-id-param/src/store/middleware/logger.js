// why: log the action in the console as a precursor to thunk
// goal: use middleware in a way that redux likes
// notes:  redux is very function heavy.  aka it favors functions AND I can curry information to functions

const logger = (store) => (next) => (action) => {
  // I can do a thing here.  it can be async, doesn't have to be
  console.log('__action__', action);
  next(action);
}

export default logger;
