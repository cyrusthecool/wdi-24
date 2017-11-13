def hello
  puts "Hello World"
end

3.times { hello }

def add(a, b)
  a + b # Implicit return
end

puts add(7, 9) # => "16"

def hello(name='World')
  puts "Hello #{ name }"
end

hello 'Glenn'
hello
