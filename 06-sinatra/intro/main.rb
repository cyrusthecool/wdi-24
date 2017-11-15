require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "Hello World from the root"
end

get '/hello' do
  "Hello world from /hello"
end

get '/lucky_number' do
  "Here is your lucky number: #{ Random.rand(1..40).to_s }"
end

# Dynamic URLs! params[:name] will have the specific value
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize} #{ params[:last].upcase } is a silver member of the Marx Bros fan club"
end

get '/fanclub/:first/:last/:favorite' do
  "#{ params[:first].capitalize} #{ params[:last].upcase } is a silver member of the Marx Bros fan club and their favorite brother is #{ params[:favorite].capitalize }"
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end
