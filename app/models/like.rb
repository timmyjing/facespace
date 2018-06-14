class Like < ApplicationRecord
  validates :user_id, uniqueness: {scope: [:liked_id, :liked_type], message: 'can only like once' }

  belongs_to :user,
  class_name: :User

  belongs_to :liked, polymorphic: true

end
