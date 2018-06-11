export const createPost = post => (
  $.ajax({
    url: 'api/posts/',
    method: 'POST',
    data: { post }
  })
);

export const requestPost = id => (
  $.ajax({
    url: `api/posts/$id`,
    method: 'GET'
  })
);


export const requestPosts = () => (
  $.ajax({
    url: `api/posts`,
    method: 'GET'
  })
);
