class User < ApplicationRecord
  GENDERS = ['male', 'female']

  validates :email, :first_name, :last_name, :password_digest, :session_token, :birth_date, presence: true
  validates :gender, inclusion: { in: GENDERS }
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password

  after_initialize :ensure_session_token!

  has_many :friends_requested,
  foreign_key: :requester_id,
  class_name: :FriendRequest,
  dependent: :destroy

  has_many :friend_requests,
  foreign_key: :requestee_id,
  class_name: :FriendRequest,
  dependent: :destroy

  has_many :friendships,
  class_name: :Friendship,
  dependent: :destroy

  has_many :friends,
  through: :friendships

  has_many :authored_posts,
  foreign_key: :author_id,
  class_name: :Post,
  dependent: :destroy

  has_many :received_posts,
  foreign_key: :receiver_id,
  class_name: :Post,
  dependent: :destroy

  has_many :comments,
  foreign_key: :author_id,
  class_name: :Comment,
  dependent: :destroy

  has_many :likes,
  class_name: :Like,
  dependent: :destroy

  has_many :received_posts_comments,
  through: :received_posts,
  source: :comments

  has_many :received_posts_likes,
  through: :received_posts,
  source: :likes

  has_many :received_post_authors,
  through: :received_posts,
  source: :author

  has_many :received_post_commenters,
  through: :received_posts,
  source: :commenters


  def likes?(id)
    self.likes.exists?(id)
  end

  def viewable?(user)
    self.is_friends?(user.id) || self == user
  end


  def network
    self.friends.pluck(:id) << self.id
  end

  def is_friends?(id)
    self.friends.exists?(id)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
