require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents"
  end

  def deny_allegations
    "I deny that completely and I was drunk and I don't remember"
  end
end

class Stooge < Actor # Inheritance
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice

  def initialize(name='Somebody Marx', instrument=nil, vice=nil)
    @name = name
    @instrument = instrument
    @vice = vice
  end

  def biography
    "My name is #{ @name }, I play the #{ @instrument } and I enjoy #{ @vice }"
  end

  def sing
    "Everyone / Says I love you"
  end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'
harpo.instrument = 'harp'
harpo.vice = 'mutism'

binding.pry
