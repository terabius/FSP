class User < ApplicationRecord

    # TODO : 
    # Add inclusion on states and read_conditions boolean
    # validats presences of read_conditions
    
  validates :email, uniqueness: true
  validates :first_name,:last_name,:email,:state, presence: true

  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token
  has_many :coins, through: :watchlist 
  has_one :watchlist , dependent: :destroy
  before_create :create_watchlist
  
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token!
    self.update!(session_token: generate_session_token)
    self.session_token
  end

  private
  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  private
  def create_watchlist
    watchlist = build_watchlist()
  end

end