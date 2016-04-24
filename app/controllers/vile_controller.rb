# Vile Controller
class VileController < ApplicationController
  def welcome
  end

  def try
  end

  def code
  end

  def solve
  	code = params[:code]
  	result = `python python/ViLe/parser.py '#{code}'`
  	render json: result.to_json, status: 200
  end
end
