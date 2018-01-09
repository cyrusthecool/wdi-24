class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # Reverse order

    respond_to do |format|
      format.html {} # This empty block tells Rails to continue its default behaviour of rendering index
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit # /fruits/@fruit.id
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
