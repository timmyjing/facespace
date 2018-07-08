// export const createPost = post => (
//   $.ajax({
//     url: 'api/posts/',
//     method: 'POST',
//     data: { post }
//   })
// );

export const createPost = formData => (
    $.ajax({
      url: 'api/posts/',
      method: 'POST',
      data: formData,
      processData: false,
      contentType: false
    })
  );

export const requestPost = id => (
  $.ajax({
    url: `api/posts/${id}`,
    method: 'GET'
  })
);


export const requestPosts = () => (
  $.ajax({
    url: `api/posts`,
    method: 'GET'
  })
);

export const updatePost = post => (
  $.ajax({
    url: `api/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
);


export const deletePost = id => (
  $.ajax({
    url: `api/posts/${id}`,
    method: 'DELETE'
  })
);
