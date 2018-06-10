class Api::FriendshipController < ApplicationController

  def destroy
    @friendship = current_user.friends.find(params[:id])
    user = @friendship.user_id
    friend = @friendship.friend_id
    @inverse_friendship = Friendship.find_by(user_id: friend, friend_id: user)
    @friendship.destroy
    @inverse_friendship.destroy
    render 'api/friendship/show'
  end

end


# CREDIT TO https://dankim.io/mutual-friendship-rails/ FOR SOME REFERENCE IN HELPING KEEP THE CODE DRY WITH THE AFTER_CREATE
