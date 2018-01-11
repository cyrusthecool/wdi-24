Rails.application.routes.draw do
  get 'groucho' => 'pages#groucho'
  get 'harpo' => 'pages#harpo'
  get 'chico' => 'pages#chico'
  get 'gummo' => 'pages#gummo'
end
