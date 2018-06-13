class Post < ApplicationRecord
  validates :author_id, :receiver_id, :content, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User


  belongs_to :receiver,
  foreign_key: :receiver_id,
  class_name: :User

  has_many :comments,
  class_name: :Comment,
  dependent: :destroy

  has_many :commenters,
  through: :comments
  
end
