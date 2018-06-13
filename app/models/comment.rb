class Comment < ApplicationRecord
  validates :author_id, :post_id, :content, presence: true

  belongs_to :post,
  class_name: :Post

  belongs_to :commenter,
  foreign_key: :author_id,
  class_name: :User

  has_many :children_comments,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  dependent: :destroy

end
