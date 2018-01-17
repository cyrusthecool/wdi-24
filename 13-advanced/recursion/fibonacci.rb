def fibonacci_i(n)
  a = 1
  b = 1

  while n > 1
    a, b = b, a + b # Parallel assignment: a = b; b = a + b
    n -= 1
  end

  a
end

# Very slow
def fibonacci_r(n)
  if n <= 2
    1 # Base case
  else
    fibonacci_r(n - 1) + fibonacci_r(n - 2)
  end
end

def fib(n, a=1, b=1)
  if n <= 2
    b # Base case
  else
    fib(n - 1, b, a+b) # SICP
  end
end

# Homework TODO
# Write a faster recursive fibonacci
# 1. Memoisation
# 2. Make a single recursive call each time

require 'pry'
binding.pry
