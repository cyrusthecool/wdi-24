class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 24298498299
    @phone = 2125551212 # 10 digits for US style
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 15
    @story = "A very very very very very long time in a etc far away spaceships explosions"
  end

  def assets
  end

  def url
  end
end
