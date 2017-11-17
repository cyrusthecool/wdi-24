require 'pry'

class MarxBrother
  # Setter
  def name=(n)
    @name = n
  end

  # Getter
  def name
    @name
  end

  # Setter
  def instrument=(i)
    @instrument = i
  end

  # Getter
  def instrument
    @instrument
  end

  # Setter
  def vice=(v)
    @vice = v
  end

  # Getter
  def vice
    @vice
  end

  def biography
    "My name is #{ @name }, I play the #{ @instrument } and I enjoy #{ @vice }"
  end
end

groucho = MarxBrother.new
groucho.name = 'Groucho Julius Marx'
groucho.instrument = 'guitar'
groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'
harpo.instrument = 'harp'
harpo.vice = 'mutism'

binding.pry
