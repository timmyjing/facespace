class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id, message: "Already friends!"}
  validate :no_self_love


  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :friend,
  foreign_key: :friend_id,
  class_name: :User

  private

  def no_self_love
    errors.add(:friendship, 'Self love is healthy but not on Facespace.') if user_id == friend_id
  end

end
