# Vile Controller
class VileController < ApplicationController
  def welcome
  end

  def try
  end

  def code
    if params[:id]
      @vile_program = VileProgram.find(params[:id])
      redirect_to code_path if @vile_program.hidden_for(current_user)
    else
      @vile_program = VileProgram.new
    end
  end

  def autosave
    set_saved_object
    if save_object
      render json: @vile_program, status: 200
    else
      render json: @vile_program.full_messages.join(', ').to_json, status: 400
    end
  end

  def destroy
    set_object
    if current_user.id == @vile_program.user_id
      @vile_program.destroy
      flash[:success] = 'Program deleted!'
    end
    redirect_to my_profile_path
  end

  def solve
  	code = params[:code]
  	result = `python python/ViLe/parser.py '#{code}' 'solve'`
  	render json: result.to_json, status: 200
  end

  def syntax_check
    code = params[:code]
    result = `python python/ViLe/parser.py '#{code}' 'syntax_check'`
    render json: result.to_json, status: 200
  end

  def print_quadruplets
    code = params[:code]
    result = `python python/ViLe/parser.py '#{code}' 'print_quadruplets'`
    render json: result.to_json, status: 200
  end

  def update_hidden
    set_object
    if current_user.id == @vile_program.user_id
      @vile_program.hidden = params[:hidden] == 'true'
      if @vile_program.save
        render json: @vile_program, status: 200
      else
        render json: @vile_program, status: 400
      end
    else
        render json: @vile_program, status: 403
    end
  end

  def copy_program
    @vile_program = VileProgram.new(vile_program_params)
    if @vile_program.save
      render json: @vile_program, status: 200
    else
      render json: @vile_program.full_messages.join(', ').to_json, status: 400
    end
  end

  private

  def set_object
    @vile_program = VileProgram.find_by_id(params[:id])
  end

  def set_saved_object
    @vile_program = VileProgram.find_by_id(params[:vile_program][:id])
    @vile_program = VileProgram.new(vile_program_params) if @vile_program.nil?
  end

  def save_object
    if @vile_program.new_record?
      @vile_program.save
    else
      @vile_program.update_attributes(vile_program_params)
    end
  end

  def vile_program_params
    params.require(:vile_program).permit(:name, :code, :xml_blocks)
          .merge(user_id: current_user.id)
  end
end
