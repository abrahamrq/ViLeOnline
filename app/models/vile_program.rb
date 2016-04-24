class VileProgram < ActiveRecord::Base
  acts_as_paranoid

  belongs_to :user, inverse_of: :vile_programs

  validates :name, presence: true
  validates :user, presence: true

  def hidden_for(accessing_user)
  	!(!hidden || accessing_user.id == user_id) 
  end
end
