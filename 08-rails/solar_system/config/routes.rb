Rails.application.routes.draw do
  root :to => 'planets#index'
  get '/planets' => 'planets#index' # Shows all the planets
  get '/planets/new' => 'planets#new' # Shows the form for a new planet
  post '/planets' => 'planets#create' # Shoves the new planet into the db
  get '/planets/:id' => 'planets#show', :as => 'planet' # Shows a single planet
end
