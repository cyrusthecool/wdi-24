class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # Reverse order

    respond_to do |format|
      format.html {} # This empty block tells Rails to continue its default behaviour of rendering index
      format.json { render :json => @fruits }
    end
  end
end
