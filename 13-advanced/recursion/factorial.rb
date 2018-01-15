def factorial_i(n)
  result = 1
  while n > 1
    result = result * n # Mutation
    n -= 1 # Move closer to the base case
  end
  result
end

def factorial_r(n)
  if n > 1 # Recursive case
    n * factorial_r(n - 1)
  else
    1 # Base case
  end
end

require 'pry'
binding.pry
