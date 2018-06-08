const usersSelector = users => (
  Object.keys(users).map( id => users[id])
);

export default usersSelector;
