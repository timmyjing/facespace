# Facespace

[Live Demo](https://facespaced.herokuapp.com/)

Facespace is a social media platform that is inspired by Facebook built using a Rails, PostgresSQL, React.js and Redux cycle over 10 days. This app is a single page app where only API requests are made to the back-end and the return payload is managed by the React-Redux cycle.

## Features
- Users can create profiles for themselves and login
- Users can make friend requests to other users and friend other users
- User can post on a friends wall or post a status
- Users may like a post by thinking that it is sweet
- Users are able to comment on a post
- Search bar to discover other users
- Home page has a news feed of the most recent posts made by a user's network

## Friending
Friendship is an important feature in social media since personal privacy is a big concern. You don't want to have your wall posts and activities
exposed to someone who is not in your network. Friendship is achieved through making a friend request. A friend request resource can be either accepted or destroy and this is managed through the CRUD cycle. Once this friend request is accepted, a bidirectional friendship is created which models a mutual relationship. This differentiates a friendship from a social media follow as it must be mutual. The friendship API is hidden from the user in order to protect privacy concerns and to require a mutual relationship.


FriendRequest#update
```  
  def update
    @request = current_user.friend_requests.find(params[:id])
    if @request
      requester = @request.requester_id
      user = current_user.id
      friendship = Friendship.create(user_id: user, friend_id: requester)
      inverse_friendship = Friendship.create(user_id: requester, friend_id: user)
      @request.destroy
      render 'api/friend_requests/show'
    else
      render json: ['Cannot find friend request.'], status: 404
    end
  end
```

![alt text](https://raw.githubusercontent.com/timmyjing/facespace/master/wiki/Screen%20Shot%202018-06-15%20at%203.03.34%20PM.png "friend requests")
![alt text](https://raw.githubusercontent.com/timmyjing/facespace/master/wiki/Screen%20Shot%202018-06-15%20at%203.04.15%20PM.png "hidden profile")

## User Profiles
Another core feature of social media is the ability to interact with other users through posting content. A user profile is flush with content including their personal description, posts made by them at statuses, posts sent to them by their friends and the associated likes and comments, and other users who are their friends. One of the challenges of this project was managing the amount of data necessary to render a user profile. The database fetches are managed on the backend through associations so that one single query is made while avoiding an N + 1 query which might occur due to the heavy association. Hitting the User show route in the backend results in all of this data gathered in one query. A key necessity in having a working single page app is to manage the different slices of states since many entities are returned in one payload and so multiple API requests aren't necessary. Using Jbuilder on the Rails backend, the return payload is normalized so that the state is as flat as possible by normalizing data. Data is primarily stored by their object IDs but an array of IDs is also used when ordering is necessary like for posts and comments. Normalizing the data also prevents storing redundant data. Using a React-Redux cycle, the front end is able to just take this information and render it without a heavy workload and additional logic since the payload returned from a user request will return hit multiple reducers on the front end.

Consideration was also put into what data is returned from the back-end. When querying for a user, their friends are also needed in order to correctly render the profile. However, a partial set of their data is only necessary as their User Id, name and image are necessary to render the profile friend list. This reduces the amount of information stored on the front end while also protecting the user from any privacy concerns of having their complete data loaded. This will also improve scalability when there are a lot of users.

Backend UsersController#Show

The user requested by the show method is eagerly loaded with all their associations needed to render.

```
def show
  @user = User.includes(:friends, :received_posts, :received_posts_likes, :received_posts_comments, :friendships).find(params[:id])
  if @user
    render 'api/users/show'
  else
    render json: ['User not found.'], status: 404
  end
end
```


Additional logic was added in the JSON Jbuilder where a User#viewable? method was used in order to check if the current session user had the privileges to view the profile requested based on if they are friends or if the profile requested is the current user. Doing so prevents private user data from reaching the front end unless the current user has the privileges to view it. This not only protects data but also prevents the front end from having to hold unnecessary data that would not get rendered. The requested users wall content is only returned from the back end if the requested user's content is viewable by the current user.

JSON Jbuilder User#show payload snippet
```
if current_user.viewable?(@user)
  json.posts ...
  json.comments ...
  json.likes ...
end
```

A friendship key was also added into the User#show JSON payload for the user requested in order to simplify the logic on the front end. Doing allows the front end to render different content by simply checking if the current user has a friendship with the requested user. This friendship key in the user objects slice of the state on the front end also allows for easy deletion of friends as the friendship ID is readily available.

JSON Jbuilder User#show payload snippet
```
  json.friendship @user.friendships.find_by(friend_id: current_user.id)
```

## News Feed
With a news feed, a user is able to stay up to date with their network. This was achieved using the CRUD cycle where the Posts#index route was used to gather the most recent posts in the user's network. Once again, this payload is association heavy as the payload not only has to include the posts along with the receivers, authors, comments, and likes. Careful management of the Redux state was necessary in order to not bloat the front end storage. Since the posts are returned every time the news feed Post Index is loaded and every a user is loaded, there is no need to merge the new and old posts states. Posts also have to be returned in an ordered state, which is done by sorting on the backend and reversing since the IDs correlate with the order that the post was created.

![alt text](https://raw.githubusercontent.com/timmyjing/facespace/master/wiki/Screen%20Shot%202018-06-15%20at%203.05.00%20PM.png "news feed")


Redux Posts Reducer
```
case RECEIVE_POSTS:
// returning only posts fetched for news feed instead of merging to save memory
  newState.byId = action.posts.byId || {};
  newState.allId = action.posts.allId;
  return newState;
case RECEIVE_USER:
  // when loading a user profile, only store their posts in the post slice of state, news feed fetches new posts anyways
  newState.byId = action.payload.posts.byId || {};
  newState.allId = action.payload.posts.allId;
  return newState;
```

## Improvements
- Nested comments and likes for comments
- User uploads for profile pictures and cover photos
- User information editing
- Notifications
- Add additional error handling for likes and comments
- Responsive design and CSS tweaks
- Photo posts and links with previews
- Infinite scroll for news feed along with a refresh interval
- Refactoring user payloads to produce less data when the current user isn't friends with the requested user
- Facebook story :)
