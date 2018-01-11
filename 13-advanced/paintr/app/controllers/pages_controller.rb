class PagesController < ApplicationController
  def index
  end

  def hamldemo
    @random_number = Random.rand
  end
end
