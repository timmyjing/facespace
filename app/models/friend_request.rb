class FriendRequest < ApplicationRecord
  STATUS = ['PENDING', 'APPROVED', 'DECLINED']

  validates :requester_id, :requestee_id, presence: true
  # validates :status, inclusion: {in: STATUS}
  validates :requester, uniqueness: {scope: :requestee}
  validates :requestee, uniqueness: {scope: :requester}
  validate :cannot_friend_self


  belongs_to :requester,
  foreign_key: :requester_id,
  class_name: :User

  belongs_to :requestee,
  foreign_key: :requestee_id,
  class_name: :User

  def cannot_friend_self
    errors.add(:friend_request, 'cannot friend self') unless requester_id != requestee_id
  end

end
