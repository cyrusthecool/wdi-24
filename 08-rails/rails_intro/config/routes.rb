Rails.application.routes.draw do
  root :to => 'pages#hello' # get '/'
  get '/hello' => 'pages#hello'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/lol' => 'pages#lol'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calculator#calculate'
end
