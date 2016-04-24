# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  email         :string(255)
#  name          :string(255)
#  last_name     :string(255)
#  user_name     :string(255)
#  password_hash :string(255)
#  password_salt :string(255)
#  deleted_at    :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ActiveRecord::Base
  acts_as_paranoid

  has_many :vile_programs, inverse_of: :user

  validates :name, presence: true
  validates :last_name, presence: true
  validates :password_hash, presence: true, on: :update
  validates :password_salt, presence: true, on: :update
  validates :password, presence: true, on: :create,
                       length: { in: 8..20 }
  validates :password_confirmation, presence: true, on: :create
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(?:\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: true, scope: :deleted_at }
  validates :user_name, presence: true, uniqueness: { case_sensitive: true,
                                                     	scope: :deleted_at }
  validate :valid_confirmation?, on: :create

  attr_accessor :password
  attr_accessor :password_confirmation

  before_create :encrypt

  def full_name
    "#{name} #{last_name}"
  end
  
  private

  def encrypt
    self.password_salt = BCrypt::Engine.generate_salt
    self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
  end

  def valid_confirmation?
    valid = password == password_confirmation
    errors.add(:password_confirmation, 'wrong confirmation') unless valid
    valid
  end
end
