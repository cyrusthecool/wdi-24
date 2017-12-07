class PagesController < ApplicationController
  def index
    @brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    @time = Time.now
    @uptime = `uptime` # Runs the uptime system command NB this will not work on Heroku 
  end
end
