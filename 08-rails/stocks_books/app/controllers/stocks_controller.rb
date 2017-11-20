class StocksController < ApplicationController
  def form
  end

  def lookup
    @stock_symbol = params[:stock_symbol].upcase

    begin
      # Stock.quote blows up if the stock does not exist.
      @last_price = StockQuote::Stock.quote(@stock_symbol).l
    rescue
      redirect_to '/stocks'
    end
  end
end
