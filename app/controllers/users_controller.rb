class UsersController < ApplicationController
	before_action :set_user, only: [:profile]

	def my_profile
		@user = current_user
	end

  def profile; end

  private

  def set_user
  	@user = User.find(params[:id])
  end
end
