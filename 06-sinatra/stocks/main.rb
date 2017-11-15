require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :form
end

get '/lookup' do
  redirect to('/') if params[:stock_symbol].empty?

  @stock_symbol = params[:stock_symbol].upcase

  begin
    # Stock.quote blows up if the stock does not exist.
    @last_price = StockQuote::Stock.quote(@stock_symbol).l
  rescue
    redirect to('/')
  end
  erb :lookup
end
