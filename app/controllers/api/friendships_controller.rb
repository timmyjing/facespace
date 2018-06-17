class Api::FriendshipsController < ApplicationController

  def destroy
    @friendship = Friendship.find(params[:id])
    friend = @friendship.user_id
    @inverse_friendship = Friendship.find_by(user_id: current_user.id, friend_id: friend)
    @friendship.destroy
    @inverse_friendship.destroy
    render 'api/friendships/show'
  end

end


# CREDIT TO https://dankim.io/mutual-friendship-rails/ FOR SOME REFERENCE IN HELPING KEEP THE CODE DRY WITH THE AFTER_CREATE
