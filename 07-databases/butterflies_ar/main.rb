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

get '/' do
  erb :home
end

# Index: Shows all the butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
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

after do
  ActiveRecord::Base.connection.close
end
