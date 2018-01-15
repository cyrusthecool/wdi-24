def countdown_i(n=10)
  while n >= 0
    puts n
    n -= 1
    sleep 1
  end

  puts "Blast off!"
end

def countdown_r(n=10)
  if n < 0 # Base case
    puts "Blast off"
  else
    puts n
    sleep 1
    countdown_r n-1 # Recursive case which moves us closer to the case
  end
end

require 'pry'
binding.pry
