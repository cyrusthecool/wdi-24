require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will write this code for you:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional but I like it: show all the ActiveRecord created SQL in the terminal.
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
end

class Plant < ActiveRecord::Base
end

before do
  @families = Butterfly.pluck(:family).uniq
end

get '/' do
  erb :home
end

# Index: Shows all the butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

get '/butterflies/families/:family' do
  @butterflies = Butterfly.where :family => params[:family]
  erb :butterflies_index
end

# New: Presents a form to fill in with new butterfly information
get '/butterflies/new' do
  erb :butterflies_new
end

# Create: Adds a new butterfly to the database
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.save

  redirect to("/butterflies/#{ butterfly.id }") # Show page
end

# Show: Shows information for a single butterfly
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# Edit: Shows the existing values for a single butterfly for editing.
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# Update: Updates an existing butterfly in the database with new information.
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.update :name => params[:name], :family => params[:family], :image => params[:image]
  redirect to("/butterflies/#{ params[:id] }")
end

# Destroy: Deletes the butterfly with the provided ID from the database
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end

################################################################################
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

get '/plants/new' do
  erb :plants_new
end

post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }") # Show page
end

get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.update :name => params[:name], :image => params[:image]
  redirect to("/plants/#{ plant.id }")
end

get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end

after do
  ActiveRecord::Base.connection.close
end
