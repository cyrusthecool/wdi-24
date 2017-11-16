require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index: Shows all the butterflies
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'

  erb :butterflies_index
end

# New: Presents a form to fill in with new butterfly information
get '/butterflies/new' do
  erb :butterflies_new
end

# Show: Shows information for a single butterfly
get '/butterflies/:id' do
  # Fetch this particular butterfly from the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterfly = db.execute 'SELECT * FROM butterflies WHERE id = ' + params[:id]

  # sqlite3 gem ALWAYS returns an array so we can pluck the single butterfly from in there.
  @butterfly = @butterfly.first # Strip off the array

  erb :butterflies_show
end
