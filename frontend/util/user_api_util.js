export const requestUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);

export const requestUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);


export const searchUsers = query => (
  $.ajax({
    url: `api/users/search`,
    method: 'GET',
    data: query
  })
);
