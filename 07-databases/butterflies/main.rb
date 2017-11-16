require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index: Shows all the butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# New: Presents a form to fill in with new butterfly information
get '/butterflies/new' do
  erb :butterflies_new
end

# Create: Adds a new butterfly to the database
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params['name'] }', '#{ params['family'] }', '#{ params['image'] }')"
  redirect to('/butterflies') # Get request
end

# Show: Shows information for a single butterfly
get '/butterflies/:id' do
  @butterfly = query_db('SELECT * FROM butterflies WHERE id = ' + params[:id]).first
  erb :butterflies_show
end

# Destroy: Deletes the butterfly with the provided ID from the database
get '/butterflies/:id/delete' do
  query_db 'DELETE FROM butterflies WHERE id = ' + params[:id]
  redirect to('/butterflies')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # Optional but nice for debugging

  results = db.execute sql_statement
  db.close
  results # Implicit return
end
