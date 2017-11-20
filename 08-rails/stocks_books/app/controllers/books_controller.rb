class BooksController < ApplicationController
  def form
  end

  def lookup
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:book_title] }"
    info = HTTParty.get book_url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  end
end
